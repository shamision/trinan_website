import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getServicesData = async () => {
  try {
    const servicesData = await prisma.service.findMany({
      include: {
        pastProjects: true, // Ensures the related past projects are fetched
      },
      orderBy: {
        createdAt: 'asc', // Orders services by creation date in descending order
      },
    });
    return servicesData;
  } catch (error) {
    throw new Error("Error fetching service data: " + error.message);
  }
};
