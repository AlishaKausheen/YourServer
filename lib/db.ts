import { PrismaClient } from '@prisma/client';

declare global{
    var prisma: PrismaClient | undefined
    
};
export const db = globalThis.prisma || new PrismaClient();
// globalThis is not effected by hot reload 
if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}