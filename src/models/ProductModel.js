import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductModel {
  static findAll = async () => {
    return await prisma.product.findMany();
  };

  static findById = async (id) => {
    const productId = await prisma.product.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return productId;
  };

  static create = async (data) => {
    const createProduct = await prisma.product.create({
      data: data,
    });
  };
}
