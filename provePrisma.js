import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const product = await prisma.product.findFirst({
    where: {
      category: {
        products: {},
      },
    },
  });

  console.log(product);
};

main();
