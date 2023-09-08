import { NextResponse } from "next/server";
import prisma from "../../../prisma/db";
import { todoType } from "../type";

export async function GET() {
    const data = await prisma.todo.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })

    return NextResponse.json({data});
}

export async function POST(request: Request) {
    const req:todoType = await request.json()

    const data = await prisma.todo.create({
        data:{
            title:String(req.title),
            description:String(req.description)
        }
    })

    return NextResponse.json({ data })
  }