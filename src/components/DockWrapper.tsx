"use client";

import React, { useEffect, useState } from "react";
import Dock from "./Dock";
import { User, Code, Briefcase, Award, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function DockWrapper() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const items = [
    { icon: <User size={18} />, label: "About", onClick: () => { window.location.hash = "#about" } },
    { icon: <Code size={18} />, label: "Skills", onClick: () => { window.location.hash = "#skills" } },
    { icon: <Briefcase size={18} />, label: "Projects", onClick: () => { window.location.hash = "#projects" } },
    { icon: <Award size={18} />, label: "Experience", onClick: () => { window.location.hash = "#experience" } },
    { icon: <Mail size={18} />, label: "Contact", onClick: () => { window.location.hash = "#contact" } },
  ];

  if (mounted) {
    items.push({
      icon: theme === "dark" ? <Sun size={18} /> : <Moon size={18} />,
      label: "Theme",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark")
    });
  }

  return (
    <div className="z-50">
      <Dock 
        items={items}
        panelHeight={58}
        baseItemSize={42}
        magnification={60}
      />
    </div>
  );
}
