// app/api/items/route.ts

// 用来模拟数据库的内存数组（真实情况你应该用数据库）
export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;
  console.log(username, password);

  // 设置token为随机数，放入jwt中
  const token = "1234567890111111";
  if (username === "admin" && password === "123456") {
    // 模拟数据库查询，如果存在该用户，则返回token
    return Response.json({ success: true, token });
  }

  return Response.json({ success: false });
}
