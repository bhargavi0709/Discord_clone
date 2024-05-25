// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

declare global {
  // This is necessary to avoid TypeScript errors
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') global.prisma = db;
