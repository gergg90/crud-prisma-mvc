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
    return createProduct;
  };

  static update = async (id, data) => {
    const updateProduct = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });
    return updateProduct;
  };

  static delete = async (id) => {
    const deleteProduct = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deleteProduct;
  };
}
