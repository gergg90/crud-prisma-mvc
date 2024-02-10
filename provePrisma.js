import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const product = await prisma.product.findFirst({
    where: {
      id: 2,
    },
  });

  console.log(product);
};

main();
