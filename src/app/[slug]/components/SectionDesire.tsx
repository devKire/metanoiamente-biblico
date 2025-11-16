"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { ArrowRight, Award, Bird, Crown, Star } from "lucide-react";
import Image from "next/image";

interface SectionAboutProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "checkoutLink"
  >;
  landingpage: Pick<LandingPage, "name">;
}

const SectionDesire = ({ contact }: SectionAboutProps) => {
  function handleClickCheckout() {
    if (!contact.checkoutLink) {
      console.error("Checkout link não encontrado.");
      return;
    }

    window.open(contact.checkoutLink, "_blank");
  }

  const benefits = [
    {
      icon: "✝️",
      title: "Relacionamento Profundo com Deus",
      description:
        "Desenvolva uma intimidade genuína com o Criador através da compreensão das Escrituras",
      gradient: "from-purple-500/10 to-blue-500/10",
      color: "text-purple-600",
    },
    {
      icon: "🧠",
      title: "Mente Renovada e Transformada",
      description:
        "Liberte-se de padrões de pensamento negativos e abrace a perspectiva divina",
      gradient: "from-blue-500/10 to-green-500/10",
      color: "text-blue-600",
    },
    {
      icon: "💪",
      title: "Fé Fortalecida e Inabalável",
      description:
        "Construa alicerces sólidos que sustentarão sua fé nos momentos de adversidade",
      gradient: "from-green-500/10 to-yellow-500/10",
      color: "text-green-600",
    },
    {
      icon: "🌟",
      title: "Propósito e Direção Claros",
      description:
        "Descubra seu chamado e propósito à luz dos ensinamentos bíblicos",
      gradient: "from-yellow-500/10 to-orange-500/10",
      color: "text-yellow-600",
    },
    {
      icon: "🕊️",
      title: "Paz Interior Duradoura",
      description:
        "Experimente a paz que excede todo entendimento, mesmo em meio às tempestades",
      gradient: "from-orange-500/10 to-red-500/10",
      color: "text-orange-600",
    },
    {
      icon: "📖",
      title: "Compreensão Bíblica Profunda",
      description:
        "Acesse estudos transformadores das Escrituras para sua vida diária",
      gradient: "from-red-500/10 to-purple-500/10",
      color: "text-red-600",
    },
  ];

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#F5EBDD] via-[#E8DCC8] to-[#D9C8A9] px-4 py-16 sm:py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRBM0MyQSIgc3Ryb2tlLXdpZHRoPSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#C6A76F]/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#B89A5E]/10 blur-3xl"></div>
      </div>

      <div
        className="animate-float absolute top-1/3 right-5 sm:right-20"
        style={{ animationDelay: "1s" }}
      >
        <Crown className="h-5 w-5 text-[#C6A76F]/30 sm:h-6 sm:w-6" />
      </div>
      <div
        className="animate-float absolute bottom-20 left-1/4"
        style={{ animationDelay: "2s" }}
      >
        <Star className="h-4 w-4 text-[#C6A76F]/25" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#C6A76F] to-[#B89A5E] shadow-2xl sm:h-24 sm:w-24"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <Award className="h-8 w-8 text-white sm:h-10 sm:w-10" />
          </motion.div>

          <motion.h2
            className="font-poppins mb-6 text-3xl font-bold text-[#4A3C2A] sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Benefícios Que Vão{" "}
            <span className="bg-gradient-to-r from-[#C6A76F] to-[#B89A5E] bg-clip-text text-transparent">
              Transformar Sua Vida
            </span>
          </motion.h2>

          <motion.p
            className="font-merriweather mx-auto max-w-4xl text-lg leading-relaxed text-[#4A3C2A]/80 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tudo isto dependende de você e da sua intimidade com Deus, você não
            transformara sua vida se não der o trabalho de ter disciplina
            espiritual e relacionamento profundo com Deus. Tudo depende da sua
            força de vontade! Não é uma solução milagrosa, mas sim um chamado a
            mudança e transformação de mentalidade!
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="mb-20 grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl sm:p-8"
            >
              {/* Gradient Background Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C6A76F] to-[#B89A5E] opacity-0 blur transition-all duration-500 group-hover:opacity-20" />

              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-4">
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.span>
                  <motion.h3
                    className={`font-poppins text-xl font-bold sm:text-2xl ${benefit.color}`}
                    whileHover={{ x: 5 }}
                  >
                    {benefit.title}
                  </motion.h3>
                </div>

                <motion.p
                  className="font-merriweather text-base leading-relaxed text-[#4A3C2A]/80 sm:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {benefit.description}
                </motion.p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#C6A76F] to-[#B89A5E] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 scale-110 rounded-lg bg-gradient-to-r from-[#C6A76F]/20 to-[#B89A5E]/20 blur-2xl" />

            <Image
              src="https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/mockups/3.png"
              width={500}
              height={500}
              alt="E-book em múltiplos dispositivos"
              className="w-full max-w-2xl drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              quality={100}
              priority
            />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="mb-8 rounded-2xl bg-white/50 p-6 backdrop-blur-sm lg:p-8">
            <motion.p
              className="font-merriweather mb-4 text-lg text-[#4A3C2A] sm:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="font-semibold text-[#C6A76F]">
                ✨ Oferta Especial:
              </span>{" "}
              Acesso vitalício + Comunidade no WhatsApp + 7 dias de garantia
            </motion.p>
            <div className="flex items-center justify-center gap-2 text-sm text-[#4A3C2A]/70">
              <Star className="h-4 w-4 fill-[#C6A76F] text-[#C6A76F]" />
              <span className="font-montserrat">
                Mais de 200 páginas de conteúdo transformador
              </span>
            </div>
          </div>

          <motion.button
            onClick={handleClickCheckout}
            className="font-montserrat group hover:shadow-3xl mx-auto flex items-center gap-4 rounded-full bg-gradient-to-r from-[#4A3C2A] to-[#5D4A32] px-12 py-5 text-xl font-semibold text-[#F5EBDD] shadow-2xl transition-all duration-300 hover:from-[#C6A76F] hover:to-[#B89A5E] hover:text-[#4A3C2A]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bird className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
            Quero Adquirir o E-Book Agora
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SectionDesire;
