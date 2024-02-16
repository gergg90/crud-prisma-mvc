import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoryModel {
  static findAll = async () => {
    return prisma.category.findMany();
  };

  static findById = async (id) => {
    const categoryId = await prisma.category.findFirst({
      where: {
        id: parseInt(id),
      },
    });

    return categoryId;
  };

  static create = async (data) => {
    const createProduct = await prisma.category.create({
      data: data,
    });
    return createProduct;
  };
}
