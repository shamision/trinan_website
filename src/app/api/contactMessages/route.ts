import prisma from '../../../lib/db';
import { sendEmail } from '../../../lib/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { name, email, phone, message } = await req.json();

    try {
      // Save the form data into the ContactMessage table
      const newMessage =await prisma.contactMessage.create({
        data: {
          name,
          email,
          phone,
          message,
        },
      });

      // Send the email notification
      await sendEmail({ name, email, phone, message });

      // Respond with success
      return NextResponse.json(newMessage, { status: 200 });
    } catch (error) {
      console.error('Error creating service:', error);
      return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
    }
}

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc', // Order by latest message first
      },
    });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}
