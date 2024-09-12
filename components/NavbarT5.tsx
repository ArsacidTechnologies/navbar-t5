"use client";
import React from "react";
import { T5Dock } from "./T5Dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
export function NavbarT5() {
  const links = [
    {
      title: "step1",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "step2",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#step2",
    },
    {
      title: "step3",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#step3",
    },

    {
      title: "step4",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#step4",
    },

    {
      title: "step5",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#step5",
    },
    {
      title: "step6",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#step6",
    },
  ];
  return (
    <div className="fixed bottom-[0vh] z-[1000] min-h-[10vh] w-[100vw] justify-center">
      <T5Dock
        desktopClassName="bg-gray-600/50 backdrop-blur-sm w-fit"
        mobileClassName="absolute " // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
