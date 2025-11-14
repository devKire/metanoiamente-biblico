/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

const { PrismaClient, Prisma } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(
    async (tx: any) => {
      // Limpar dados existentes
      await tx.contactInfo.deleteMany();
      await tx.landingPage.deleteMany();

      // Criar landing page
      const landingPage = await tx.landingPage.create({
        data: {
          name: "Sendo Metanoiamente Biblico",
          slug: "metanoiamentebiblico",
          description:
            "Fundamentos da fé para ter uma mente verdadeiramente renovada.",
          avatarImageUrl:
            "https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/logo/logo.png",
          coverImageUrl:
            "https://dgtzlsctyrtfbmyuqjux.supabase.co/storage/v1/object/public/images/MetanoiamenteBanner.png",
        },
      });

      // Criar contact info
      await tx.contactInfo.create({
        data: {
          email: "erikdossantos2006@outlook.com",
          phone: "(47) 9708-6965",
          whatsappLink: "https://wa.me/554797086965",
          instagramLink: "https://www.instagram.com/metanoiamentebiblico",
          facebookLink:
            "https://www.facebook.com/profile.php?id=61581471488603",
          checkoutLink: "https://pay.kiwify.com.br/N3INtNP",
          landingpageId: landingPage.id,
        },
      });

      return {
        landingPage,
      };
    },
    { timeout: 20000 },
  );

  console.log("📱 Seed de dados concluído com sucesso! 🎉");
};

main()
  .catch((e) => {
    console.error("Erro ao executar o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
