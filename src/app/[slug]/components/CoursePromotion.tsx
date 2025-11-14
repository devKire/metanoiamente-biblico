"use client";

import { ContactInfo } from "@prisma/client";
import { motion } from "framer-motion";
import { Clock, Cross, Eye, Star, Users } from "lucide-react";
import Image from "next/image";

interface CoursePromotionProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "checkoutLink"
  >;
}

export function CoursePromotion({ contact }: CoursePromotionProps) {
  function handleClickCheckout() {
    if (!contact.checkoutLink) {
      console.error("Checkout link não encontrado.");
      return;
    }

    window.open(contact.checkoutLink, "_blank");
  }
  const handleWhatsApp = () => {
    if (!contact.whatsappLink) {
      console.warn("Link do WhatsApp não disponível.");
      return;
    }
    window.open(contact.whatsappLink, "_blank");
  };

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Estudo Dirigido",
      description: "Conteúdo organizado para máximo aproveitamento",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Acesso Vitalício",
      description: "Estude no seu próprio ritmo quando quiser",
    },
    {
      icon: <Cross className="h-6 w-6" />,
      title: "Base Bíblica Sólida",
      description: "Ensino alinhado com as escrituras e doutrina cristã",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Comunidade",
      description: "Acesso ao grupo exclusivo no WhatsApp",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5EBDD] via-[#E8DCC8] to-[#D9C8A9] py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRBM0MyQSIgc3Ryb2tlLXdpZHRoPSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-5" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#C6A76F]/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#B89A5E]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Conteúdo Textual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Título Principal */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="font-poppins text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl"
            >
              <span className="text-[#4A3C2A]">Transforme Sua Mente</span>
              <br />
              <span className="text-[#C6A76F]">Com a Palavra de Deus</span>
            </motion.h2>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="font-merriweather text-lg leading-relaxed text-[#4A3C2A]/80 lg:text-xl"
            >
              Descubra os fundamentos bíblicos para uma mente renovada e uma fé
              inabalável. Aprenda a aplicar os princípios das Escrituras no seu
              dia a dia e experimente uma transformação genuína no seu
              relacionamento com Deus.
            </motion.p>

            {/* Destaques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A76F]/20 text-[#4A3C2A]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[#4A3C2A]">
                      {feature.title}
                    </h4>
                    <p className="font-merriweather text-sm text-[#4A3C2A]/80">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Preço e CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-poppins text-3xl font-bold text-[#4A3C2A] lg:text-4xl">
                  R$ 19,90
                </span>
                <span className="font-merriweather text-lg text-[#4A3C2A]/60 line-through">
                  R$ 39,90
                </span>
                <span className="font-montserrat rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-700">
                  -50%
                </span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button
                  onClick={handleClickCheckout}
                  className="font-montserrat group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#4A3C2A] to-[#5D4A32] px-8 py-4 text-lg font-medium text-[#F5EBDD] shadow-xl transition-all duration-300 hover:from-[#C6A76F] hover:to-[#B89A5E] hover:text-[#4A3C2A] hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  Quero Adquirir o E-book
                </motion.button>

                <motion.button
                  className="font-montserrat rounded-full border border-[#C6A76F] bg-transparent px-8 py-4 text-lg font-medium text-[#4A3C2A] transition-all duration-300 hover:bg-[#C6A76F] hover:text-[#4A3C2A]"
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saber Mais
                </motion.button>
              </div>

              <p className="font-merriweather text-sm text-[#4A3C2A]/70">
                ⚡ Oferta por tempo limitado • Bônus exclusivo incluído
              </p>
            </motion.div>
          </motion.div>

          {/* Imagem em Destaque */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Moldura decorativa */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-[#C6A76F]/20" />

              {/* Container da imagem */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#4A3C2A]/10">
                <Image
                  src="https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/mockups/3.png"
                  alt="E-book Sendo Metanoiamente Bíblico - Capa e preview do conteúdo"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay decorativo */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A3C2A]/30 to-transparent" />

                {/* Badge de preview */}
                <div className="absolute top-4 right-4 rounded-full bg-[#4A3C2A]/80 px-3 py-1 backdrop-blur-sm">
                  <span className="font-montserrat flex items-center gap-1 text-sm font-medium text-[#F5EBDD]">
                    <Eye className="h-3 w-3" />
                    Preview
                  </span>
                </div>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#C6A76F]/0 via-[#C6A76F]/10 to-[#C6A76F]/0 opacity-0 transition-opacity duration-500 hover:opacity-100" />
              </div>

              {/* Indicador de qualidade */}
              <div className="absolute bottom-4 left-4 rounded-full bg-[#4A3C2A]/80 px-3 py-1 backdrop-blur-sm">
                <span className="font-montserrat text-xs font-medium text-[#F5EBDD]">
                  📖 200+ páginas de conteúdo
                </span>
              </div>
            </div>

            {/* Elementos decorativos ao redor da imagem */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#C6A76F]/30 blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-[#B89A5E]/30 blur-xl" />

            {/* Informações adicionais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 space-y-3 text-center"
            >
              <p className="font-merriweather text-sm text-[#4A3C2A]/70">
                🎁 <strong>Bônus Incluso:</strong> Acesso à comunidade de
                estudos bíblicos no WhatsApp
              </p>
              <div className="flex justify-center gap-4 text-xs text-[#4A3C2A]/60">
                <span className="font-montserrat">✅ Formato PDF</span>
                <span className="font-montserrat">✅ Download Imediato</span>
                <span className="font-montserrat">✅ 7 Dias de Garantia</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
