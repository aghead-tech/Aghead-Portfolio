/*--====-- Mobile Bottom Navigation Bar Component --====--*/
"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { headerData, NavLink } from "../../data/layoutData";

interface NavigationBarProps {
  navLinks?: NavLink[];
}

export function NavigationBar({
  navLinks = headerData.navLinks,
}: NavigationBarProps = {}) {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-5 gap-2 p-4  rounded-l-xl rounded-r-xl bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl">
      {navLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl transition-all duration-300 ${
              isActive(link.path)
                ? "bg-linear-to-r from-theme-start to-theme-end text-white shadow-lg"
                : "text-foreground hover:bg-accent"
            }`}
          >
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <span className="text-xs font-medium">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
