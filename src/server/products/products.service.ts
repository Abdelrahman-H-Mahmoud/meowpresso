import { prisma } from "@/lib/prisma";

export class ProductsService {
  async getProducts() {
    const products = await prisma.product.findMany({
      include: {
        variants: true
      }
    });
    return products;
  }

  async getProductById(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        variants: true
      }
    });
    return product;
  }
}

export const productsService = new ProductsService();