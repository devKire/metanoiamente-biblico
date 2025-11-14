"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Crown, Heart, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progress, setProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const questions = [
    {
      question: "Como você descreveria sua vida espiritual atualmente?",
      options: [
        "Estou buscando um relacionamento mais profundo com Deus",
        "Sinto que preciso de direção e propósito na fé",
        "Busco compreensão mais profunda das Escrituras",
        "Estou em um momento de renovação e transformação",
      ],
    },
    {
      question:
        "Qual área da sua vida você gostaria de ver mais transformada pela Palavra?",
      options: [
        "Minha mente e pensamentos",
        "Meus relacionamentos",
        "Meu propósito e chamado",
        "Minha paz interior e fé",
      ],
    },
    {
      question:
        "O que mais te impede de ter uma mente renovada conforme Romanos 12:2?",
      options: [
        "Padrões de pensamento antigos",
        "Falta de compreensão bíblica",
        "Dúvidas e incertezas",
        "Falta de disciplina espiritual",
      ],
    },
  ];

  useEffect(() => {
    // Só executa no cliente
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simula um progresso de carregamento
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Todas as perguntas respondidas, redireciona
      setIsVisible(false);
      setTimeout(() => {
        router.push(
          "/metanoiamentebiblico",
          // "/?answers=" + encodeURIComponent(JSON.stringify(newAnswers)),
        );
      }, 800);
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/metanoiamentebiblico");
    }, 500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5EBDD] via-[#E8DCC8] to-[#D9C8A9] p-6"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 h-32 w-32 animate-pulse rounded-full bg-[#C6A76F]/30 blur-3xl"></div>
            <div className="absolute right-1/3 bottom-1/3 h-40 w-40 animate-pulse rounded-full bg-[#B89A5E]/30 blur-3xl delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 h-24 w-24 animate-pulse rounded-full bg-[#C6A76F]/40 blur-2xl delay-500"></div>
          </div>

          {/* Elementos flutuantes */}
          {windowSize.width > 0 && windowSize.height > 0 && (
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  {i % 3 === 0 ? (
                    <BookOpen className="h-4 w-4 text-[#4A3C2A]/40" />
                  ) : i % 3 === 1 ? (
                    <Sparkles className="h-3 w-3 text-[#C6A76F]/50" />
                  ) : (
                    <Heart className="h-3 w-3 fill-[#C6A76F]/30 text-[#C6A76F]/30" />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Conteúdo Principal */}
          <div className="z-10 max-w-2xl text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#4A3C2A] to-[#C6A76F] shadow-2xl shadow-[#C6A76F]/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <BookOpen className="h-12 w-12 text-[#F5EBDD]" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Sparkles className="h-6 w-6 text-[#C6A76F]" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Crown className="h-5 w-5 text-[#B89A5E]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-poppins mb-6 text-4xl font-bold text-[#4A3C2A] md:text-5xl"
            >
              Sendo Metanoiamente Bíblico
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-merriweather mb-3 text-xl text-[#4A3C2A]/80 md:text-2xl"
            >
              Fundamentos da Fé para uma Mente Renovada
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-merriweather mb-8 text-lg text-[#4A3C2A]/70 md:text-xl"
            >
              Onde sua transformação espiritual começa
            </motion.p>

            {/* Question Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto mb-8 max-w-lg"
            >
              <div className="mb-6 rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-montserrat text-sm font-medium text-[#4A3C2A]/60">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <div className="flex gap-1">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          index <= currentQuestion
                            ? "bg-[#C6A76F]"
                            : "bg-[#4A3C2A]/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h2 className="font-merriweather mb-6 text-lg font-semibold text-[#4A3C2A] md:text-xl">
                  {currentQ.question}
                </h2>

                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="font-merriweather w-full rounded-xl border border-[#C6A76F]/30 bg-white/70 p-4 text-left text-[#4A3C2A] transition-all duration-300 hover:border-[#C6A76F] hover:bg-white hover:shadow-md"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mx-auto max-w-sm">
                <div className="h-2 overflow-hidden rounded-full bg-[#4A3C2A]/20">
                  <motion.div
                    className="h-full rounded-full bg-[#C6A76F]"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="font-montserrat mt-2 text-sm text-[#4A3C2A]/60">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}
                  % completo
                </p>
              </div>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              onClick={handleSkip}
              className="font-montserrat inline-flex items-center gap-2 rounded-full border border-[#C6A76F] bg-transparent px-8 py-4 text-[#4A3C2A] transition-all duration-300 hover:bg-[#C6A76F] hover:text-[#4A3C2A]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium tracking-widest uppercase">
                Pular e ir direto ao conteúdo
              </span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-8 flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#4A3C2A]/60" />
                <span className="font-merriweather text-sm text-[#4A3C2A]/60">
                  Estudo Bíblico Profundo
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 fill-[#C6A76F]/40 text-[#C6A76F]/40" />
                <span className="font-merriweather text-sm text-[#4A3C2A]/60">
                  Transformação Espiritual
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#4A3C2A]/60" />
                <span className="font-merriweather text-sm text-[#4A3C2A]/60">
                  Mente Renovada
                </span>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-6"
            >
              <p className="font-montserrat text-xs text-[#4A3C2A]/40">
                Guiando você em uma jornada de fé desde 2024
              </p>
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#F5EBDD] to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
