// app/api/items/route.ts

// 用来模拟数据库的内存数组（真实情况你应该用数据库）
const items = ["Apple", "Banana", "Orange"];

export async function GET() {
  // sleep 2s
  await new Promise((resolve) => setTimeout(resolve, 200));
  return Response.json(items);
}
export async function POST(request: Request) {
  const body = await request.json();
  const newItem = body.item;

  if (!newItem) {
    return new Response("Missing item field", { status: 400 });
  }

  items.push(newItem);
  return Response.json({ success: true, items });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { index, item } = body;

  if (index == null || !item || !items[index]) {
    return new Response("Invalid index or item", { status: 400 });
  }

  items[index] = item;
  return Response.json({ success: true, items });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { index } = body;

  if (index == null || !items[index]) {
    return new Response("Invalid index", { status: 400 });
  }

  items.splice(index, 1);
  return Response.json({ success: true, items });
}
