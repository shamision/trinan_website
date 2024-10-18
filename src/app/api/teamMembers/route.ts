import prisma from '../../../lib/db';
import { NextResponse } from 'next/server';

// POST request to handle both create and update operations for a teamMember
export async function POST(req: Request) {
  try {
    const { id, image, name, position, description } = await req.json();

    let updatedteamMember;

    if (id) {
      // Update existing teamMember if ID is provided
      updatedteamMember = await prisma.teamMember.update({
        where: { id: String(id) },
        data: {
          image,
          name,
          position,
          description,
        },
      });
    } else {
      // Create a new teamMember if no ID is provided
      updatedteamMember = await prisma.teamMember.create({
        data: {
            image,
            name,
            position,
            description,
        },
      });
    }

    return NextResponse.json(updatedteamMember, { status: 200 });
  } catch (error) {
    console.error('Error processing teamMember:', error);
    return NextResponse.json({ error: 'Failed to process teamMember' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json(); // Extract the ID from the request body

    if (!id) {
      return NextResponse.json({ error: 'teamMember ID is required' }, { status: 400 });
    }

    const deletedteamMember = await prisma.teamMember.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'teamMember deleted successfully', deletedteamMember }, { status: 200 });
  } catch (error) {
    console.error('Error deleting teamMember:', error);

    // Handle the case where the teamMember is not found
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'teamMember not found' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Failed to delete teamMember' }, { status: 500 });
  }
}

