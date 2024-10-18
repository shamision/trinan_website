import prisma from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
  
    try {
      const service = await prisma.service.findUnique({
        where: { id },
        include: { pastProjects: true }, // Include related past projects
      });
  
      if (!service) {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 });
      }
  
      return NextResponse.json(service, { status: 200 });
    } catch (error) {
      console.error('Error fetching service:', error);
      return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 });
    }
  }
  export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
  
    try {
      if (!id) {
        return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
      }
  
      const deletedService = await prisma.service.delete({
        where: { id },
      });
  
      return NextResponse.json({ message: 'Service deleted successfully', deletedService }, { status: 200 });
    } catch (error) {
      console.error('Error deleting service:', error);
  
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 });
      }
  
      return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
    }
  }