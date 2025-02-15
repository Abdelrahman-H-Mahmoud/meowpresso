import { NextResponse } from 'next/server';
import { productsService } from '@/server/products/products.service';
export async function GET() {
  try {
    const products = await productsService.getProducts();

    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
} 