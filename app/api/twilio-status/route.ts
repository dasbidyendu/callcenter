export async function GET() {
  try {
    const flaskUrl = "https://01ba-171-48-110-117.ngrok-free.app/call-status";
    const res = await fetch(flaskUrl);

    const text = await res.text();

    try {
      const json = JSON.parse(text);
      return Response.json(json);
    } catch (err) {
      return new Response("Invalid JSON from Flask", { status: 502 });
    }
  } catch (err: any) {
    return new Response("Failed to reach Flask server", { status: 500 });
  }
}
