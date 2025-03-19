import { redirect } from "next/navigation";
import type { JSX } from "react";

export default function SovendusLandingPageDemo(): JSX.Element {
  redirect("/landing-page");
}
