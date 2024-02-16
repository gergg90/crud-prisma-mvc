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
    const createCategory = await prisma.category.create({
      data: data,
    });
    return createCategory;
  };

  static update = async (id, data) => {
    const updateCategory = await prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });
    return updateCategory;
  };

  static delete = async (id) => {
    const deleteCategory = await prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });

    return deleteCategory;
  };
}
