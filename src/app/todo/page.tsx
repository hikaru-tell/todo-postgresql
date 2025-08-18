"use client";

import { useEffect, useState } from "react";
import { todo } from "@/generated/prisma";
import TodoForm from "@/components/TodoForm";
import TodoCard from "@/components/TodoCard";

export default function page(){
    const [todos, setTodos] = useState<todo[]>([]);

    const fetchTodos = async () => {
        const res = await fetch("/api/todo");
        const data = await res.json();
        setTodos(data.data);
    }

    const updateTodo = async (id: string, completed: boolean) => {
        const formData = new FormData()
        formData.append("id", id)
        formData.append("completed", completed.toString())
        await fetch("/api/todo", {
            method: "PATCH",
            body: formData,
        })

    }




    useEffect(() =>{
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todolist</h1>
            <ul>
                {todos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo}/>
                ))}
            </ul>
            <TodoForm onSubmit={fetchTodos}/>
        </div>
    )
}
