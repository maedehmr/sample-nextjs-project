"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import { CustomSwitch } from "@/components/custom/switch";
import { HeaderStyles } from "./headerStyles";
import { CustomDrawer } from "@/components/custom/drawer";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
          <div className="menu-links">
            {links.start.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="end-section">
          <CustomSwitch />
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
      <CustomDrawer open={open} onClose={onClose} title="Maedeh Morajabi">
        {links.start.concat(links.end).map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </Link>
        ))}
        <CustomSwitch />
      </CustomDrawer>
    </HeaderStyles>
  );
};
