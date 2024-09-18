"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Button } from "@/components/Button";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "@/components/Link";
import { PlusGrid, PlusGridItem, PlusGridRow } from "@/components/PlusGrid";

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/malgorzataszynkarczuk/"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="rounded-full  data-[hover]:text-gray-500"
      >
        <SocialIconLinkedIn className="size-8" />
      </Link>
    </>
  );
}

const links = [{ href: "/#footer", label: "Get In Touch" }];

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="font-secondary uppercase text-[12px] flex items-center px-4 py-3 text-base font-normal  bg-blend-multiply data-[hover]:text-gray-500"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <div className="flex">
        <PlusGridItem className="flex items-center gap-8 py-3">
          <Button
            variant="secondary"
            className="font-secondary uppercase text-[12px] flex items-center px-4 py-3 text-base font-normal  bg-blend-multiply data-[hover]:text-gray-500 border-none shadow-none"
            href="/cv/my_cv.pdf"
            download="CV_Malgorzata_Szynkarczuk.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
          <SocialLinks />
        </PlusGridItem>
      </div>
    </nav>
  );
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  );
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  );
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex items-center gap-6">
            <PlusGridItem className="hidden md:block py-3">
              <Link href="/" title="Home">
                <h1 className="text-[16px] font-extrabold">
                  MS
                  <span className="text-[#873ac6]">.</span>
                </h1>
              </Link>
            </PlusGridItem>
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <h1 className="text-[16px] font-extrabold">
                  Małgorzata Szynkarczuk
                  <span className="text-[#873ac6]">.</span>
                </h1>
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden text-[16px] items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  );
}
