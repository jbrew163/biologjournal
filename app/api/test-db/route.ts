import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    // Test the database connection by making a simple query
    const users = await prisma.user.findMany({
      take: 1,
    })

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      data: users,
    })
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
} 