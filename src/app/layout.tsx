import { GoogleTagManager } from "@next/third-parties/google";
import type { JSX, ReactNode } from "react";
import React from "react";

import NavBar from "./components/nav-bar";
import { IntegrationTester } from "./components/SelfTester";

export const gtmId = "GTM-W778TFZR";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={gtmId} />
      <body
        style={{
          background: "#ccc",
        }}
      >
        <IntegrationTester />
        <main style={{ padding: "40px" }}>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
