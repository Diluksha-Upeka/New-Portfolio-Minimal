"use client";

import { useEffect } from "react";

export default function ConsoleGreeting() {
  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      const style1 = "font-size: 14px; font-weight: bold; color: #888;";
      const style2 = "font-size: 12px; color: #555; font-style: italic;";

      console.log("%c✦ Zen Portfolio Initialized", style1);
      console.log(
        "%cLooking at the source code? Let's talk about AI & scalable systems.",
        style2
      );
      console.log("%cEmail: dilukshaupeka@gmail.com", style2);
    }
  }, []);

  return null;
}
