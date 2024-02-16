import zod from "zod";

const categorySchema = zod.object({
  name: zod.string(),
});

export const validateCategory = (input) => {
  return categorySchema.safeParse(input);
};

export const validatePartialCategory = (input) => {
  return categorySchema.partial().safeParse(input);
};
