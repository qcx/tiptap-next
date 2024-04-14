export async function GET(): Promise<Response> {
  return new Response(JSON.stringify({ status: 'up' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
