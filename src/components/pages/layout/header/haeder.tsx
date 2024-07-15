"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import { MySwitch } from "@/components/common/switch";
import { HeaderStyles } from "./headerStyles";
import { MyDrawer } from "@/components/common/drawer";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const links = {
    start: [
      { href: "/", label: "_Hello" },
      { href: "/about", label: "_about-me" },
      { href: "/projects", label: "_projects" },
    ],
    end: [{ href: "/contact", label: "_contact-me" }],
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <HeaderStyles>
      <div className="desktop-menu">
        <div className="start-section">
          <div className="">Maedeh Morajabi</div>
          <div className="">
            {links.start.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="end-section">
          <MySwitch />
          {links.end.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mobile-menu">
        <div className="">Maedeh Morajabi</div>
        <Button
          className="menu-mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <i className="ri-menu-line"></i>
        </Button>
      </div>
      <MyDrawer open={open} onClose={onClose} title="Maedeh Morajabi">
        {links.start.concat(links.end).map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </Link>
        ))}
        <MySwitch />
      </MyDrawer>
    </HeaderStyles>
  );
};
