import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

//一覧取得API
export async function GET(request: Request) {
    const todos = await prisma.todo.findMany({
        include: {
            subtodos:true
        },
        orderBy: {
            createdAt: "asc"
        }
    })
    return Response.json({ data: todos });
    };

//作成API
export async function POST(request: Request) {
    const formData = await request.formData();
    console.log(formData.get("title"));
    const title = formData.get("title") as string

    const todo = await prisma.todo.create({
        data: {
            title
        },
    })
    return Response.json({});
}

//編集API
export async function PATCH(request: Request) {
    const formData = await request.formData();
    const id = formData.get("id") as string
    const completed = formData.get("completed") === "true"

    await prisma.todo.update({
        where: {id},
        data: {completed}
    })
    return Response.json({});
}

//削除API
export async function DELETE(request: Request) {
    const formData = await request.formData();
    const id = formData.get("id") as string
    

    await prisma.todo.delete({
        where: {id},
    })
    return Response.json({});
}