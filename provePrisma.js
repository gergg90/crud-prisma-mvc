import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const product = await prisma.product.create({
    data: {},
  });
  console.log(product);
};

main();
