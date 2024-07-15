"use client";
import Link from "next/link";
import { ToggleMode } from "@/components/global/toggleMode";
import { HeaderStyles } from "./headerStyles";

export const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="start-section">
        <div className="">Maedeh Morajabi</div>
        <div className="">
          <Link href="/">_Hello</Link>
          <Link href="/about">_about-me</Link>
          <Link href="/projects">_projects</Link>
        </div>
      </div>
      <div className="end-section">
        <ToggleMode />
        <Link href="/contact">_contact-me</Link>
      </div>
    </HeaderStyles>
  );
};
