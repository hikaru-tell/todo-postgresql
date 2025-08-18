-- CreateTable
CREATE TABLE "public"."todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."subtodo" (
    "id" TEXT NOT NULL,
    "todoId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subtodo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."subtodo" ADD CONSTRAINT "subtodo_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "public"."todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
