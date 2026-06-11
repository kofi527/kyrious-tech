"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

type Step = "name" | "email" | "message" | "sending" | "done";

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    text: "Hi! I'm the Kyrious Tech assistant. What's your name?",
  },
];

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

type ChatWidgetProps = {
  /** When true, renders inline (e.g. contact page) instead of a floating button. */
  embedded?: boolean;
};

export function ChatWidget({ embedded = false }: ChatWidgetProps) {
  const [open, setOpen] = useState(embedded);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [step, setStep] = useState<Step>("name");
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  function resetConversation() {
    setMessages(INITIAL_MESSAGES);
    setStep("name");
    setInput("");
    setName("");
    setEmail("");
    setError(null);
  }

  async function submitMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || step === "sending" || step === "done") return;

    setError(null);
    setMessages((prev) => [
      ...prev,
      { id: createId(), role: "user", text: trimmed },
    ]);
    setInput("");

    if (step === "name") {
      setName(trimmed);
      setStep("email");
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          text: `Thanks, ${trimmed.split(" ")[0]}! What email should we reply to?`,
        },
      ]);
      return;
    }

    if (step === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        setError("Please enter a valid email address.");
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            text: "That doesn't look like a valid email. Could you try again?",
          },
        ]);
        return;
      }
      setEmail(trimmed);
      setStep("message");
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          text: "Great. How can we help you today?",
        },
      ]);
      return;
    }

    if (step === "message") {
      setStep("sending");
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message: trimmed }),
        });
        const data = (await res.json()) as { error?: string };

        if (!res.ok) {
          throw new Error(data.error ?? "Something went wrong.");
        }

        setStep("done");
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            text: "Your message is on its way. We'll get back to you within one business day.",
          },
        ]);
      } catch (err) {
        setStep("message");
        const message =
          err instanceof Error ? err.message : "Failed to send. Please try again.";
        setError(message);
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "assistant",
            text: message,
          },
        ]);
      }
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    void submitMessage(input);
  }

  const panel = (
    <div
      className={
        embedded
          ? "flex h-[min(520px,70vh)] w-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl"
          : "fixed bottom-24 right-6 z-50 flex h-[min(480px,calc(100vh-8rem))] w-[min(100vw-3rem,380px)] flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/50"
      }
    >
      <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-cyan-300">Kyrious Tech</p>
          <p className="text-xs text-slate-400">We typically reply within 24h</p>
        </div>
        {!embedded && (
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg px-2 py-1 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
            aria-label="Close chat"
          >
            ✕
          </button>
        )}
      </header>

      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
        role="log"
        aria-live="polite"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "rounded-br-md bg-cyan-500 text-slate-950"
                  : "rounded-bl-md border border-slate-700 bg-slate-800 text-slate-100"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        {step === "sending" && (
          <p className="text-xs text-slate-500">Sending…</p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-slate-800 bg-slate-950/80 p-3"
      >
        {error && step !== "done" && (
          <p className="mb-2 text-xs text-red-400" role="alert">
            {error}
          </p>
        )}
        {step === "done" ? (
          <button
            type="button"
            onClick={resetConversation}
            className="w-full rounded-lg border border-slate-600 py-2.5 text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Send another message
          </button>
        ) : (
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type={step === "email" ? "email" : "text"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={step === "sending"}
              placeholder={
                step === "name"
                  ? "Your name"
                  : step === "email"
                    ? "you@company.com"
                    : "Tell us about your project…"
              }
              className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 disabled:opacity-50"
              aria-label={
                step === "name"
                  ? "Your name"
                  : step === "email"
                    ? "Your email"
                    : "Your message"
              }
            />
            <button
              type="submit"
              disabled={!input.trim() || step === "sending"}
              className="shrink-0 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </div>
        )}
      </form>
    </div>
  );

  if (embedded) {
    return panel;
  }

  return (
    <>
      {open && panel}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-300 hover:scale-105 active:scale-95"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <span className="text-lg" aria-hidden>
            ✕
          </span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.954.332-5.396 2.527-5.752 5.464-.246 2.192-.692 4.527-1.026 6.371a24.37 24.37 0 01-.548 3.129 2.958 2.958 0 01-1.311 1.911 24.774 24.774 0 003.09 1.356 25.175 25.175 0 003.352 1.009c.598.147 1.206.262 1.817.346a25.133 25.133 0 003.772-.019 7.092 7.092 0 004.713-2.66 24.63 24.63 0 01-1.025 3.533 24.552 24.552 0 01-4.742 3.129 25.133 25.133 0 01-6.371 1.356c-.598-.147-1.206-.262-1.817-.346a25.175 25.175 0 01-3.352-1.009 24.774 24.774 0 01-3.09-1.356 2.958 2.958 0 01-1.311-1.911 24.37 24.37 0 01-.548-3.129c-.334-1.844-.78-4.179-1.026-6.371-.356-2.937-2.798-5.132-5.752-5.464a50.89 50.89 0 00-8.42 0 4.403 4.403 0 00-1.032.211c.114-1.866 1.483-3.477 3.405-3.727zM12 6.904c-2.338 0-4.235 1.92-4.235 4.29 0 2.369 1.897 4.29 4.235 4.29 2.338 0 4.235-1.921 4.235-4.29 0-2.37-1.897-4.29-4.235-4.29z" />
          </svg>
        )}
      </button>
    </>
  );
}
