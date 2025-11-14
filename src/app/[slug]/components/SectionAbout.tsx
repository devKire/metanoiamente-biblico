"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { Award, Bird, Crown, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo } from "react";

interface SectionAboutProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name">;
}

const SectionAbout = ({ contact }: SectionAboutProps) => {
  const staggerChildren = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, staggerChildren: 0.2 },
    }),
    [],
  );

  // Optimized event handler
  const handleWhatsApp = useCallback(() => {
    if (!contact.whatsappLink) {
      console.warn("Link do WhatsApp não disponível.");
      return;
    }
    window.open(contact.whatsappLink, "_blank", "noopener,noreferrer");
  }, [contact.whatsappLink]);

  // Background pattern as constant to avoid base64 recalculation
  const BACKGROUND_PATTERN = `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRBM0MyQSIgc3Ryb2tlLXdpZHRoPSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")`;

  return (
    <section
      className="relative border-t border-[#C6A76F] bg-gradient-to-br from-[#F5EBDD] via-[#E8DCC8] to-[#D9C8A9] px-4 py-16 sm:py-20 lg:py-24"
      aria-labelledby="author-heading"
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: BACKGROUND_PATTERN }}
        aria-hidden="true"
      />

      {/* Floating Decorations */}
      <div
        className="animate-float absolute top-20 left-5 sm:left-10"
        aria-hidden="true"
      >
        <Sparkles className="h-6 w-6 text-[#C6A76F]/30 sm:h-8 sm:w-8" />
      </div>
      <div
        className="animate-float absolute top-1/3 right-5 sm:right-10"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      >
        <Crown className="h-5 w-5 text-[#C6A76F]/25 sm:h-6 sm:w-6" />
      </div>

      <div className="relative container mx-auto max-w-6xl text-center">
        <motion.h2
          id="author-heading"
          className="font-poppins mb-4 text-3xl font-bold text-[#4A3C2A] sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          Sobre o{" "}
          <span className="bg-gradient-to-r from-[#C6A76F] to-[#B89A5E] bg-clip-text text-transparent">
            Autor
          </span>
        </motion.h2>

        <motion.div
          className="mb-12 grid items-center gap-8 md:grid-cols-3 lg:gap-12"
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Author Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div
                className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-r from-[#C6A76F]/30 to-[#B89A5E]/30 blur-2xl"
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="relative h-48 w-48 overflow-hidden rounded-full shadow-2xl sm:h-56 sm:w-56 md:h-64 md:w-64">
                <Image
                  src="https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/me.JPG"
                  alt="Erik R. dos Santos - Autor do E-book"
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  quality={90}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                />

                {/* Overlay Shine */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"
                  aria-hidden="true"
                />
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#C6A76F] shadow-lg sm:h-8 sm:w-8"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-[#B89A5E] shadow-lg sm:h-6 sm:w-6"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Author Description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.h3
              className="font-poppins mb-4 text-2xl font-semibold text-[#4A3C2A] sm:text-3xl md:text-4xl"
              whileHover={{ x: 5 }}
            >
              Erik R. dos Santos
            </motion.h3>

            <motion.p
              className="font-merriweather mb-4 leading-relaxed text-[#4A3C2A] opacity-90 sm:text-lg md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Sou o Erik, talvez um jovem que nem você e o meu objetivo aqui é
              te fazer crescer espiritualmente, passando para você todos estes
              ensinamentos que um dia alguém também me ensinou.
            </motion.p>

            <motion.p
              className="font-merriweather leading-relaxed text-[#4A3C2A] opacity-90 sm:text-lg md:text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Através de meus estudos e vivência pessoal, desenvolvi uma
              abordagem única que combina solidez teológica com aplicação
              prática, tornando conceitos complexos acessíveis a todos que
              buscam crescimento espiritual genuíno.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border-l-4 border-[#C6A76F] bg-white/70 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {/* Background Pattern */}
          <div
            className="absolute top-4 right-4 opacity-10 md:top-8 md:right-8"
            aria-hidden="true"
          >
            <Award className="h-16 w-16 text-[#C6A76F] md:h-20 md:w-20" />
          </div>

          <div className="relative z-10">
            <motion.blockquote
              className="font-merriweather mb-4 text-lg leading-relaxed text-[#4A3C2A] italic sm:text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              &ldquo;Meu desejo é que cada leitor experimente a verdadeira
              metanoia - a transformação completa da mente e do coração que só é
              possível através do encontro genuíno com Cristo e Sua
              Palavra.&rdquo;
            </motion.blockquote>

            <motion.p
              className="font-montserrat text-lg font-semibold text-[#C6A76F] sm:text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              — Erik R. dos Santos
            </motion.p>

            {/* Signature Element */}
            <motion.div
              className="mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 1.2 }}
              aria-hidden="true"
            >
              <div className="h-px w-8 bg-[#C6A76F]"></div>
              <Star className="h-3 w-3 fill-[#C6A76F] text-[#C6A76F]" />
              <div className="h-px w-8 bg-[#C6A76F]"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={handleWhatsApp}
            className="font-montserrat group mx-auto flex items-center gap-3 rounded-full bg-gradient-to-r from-[#4A3C2A] to-[#5D4A32] px-8 py-4 text-lg font-medium text-[#F5EBDD] shadow-xl transition-all duration-300 hover:from-[#C6A76F] hover:to-[#B89A5E] hover:text-[#4A3C2A] hover:shadow-2xl focus:ring-2 focus:ring-[#C6A76F] focus:ring-offset-2 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Fale diretamente comigo via WhatsApp"
          >
            <Bird className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
            Fale diretamente comigo
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Animation */}
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

export default SectionAbout;
