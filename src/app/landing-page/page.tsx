"use client";

import type { JSX } from "react";
import { SovendusLandingPageDemoForm } from "sovendus-integration-scripts/demo";

import { gtmId } from "../layout";

export default function SovendusLandingPageDemo(): JSX.Element {
  return (
    <div>
      <h1 style={{ paddingBottom: "40px" }}>
        This a example landing page for GTM using GTM ID: {gtmId}
      </h1>
      <div>
        <SovendusLandingPageDemoForm />
      </div>
    </div>
  );
}
