
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTestimonialData = async () => {
  try {
    const testimonialsData = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: 'asc', // Orders services by creation date in descending order
      },
    });
    return testimonialsData;
  } catch (error) {
    throw new Error("Error fetching service data: " + error.message);
  }
};
