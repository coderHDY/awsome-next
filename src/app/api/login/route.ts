import { supabase } from "@/lib/supabase";
export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;
  console.log(username, password);
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (error || !data) {
    return Response.json({ message: "登录失败" }, { status: 401 });
  }

  return Response.json({ message: "登录成功", user: data });
}
