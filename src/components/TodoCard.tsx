import { todo } from "@/generated/prisma";

export default function TodoCard({todo, updateTodo}: {todo: todo, updateTodo: (id:string,completed:boolean)=>{}}) {
    return (
        <div className="flex">
            <div className="flex-1">
                <span>{todo.title}</span>
            </div>
            <input type="checkbox" defaultChecked={todo.completed} onChange={() => {updateTodo(todo.id, !todo.completed)}} />
        </div>
    )
}