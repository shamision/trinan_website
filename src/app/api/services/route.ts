import prisma from '../../../lib/db';
import { NextResponse } from 'next/server';

// Handle POST request
export async function POST(req: Request) {
  const { id, title, summary, description, procedure, serviceImages, pastProjects } = await req.json();

  try {
    let newService;

    if (id) {
      // Update existing service if an ID is provided
      newService = await prisma.service.update({
        where: { id },
        data: {
          title,
          summary,
          description,
          procedure,
          serviceImages,
          pastProjects: {
            deleteMany: {}, // First delete old projects to avoid duplicates
            create: pastProjects?.map(project => ({
              title: project.title,
              description: project.description,
              projectImages: project.projectImages,
            })),
          },
        },
      });
    } else {
      // Create new service if no ID is provided
      newService = await prisma.service.create({
        data: {
          title,
          summary,
          description,
          procedure,
          serviceImages,
          pastProjects: {
            create: pastProjects?.map(project => ({
              title: project.title,
              description: project.description,
              projectImages: project.projectImages,
            })),
          },
        },
      });
    }

    return NextResponse.json(newService, { status: 200 });
  } catch (error) {
    console.error('Error creating or updating service:', error);
    return NextResponse.json({ error: 'Failed to process the service' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch services and their related past projects
    const services = await prisma.service.findMany({
      include: {
        pastProjects: true, // Include past projects for each service
      },
    });

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}



  
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json(); // Extract the ID from the request body

    if (!id) {
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
    }

    // First, delete the related past projects
    await prisma.pastProject.deleteMany({
      where: {
        serviceId: id,
      },
    });

    // Then, delete the service itself
    const deletedService = await prisma.service.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Service deleted successfully', deletedService }, { status: 200 });
  } catch (error) {
    console.error('Error deleting service:', error);

    // Handle the case where the service is not found
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
