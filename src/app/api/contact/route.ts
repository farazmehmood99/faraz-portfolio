import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const origin = request.headers.get('origin') || 'http://localhost:3000';
    const referer = request.headers.get('referer') || 'http://localhost:3000/';

    // Forward form data to FormSubmit.co for direct delivery to farazmehmood003@gmail.com
    const response = await fetch('https://formsubmit.co/ajax/farazmehmood003@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': origin,
        'Referer': referer,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name} (${email})`,
        _replyto: email,
        _template: 'table',
      }),
    });

    const result = await response.json();

    if (result.success === 'true' || result.success === true) {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } else if (result.message && result.message.includes('Activation')) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message: "Activation email dispatched. Please check farazmehmood003@gmail.com to complete verification.",
      });
    } else {
      return NextResponse.json(
        { error: result.message || 'Failed to send message' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending your message.' },
      { status: 500 }
    );
  }
}
