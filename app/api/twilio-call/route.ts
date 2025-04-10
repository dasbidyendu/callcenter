import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const client = twilio(accountSid, authToken);

export async function POST(request: Request) {
  const { to } = await request.json();

  try {
    const call = await client.calls.create({
      twiml: `<Response><Say>Hi! This is a test call from your app!</Say></Response>`,
      to,
        from: process.env.TWILIO_PHONE_NUMBER!,
        statusCallback: 'http://localhost:3000/api/twilio-status',
        statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
        statusCallbackMethod: 'POST',
    });

    return NextResponse.json({ success: true, callSid: call.sid });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
