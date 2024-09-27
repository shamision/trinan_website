// pages/contact-messages.tsx
'use client'

import { useEffect, useState } from 'react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function ContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch the messages from the API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/contactMessages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }

        const data = await response.json();
        setMessages(data);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
      }
    };

    fetchMessages();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container m-32 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left p-2 border border-gray-300">Name</th>
                <th className="text-left p-2 border border-gray-300">Email</th>
                <th className="text-left p-2 border border-gray-300">Phone</th>
                <th className="text-left p-2 border border-gray-300">Message</th>
                <th className="text-left p-2 border border-gray-300">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id}>
                  <td className="p-2 border border-gray-300">{message.name}</td>
                  <td className="p-2 border border-gray-300">{message.email}</td>
                  <td className="p-2 border border-gray-300">{message.phone}</td>
                  <td className="p-2 border border-gray-300">{message.message}</td>
                  <td className="p-2 border border-gray-300">
                    {new Date(message.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
