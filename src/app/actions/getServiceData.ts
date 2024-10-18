import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getServiceData = async (id) => {
  try {
    const serviceData = await prisma.service.findUnique({
      where: ( { id }),

      include: {
        pastProjects: true, // Ensures the related past projects are fetched
      },
    });
    return serviceData;
  } catch (error) {
    throw new Error("Error fetching service data: " + error.message);
  }
};
