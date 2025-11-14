"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { BookOpen, FileText, Heart, Users } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

interface SectionServicesProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "checkoutLink"
  >;
  landingpage: Pick<LandingPage, "name">;
}

const SectionInterest = ({ contact }: SectionServicesProps) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768); // 768px é o breakpoint comum para tablet/mobile
    };

    // Verifica na montagem do componente
    checkDevice();

    // Adiciona listener para redimensionamento
    window.addEventListener("resize", checkDevice);

    // Cleanup
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  function handleClickCheckout() {
    if (!contact.checkoutLink) {
      console.error("Checkout link não encontrado.");
      return;
    }

    window.open(contact.checkoutLink, "_blank");
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const desktop_video =
    "https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/video/video.mkv";
  const mobile_video =
    "https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/video/mobile_video_.mp4";

  // Escolhe o vídeo baseado no dispositivo
  const currentVideo = isMobile ? mobile_video : desktop_video;

  const features = [
    {
      icon: BookOpen,
      title: "Fundamentos Sólidos",
      description:
        "Compreenda os princípios essenciais da fé cristã que sustentarão sua jornada espiritual",
    },
    {
      icon: Heart,
      title: "Renovação Interior",
      description:
        "Aprenda a renovar sua mente através da meditação nas Escrituras e da oração transformadora",
    },
    {
      icon: Users,
      title: "Aplicação Prática",
      description:
        "Descubra como viver os ensinamentos bíblicos no seu dia a dia, em todas as áreas da vida",
    },
  ];

  const chapters = [
    // ... (seus chapters permanecem os mesmos)
    {
      number: "01",
      title: "O Novo Nascimento - O Início de Tudo",
      pages: "14 páginas",
      description: "Compreenda o fundamento da vida espiritual genuína",
    },
    {
      number: "02",
      title: "O Sacrifício Perfeito de Cristo",
      pages: "18 páginas",
      description: "A profundidade da obra redentora na cruz",
    },
    {
      number: "03",
      title: "Senhorio de Cristo",
      pages: "18 páginas",
      description: "Submetendo todas as áreas da vida ao governo de Jesus",
    },
    {
      number: "04",
      title: "Excelência no Servir",
      pages: "21 páginas",
      description: "A verdadeira grandeza através do serviço humilde",
    },
    {
      number: "05",
      title: "Fé - A Substância do Invisível",
      pages: "20 páginas",
      description: "A natureza transformadora da fé bíblica",
    },
    {
      number: "06",
      title: "O Espírito Santo - O Auxiliador da Nossa Fé",
      pages: "19 páginas",
      description: "O papel essencial do Espírito na jornada cristã",
    },
    {
      number: "07",
      title: "O Amor de Deus na Bíblia - Da Teoria à Transformação",
      pages: "16 páginas",
      description: "Experimentando o amor divino de forma prática",
    },
    {
      number: "08",
      title: "Amor e Verdade - Os Dois Pilares da Fé Cristã",
      pages: "12 páginas",
      description: "O equilíbrio entre graça e verdade",
    },
    {
      number: "09",
      title: "Multidão ou Discípulo? - A Escolha Que Define Tudo",
      pages: "16 páginas",
      description:
        "A diferença entre seguidores superficiais e discípulos genuínos",
    },
    {
      number: "10",
      title: "As Três Gerações - Entre o Conhecimento e o Coração",
      pages: "23 páginas",
      description: "Entendendo as 3 gerações encontradas na casa de Eli",
    },
    {
      number: "11",
      title: "Ser Igreja - Do Ritual ao Relacional",
      pages: "17 páginas",
      description: "A essência da comunidade cristã autêntica",
    },
    {
      number: "12",
      title: "Identidade Inegociável - Vivendo Como Filhos de Deus",
      pages: "25 páginas",
      description: "Mantendo a identidade cristã em um mundo hostil",
    },
    {
      number: "13",
      title: "A Igreja Fiel - O Legado de Filadélfia para Uma Geração em Crise",
      pages: "22 páginas",
      description: "Lições da igreja fiel para os dias atuais",
    },
    {
      number: "14",
      title: "O Que Revelam os Atributos Eternos",
      pages: "9 páginas",
      description: "Conhecendo o caráter imutável de Deus",
    },
    {
      number: "15",
      title: "O Livro Que Sobreviveu ao Tempo",
      pages: "9 páginas",
      description: "Capítulo bônus, chamada a ação",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F5EBDD] to-[#E8DCC8] px-4 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-[#4A3C2A]">
                15 Capítulos
                <br />
                <span className="mt-1 text-4xl leading-none font-bold text-[#C6A76F] md:text-[6rem]">
                  Mais de 200 páginas
                </span>
              </h1>
            </>
          }
        >
          <video
            src={currentVideo}
            height={720}
            width={1400}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
            key={currentVideo} // Força re-render quando o vídeo mudar
          />
        </ContainerScroll>
      </div>

      {/* Resto do seu código permanece igual */}
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div {...fadeInUp} className="mb-12 text-center lg:mb-20">
          <motion.h2
            className="font-poppins mb-4 text-3xl font-semibold text-[#4A3C2A] sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            O Que Você Vai <span className="text-[#C6A76F]">Descobrir</span>
          </motion.h2>
          <motion.p
            className="font-merriweather mx-auto max-w-4xl text-base text-[#4A3C2A] opacity-90 sm:text-lg md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Um mergulho profundo em{" "}
            <strong>15 capítulos transformadores</strong> com mais de{" "}
            <strong>200 páginas de conteúdo teológico bíblico</strong> que vai
            revolucionar sua compreensão da fé cristã e sua relação com Deus.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-6 sm:gap-8 lg:mb-20 lg:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-l-4 border-[#C6A76F] bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl sm:p-8 lg:p-10"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C6A76F]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon Container */}
              <div className="relative z-10 mb-4 flex justify-center sm:mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#C6A76F] to-[#B89A5E] shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <feature.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="font-poppins mb-3 text-lg font-semibold text-[#4A3C2A] sm:text-xl lg:text-2xl">
                  {feature.title}
                </h3>
                <p className="font-merriweather text-sm leading-relaxed text-[#4A3C2A] opacity-90 sm:text-base lg:text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-[#C6A76F]/10 transition-all duration-500 group-hover:scale-150" />
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-[#C6A76F]/5 transition-all duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        {/* Chapters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="mb-12 text-center">
            <h3 className="font-poppins mb-4 text-2xl font-semibold text-[#4A3C2A] sm:text-3xl lg:text-4xl">
              Estes são todos os conteúdos que{" "}
              <span className="text-[#C6A76F]">
                te ajudaram nesta caminhada
              </span>
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-xl border border-[#C6A76F]/20 bg-white/50 p-4 transition-all duration-300 hover:border-[#C6A76F]/40 hover:bg-white/70 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A76F]/20">
                    <span className="font-montserrat text-sm font-bold text-[#4A3C2A]">
                      {chapter.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-poppins mb-1 text-sm leading-tight font-semibold text-[#4A3C2A]">
                      {chapter.title}
                    </h4>
                    <p className="font-merriweather mb-1 text-xs text-[#4A3C2A]/70">
                      {chapter.description}
                    </p>
                    <div className="flex items-center gap-1">
                      <FileText className="h-3 w-3 text-[#C6A76F]" />
                      <span className="font-montserrat text-xs text-[#4A3C2A]/60">
                        {chapter.pages}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            {/* Main Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/mockups/1.png"
                alt="E-book Sendo Metanoiamente Bíblico - 15 capítulos com mais de 200 páginas de conteúdo teológico"
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                quality={100}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center lg:mt-16"
        >
          <p className="font-merriweather mb-6 text-sm text-[#4A3C2A] opacity-90 sm:text-base md:text-lg">
            <span className="font-semibold">🎁 Bônus Especial:</span> Acesso
            imediato à comunidade exclusiva no WhatsApp +{" "}
            <strong>200+ páginas de conteúdo teológico profundo</strong>
          </p>
          <motion.button
            className="font-montserrat group mx-auto flex items-center gap-3 rounded-full bg-gradient-to-r from-[#4A3C2A] to-[#5D4A32] px-8 py-4 text-lg font-medium text-[#F5EBDD] shadow-xl transition-all duration-300 hover:from-[#C6A76F] hover:to-[#B89A5E] hover:text-[#4A3C2A] sm:px-10 sm:py-5"
            onClick={handleClickCheckout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
            Quero Acessar os 15 Capítulos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionInterest;
