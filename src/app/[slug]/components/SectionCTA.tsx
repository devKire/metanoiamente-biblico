"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Lightbulb } from "lucide-react";
import React from "react";

interface SectionCTAProps {
  contact: Pick<ContactInfo, "checkoutLink">;
  landingpage: Pick<LandingPage, "name">;
}

const SectionCTA = ({ contact }: SectionCTAProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  function handleClickCheckout() {
    if (!contact.checkoutLink) {
      console.error("Checkout link não encontrado.");
      return;
    }

    window.open(contact.checkoutLink, "_blank");
  }

  const benefits = [
    "Acesso imediato ao e-book completo",
    "Bônus: Comunidade exclusiva no WhatsApp",
    "Conteúdo fundamentado nas Escrituras",
    "7 dias de garantia incondicional",
    "Suporte direto com o autor",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4A3C2A] via-[#5D4C35] to-[#4A3C2A] px-4 py-16 sm:py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRUJERCIgc3Ryb2tlLXdpZHRoPSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[#C6A76F]/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#B89A5E]/10 blur-3xl" />
      </div>
      <div className="relative container mx-auto max-w-5xl text-center">
        <motion.div {...fadeInUp} className="space-y-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C6A76F]/20"
            >
              <Lightbulb className="h-8 w-8 text-[#C6A76F]" />
            </motion.div>

            <h2 className="font-poppins text-3xl font-bold text-[#F5EBDD] sm:text-4xl md:text-5xl lg:text-6xl">
              Sua Jornada de{" "}
              <span className="text-[#C6A76F]">Transformação</span>
              <br />
              Começa Agora
            </h2>

            <motion.p
              className="font-merriweather mx-auto max-w-3xl text-lg leading-relaxed text-[#F5EBDD]/90 sm:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Não deixe para amanhã a transformação que Deus tem preparado para
              você hoje. Dê o primeiro passo em direção a uma vida renovada pelo
              poder da Palavra.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={handleClickCheckout}
            className="font-montserrat group hover:shadow-3xl mx-auto flex items-center gap-4 rounded-full bg-[#C6A76F] px-12 py-5 text-xl font-semibold text-[#4A3C2A] shadow-2xl transition-all duration-500 hover:bg-[#F5EBDD]"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Lightbulb className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
            Sim, Quero Começar Minha Transformação
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          {/* Benefits List */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-center gap-3 rounded-lg bg-[#5D4C35]/50 p-4 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Check className="h-5 w-5 text-[#C6A76F]" />
                </motion.div>
                <span className="font-merriweather text-sm text-[#F5EBDD] sm:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="rounded-2xl border border-[#C6A76F]/30 bg-[#5D4C35]/30 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-[#C6A76F]" />
              <p className="font-merriweather text-[#F5EBDD]/90">
                <span className="font-semibold text-[#C6A76F]">
                  Oferta especial:
                </span>{" "}
                Disponível por tempo limitado • Garantia de 7 dias
              </p>
            </div>
          </motion.div>

          {/* Security Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-montserrat text-sm text-[#F5EBDD]/70"
          >
            🔒 Compra 100% segura • Ambiente protegido
          </motion.p>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SectionCTA;
