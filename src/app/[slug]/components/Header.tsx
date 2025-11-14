"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
interface HeaderProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name" | "avatarImageUrl">;
}

const navItems = [
  { name: "Início", path: "#hero" },
  { name: "Serviços", path: "#services" },
  { name: "Depoimentos", path: "#testimonials" },
  { name: "Contato", path: "#cta" },
];

const Header = ({ contact, landingpage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-rose-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="group flex items-center space-x-2">
            {/* Logo Circular */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-full shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Image
                src={landingpage.avatarImageUrl}
                width={40}
                height={40}
                alt="logo"
                className="rounded-full object-cover"
              />
            </div>

            {/* Nome */}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
              {landingpage.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.path
                    ? "text-rose-600"
                    : "text-gray-700 hover:text-rose-600"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute right-0 bottom-0 left-0 h-0.5 bg-rose-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href={contact.whatsappLink || "#cta"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-2 font-medium text-white transition-shadow duration-200 hover:shadow-lg"
            >
              Agendar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-rose-100 bg-white md:hidden"
          >
            <div className="space-y-1 px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    pathname === item.path
                      ? "bg-rose-50 text-rose-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-rose-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={contact.whatsappLink || "#cta"}
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-2 text-center font-medium text-white"
              >
                Agendar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
