import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([{
    message: "Otakudesu unofficial API, made by rizki with 🤍",
    GitHub: "https://github.com/rizkiwibu",
    Support: "-",
  },],
    { status: 200 }
  )
}
