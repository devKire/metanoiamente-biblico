"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import React from "react";

interface FooterProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "email" | "phone"
  >;
  landingpage: Pick<LandingPage, "name" | "description" | "avatarImageUrl">;
}

const Footer = ({ contact, landingpage }: FooterProps) => {
  console.log(contact, landingpage);
  return (
    <footer className="bg-[#2A2118] px-4 py-12 text-center text-[#F5EBDD]">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="font-merriweather mb-4 text-sm">
            © 2024 Sendo Metanoiamente Bíblico. Todos os direitos reservados.
          </p>
        </div>

        <div className="border-t border-[#C6A76F]/30 pt-6">
          <p className="font-merriweather mb-2 text-base italic">
            &ldquo;Lâmpada para os meus pés é a tua palavra e luz, para o meu
            caminho.&rdquo;
          </p>
          <p className="font-montserrat text-sm text-[#C6A76F]">
            — Salmos 119:105
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
