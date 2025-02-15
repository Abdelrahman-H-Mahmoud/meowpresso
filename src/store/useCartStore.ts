import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product, ProductVariant } from '@/types/product';

interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
  hydrated: boolean;
  setHydrated: (state: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      hydrated: false,
      setHydrated: (state: boolean) => set({ hydrated: state }),
      
      addItem: (product, variant) => {
        if (!get().hydrated) return;
        set((state) => {
          const existingItem = state.items.find(
            item => item.product.id === product.id && item.variant.id === variant.id
          );

          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.product.id === product.id && item.variant.id === variant.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { product, variant, quantity: 1 }],
          };
        });
      },

      removeItem: (productId, variantId) => {
        if (!get().hydrated) return;
        set((state) => ({
          items: state.items.filter(
            item => !(item.product.id === productId && item.variant.id === variantId)
          ),
        }));
      },

      updateQuantity: (productId, variantId, quantity) => {
        if (!get().hydrated) return;
        set((state) => ({
          items: state.items.map(item =>
            item.product.id === productId && item.variant.id === variantId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        if (!get().hydrated) return;
        set({ items: [] });
      },

      totalItems: () => {
        if (!get().hydrated) return 0;
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      totalPrice: () => {
        if (!get().hydrated) return 0;
        return get().items.reduce((total, item) => 
          total + (item.variant.price * item.quantity), 0
        );
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
        }
      },
    }
  )
); 