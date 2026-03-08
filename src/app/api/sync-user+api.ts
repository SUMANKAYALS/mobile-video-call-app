import { StreamChat } from "stream-chat";

const API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY as string || "cwnbnyytqsha";
const SECRET_KEY = process.env.STREAM_SECRET_KEY as string || "hhufekrx64c9bnc454cayu4pfryz8c567429qy46gy2tqwpgxguyss4b5k4pvvx8";

export async function POST(request: Request) {
  const client = StreamChat.getInstance(API_KEY, SECRET_KEY);
  const body = await request.json();

  const { userId, name, image } = body;

  if (!userId) {
    return Response.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    await client.upsertUser({
      id: userId,
      name: name || "Guest",
      image: image,
    });

    return Response.json({ success: true, userId });
  } catch (error) {
    console.error("Error syncing user to Stream:", error);
    return Response.json({ error: "Failed to sync user" }, { status: 500 });
  }
}