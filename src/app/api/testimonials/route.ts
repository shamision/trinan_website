import prisma from '../../../lib/db';
import { NextResponse } from 'next/server';

// POST request to handle both create and update operations for a testimonial
export async function POST(req: Request) {
  try {
    const { id, rating, text, name, title, imgSrc } = await req.json();

    let updatedTestimonial;

    if (id) {
      // Update existing testimonial if ID is provided
      updatedTestimonial = await prisma.testimonial.update({
        where: { id: String(id) },
        data: {
          rating,
          text,
          name,
          title,
          imgSrc,
        },
      });
    } else {
      // Create a new testimonial if no ID is provided
      updatedTestimonial = await prisma.testimonial.create({
        data: {
          rating,
          text,
          name,
          title,
          imgSrc,
        },
      });
    }

    return NextResponse.json(updatedTestimonial, { status: 200 });
  } catch (error) {
    console.error('Error processing testimonial:', error);
    return NextResponse.json({ error: 'Failed to process testimonial' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json(); // Extract the ID from the request body

    if (!id) {
      return NextResponse.json({ error: 'Testimonial ID is required' }, { status: 400 });
    }

    const deletedTestimonial = await prisma.testimonial.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Testimonial deleted successfully', deletedTestimonial }, { status: 200 });
  } catch (error) {
    console.error('Error deleting testimonial:', error);

    // Handle the case where the testimonial is not found
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
  }
}

