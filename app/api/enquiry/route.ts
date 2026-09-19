import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  const name = String(b?.name ?? "").trim().slice(0, 100);
  const phone = String(b?.phone ?? "").trim().slice(0, 20);
  if (!name || !/^[0-9+ ]{10,15}$/.test(phone))
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { error } = await supabase.from("enquiries").insert({
    name, phone,
    age_group: String(b.age_group ?? "").slice(0, 30),
    message: String(b.message ?? "").slice(0, 500),
  });
  if (error) return NextResponse.json({ error: "Save failed" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
