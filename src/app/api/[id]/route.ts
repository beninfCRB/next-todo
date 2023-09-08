import { NextResponse } from "next/server";
import prisma from "../../../../prisma/db";
import { todoType } from "@/app/type";

export async function GET(request:Request,{ params }: { params: { id: string } }) {
    const id = params.id
    const data = await prisma.todo.findFirst({
        where:{
            id:id
        }
    })

    return NextResponse.json({data});
}

export async function PATCH(request:Request,{ params }: { params: { id: string } }) {
    const id = params.id
    const req:todoType= await request.json()

    const data = await prisma.todo.update({
        where:{
            id:id
        },
        data:{
            ...req
        }
    })

    return NextResponse.json({data});
}