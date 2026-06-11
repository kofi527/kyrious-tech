"use client";

import { usePathname } from "next/navigation";
import { ChatWidget } from "./ChatWidget";

export function SiteChat() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <ChatWidget />;
}
