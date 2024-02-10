import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const deleteProduct = await prisma.product.create({
    data: {
      title: "titulo",
      price: 22,
      description: "Esto es una descripcion",
      categoryId: 3,
      images: "http:localhost:8001/uploads/image-test.jpg",
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    console.error(`Esto es el error ${e}`);
    process.exit(1);
  });
