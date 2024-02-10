import zod from "zod";

const productSchema = zod.object({
  title: zod.string(),
  price: zod.number().int(),
  description: zod.string(),
  categoryId: zod.number(),
  images: zod.string().url(),
});

export const validateProduct = (input) => {
  return productSchema.safeParse(input);
};

export const validatePartialProduct = (input) => {
  return productSchema.partial().safeParse(input);
};
