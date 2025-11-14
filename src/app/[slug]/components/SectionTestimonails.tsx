"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { Crown, Instagram, Sparkles, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { InfiniteScroll } from "@/components/ui/infinite-scroll";

interface SectionTestimonialsProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name" | "description" | "avatarImageUrl">;
}

const img_testimonial = [
  {
    id: 1,
    img: "https://xwpoljcgrfikwaupgcjk.supabase.co/storage/v1/object/public/images/testimonials/1.jpg",
  },
  {
    id: 2,
    img: "https://xwpoljcgrfikwaupgcjk.supabase.co/storage/v1/object/public/images/testimonials/2.jpg",
  },
  {
    id: 3,
    img: "https://xwpoljcgrfikwaupgcjk.supabase.co/storage/v1/object/public/images/testimonials/3.jpg",
  },
  {
    id: 4,
    img: "https://xwpoljcgrfikwaupgcjk.supabase.co/storage/v1/object/public/images/testimonials/4.jpg",
  },
  {
    id: 5,
    img: "https://xwpoljcgrfikwaupgcjk.supabase.co/storage/v1/object/public/images/testimonials/5.jpg",
  },
];

interface TestimonialCardProps {
  testimonial: (typeof img_testimonial)[0];
  onImageClick: (imageUrl: string) => void;
}

function TestimonialCard({ testimonial, onImageClick }: TestimonialCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    onImageClick(testimonial.img);
  };

  return (
    <div
      className="group relative mx-3 flex w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-[#C6A76F]/30 bg-white/10 shadow-lg transition-all duration-500 hover:scale-105 hover:border-[#C6A76F]/50 hover:bg-white/20 hover:shadow-xl"
      onClick={handleClick}
    >
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C6A76F]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Container da imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          src={testimonial.img}
          alt="Depoimento de cliente"
          fill
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            isLoading ? "blur-sm" : "blur-0"
          }`}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />

        {/* Loading skeleton */}
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-[#E8DCC8]" />
        )}

        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3C2A]/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Efeito de brilho nas bordas */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#C6A76F]/0 via-[#C6A76F]/20 to-[#C6A76F]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Badge de qualidade */}
        <div className="absolute top-4 right-4 rounded-full bg-[#C6A76F]/30 px-2 py-1 backdrop-blur-sm">
          <Sparkles size={12} className="text-[#4A3C2A]" />
        </div>

        {/* Overlay de interação para lightbox */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-[#4A3C2A]/40">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="rounded-full border border-[#C6A76F]/50 bg-white/80 p-3 backdrop-blur-sm"
          >
            <ZoomIn size={20} className="text-[#4A3C2A]" />
          </motion.div>
        </div>

        {/* Indicador de clique */}
        <div className="absolute bottom-4 left-4 rounded-full bg-[#4A3C2A]/80 px-2 py-1 backdrop-blur-sm">
          <span className="text-xs font-light text-[#F5EBDD]">
            Clique para expandir
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialsCarousel({
  onImageClick,
}: {
  onImageClick: (imageUrl: string) => void;
}) {
  return (
    <div className="py-12">
      <div className="space-y-8">
        <InfiniteScroll duration={35000} direction="normal">
          {img_testimonial.map((testimonial) => (
            <TestimonialCard
              key={`dup-${testimonial.id}`}
              testimonial={testimonial}
              onImageClick={onImageClick}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

const SectionTestimonials = ({ contact }: SectionTestimonialsProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleWhatsApp = () => {
    if (!contact.whatsappLink) {
      console.warn("Link do WhatsApp não disponível.");
      return;
    }
    window.open(contact.whatsappLink, "_blank");
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    // Encontrar o índice da imagem atual para navegação
    const index = img_testimonial.findIndex((item) => item.img === image);
    setCurrentImageIndex(index >= 0 ? index : 0);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % img_testimonial.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(img_testimonial[nextIndex].img);
  };

  const goToPrev = () => {
    const prevIndex =
      (currentImageIndex - 1 + img_testimonial.length) % img_testimonial.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(img_testimonial[prevIndex].img);
  };

  // Função para handle keydown events
  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, currentImageIndex]);

  const handleImageClick = (imageUrl: string) => {
    openModal(imageUrl);
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F5EBDD] via-[#E8DCC8] to-[#D9C8A9]">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRBM0MyQSIgc3Ryb2tlLXdpZHRoPSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-5" />

          {/* Elementos decorativos */}
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#C6A76F]/10 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#B89A5E]/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20 text-center"
          >
            {/* Título Principal */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="font-poppins text-3xl font-bold text-[#4A3C2A] sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span className="bg-clip-text">
                Transformações <span className="text-[#C6A76F]">Reais</span>
              </span>
            </motion.h2>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="font-merriweather mx-auto max-w-2xl text-lg leading-relaxed text-[#4A3C2A]/80"
            >
              Veja os resultados de quem já experimentou a renovação da mente
              através dos ensinamentos bíblicos
            </motion.p>
          </motion.div>

          {/* Seção de Provas Sociais */}
          <div className="mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="flex items-center gap-2 rounded-full border border-[#C6A76F]/30 bg-[#C6A76F]/20 px-4 py-2 backdrop-blur-sm">
                <Instagram size={14} className="text-[#4A3C2A]" />
                <span className="font-montserrat text-xs font-light tracking-widest text-[#4A3C2A] uppercase">
                  Evidências Reais
                </span>
              </div>
            </motion.div>

            {/* Galeria Infinite Scroll com Lightbox */}
            <TestimonialsCarousel onImageClick={handleImageClick} />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={handleWhatsApp}
              className="font-montserrat group mx-auto flex items-center gap-3 rounded-full bg-gradient-to-r from-[#4A3C2A] to-[#5D4A32] px-8 py-4 text-lg font-medium text-[#F5EBDD] shadow-xl transition-all duration-300 hover:from-[#C6A76F] hover:to-[#B89A5E] hover:text-[#4A3C2A] hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              Quero Minha Transformação
            </motion.button>
          </motion.div>
        </div>

        {/* Elementos decorativos */}
        <div className="left-10% top-20% absolute">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="text-[#C6A76F]/20"
          >
            <Sparkles size={24} />
          </motion.div>
        </div>

        <div className="right-15% bottom-20% absolute">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
            className="text-[#C6A76F]/20"
          >
            <Crown size={20} />
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A3C2A]/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Botões de navegação */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 z-10 rounded-full border border-[#C6A76F]/50 bg-white/90 p-3 text-[#4A3C2A] backdrop-blur-sm transition-all duration-300 hover:border-[#C6A76F] hover:bg-[#C6A76F]/20 lg:left-8"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-10 rounded-full border border-[#C6A76F]/50 bg-white/90 p-3 text-[#4A3C2A] backdrop-blur-sm transition-all duration-300 hover:border-[#C6A76F] hover:bg-[#C6A76F]/20 lg:right-8"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border border-[#C6A76F]/30 bg-white/90 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Imagem expandida"
                width={1200}
                height={800}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />

              {/* Contador de imagens */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#C6A76F]/30 bg-white/90 px-3 py-1 backdrop-blur-sm">
                <span className="font-montserrat text-sm font-medium text-[#4A3C2A]">
                  {currentImageIndex + 1} / {img_testimonial.length}
                </span>
              </div>

              {/* Botão fechar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 rounded-full border border-[#C6A76F]/30 bg-white/90 p-2 text-[#4A3C2A] backdrop-blur-sm transition-all duration-300 hover:border-[#C6A76F] hover:bg-[#C6A76F]/20"
              >
                <X size={20} />
              </button>
            </motion.div>

            {/* Instruções de uso */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="font-montserrat text-sm text-white/80">
                Use ← → para navegar • ESC para sair
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionTestimonials;
