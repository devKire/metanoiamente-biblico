"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { Bird } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SectionHeroProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "checkoutLink"
  >;
  landingpage: Pick<LandingPage, "name" | "description" | "coverImageUrl">;
}

const SectionHero = ({ contact }: SectionHeroProps) => {
  function handleClickCheckout() {
    if (!contact.checkoutLink) {
      console.error("Checkout link não encontrado.");
      return;
    }

    window.open(contact.checkoutLink, "_blank");
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-visible bg-gradient-to-br from-[#F5EBDD] via-[#E8DCC8] to-[#D9C8A9] px-4 py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRBM0MyQSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            className="order-2 text-center md:order-1 md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-poppins mb-6 bg-gradient-to-r from-[#4A3C2A] to-[#C6A76F] bg-clip-text text-4xl leading-tight font-semibold text-transparent md:text-5xl lg:text-6xl">
              Transforme Sua Mente
              <br />
              <span className="text-[#C6A76F]">Através da Palavra</span>
            </h1>
            <p className="font-merriweather mb-8 text-lg text-[#4A3C2A] opacity-90 md:text-xl">
              Fundamentos da fé para ter uma mente verdadeiramente renovada
            </p>

            <div className="mb-8 rounded-r-lg border-l-4 border-[#C6A76F] bg-white/50 p-6 shadow-lg backdrop-blur-sm">
              <p className="font-merriweather text-base text-[#4A3C2A] italic md:text-lg">
                &ldquo;E não vos conformeis com este mundo, mas transformai-vos
                pela renovação do vosso entendimento...&rdquo;
              </p>
              <p className="font-montserrat mt-2 text-sm text-[#C6A76F]">
                — Romanos 12:2
              </p>
            </div>

            <motion.button
              className="font-montserrat group mx-auto flex items-center gap-3 rounded-full bg-[#4A3C2A] px-8 py-4 text-lg font-medium text-[#F5EBDD] shadow-xl transition-all duration-300 hover:bg-[#C6A76F] hover:text-[#4A3C2A] md:mx-0"
              onClick={handleClickCheckout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bird className="h-5 w-5 group-hover:animate-bounce" />
              Quero Transformar Minha Mente
            </motion.button>

            <p className="font-merriweather mt-6 text-sm text-[#4A3C2A]">
              <span className="font-semibold">✨ Bônus Exclusivo:</span> Acesso
              à comunidade WhatsApp de estudos bíblicos
            </p>
          </motion.div>

          <motion.div
            className="order-1 flex justify-center md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Container da imagem responsivo */}
            <div className="relative z-20 w-full">
              <div className="relative aspect-[3/4] w-full max-w-md scale-[2] lg:max-w-2xl">
                <Image
                  src="https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/mockups/2.png"
                  alt="E-book Sendo Metanoiamente Bíblico - Fundamentos da Fé"
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 0 40px rgba(198, 167, 111, 0.8))",
                  }}
                  priority
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                />
              </div>
            </div>
            <div className="relative">
              {/* Efeito de brilho aumentado */}
              <div className="blur-4xl absolute inset-0 scale-150 rounded-full bg-[#C6A76F] opacity-40"></div>

              {/* Efeito de brilho extra para destacar ainda mais */}
              <div className="bg-gradient-radial absolute top-1/2 left-1/2 z-10 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 transform rounded-full from-[#C6A76F]/20 to-transparent blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efeito de partículas para destacar a imagem expandida */}
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        <div className="bg-gradient-radial absolute top-1/2 left-1/2 h-[200vh] w-[200vw] -translate-x-1/2 -translate-y-1/2 transform from-transparent via-transparent to-[#C6A76F]/5"></div>
      </div>
    </section>
  );
};

export default SectionHero;
