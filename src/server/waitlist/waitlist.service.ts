import { PrismaClient } from '@prisma/client';
import type { Waitlist } from '@prisma/client';

const prisma = new PrismaClient();

export type CreateWaitlistInput = {
  email: string;
  name: string;
  phone: string;
  countryCode: string;
};

export const waitlistService = {
  async create(data: CreateWaitlistInput): Promise<Waitlist> {
    // Get current count and add 1 for new position
    const count = await this.getTotalCount();
    return prisma.waitlist.create({
      data: {
        ...data,
        position: count + 1,
      },
    });
  },

  async findByEmail(email: string): Promise<Waitlist | null> {
    return prisma.waitlist.findUnique({
      where: { email },
    });
  },

  async getTotalCount(): Promise<number> {
    return prisma.waitlist.count();
  }
}; 