import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const product = await prisma.product.create({
    data: {
      title: "OVERSIZED PIGMENT CREAM T-SHIRT",
      price: 52,
      description:
        "Oversized fit is the roomiest possible fit, one that doesn't have any body definition.It is the most fashion forward and edgy fit with a wider sleeve and wider body. This style creates a very relaxed look.",
      categoryId: 1,
      images:
        "https://www.gfnclothing.com/cdn/shop/files/pigmenttoday_1080x.jpg?v=1697842868",
    },
  });

  console.log(await prisma.product.findMany());
};

main();
