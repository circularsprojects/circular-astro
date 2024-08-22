export async function GET() {
  return new Response("Moved permanently to https://watchcord.dev", {
    status: 301,
    headers: {
      location: "https://watchcord.dev"
    }
  })
}
