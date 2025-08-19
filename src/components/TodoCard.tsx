import { todo } from "@/generated/prisma";

export default function TodoCard({todo, updateTodo, deleteTodo}: {todo: todo, updateTodo: (id:string,completed:boolean)=>{}, deleteTodo:(id:string)=>{}}) {
    return (
        <div className="flex items-center gap-2">
            <input 
                type="checkbox" 
                className="!m-0 !w-8 !h-8 !p-0 !bg-transparent" 
                defaultChecked={todo.completed} 
                onChange={() => {updateTodo(todo.id, !todo.completed)}} 
            />
            <span className="flex-1">{todo.title}</span>
            <button className="!rounded-full bg-red-500 
  hover:bg-red-600 text-white px-4 py-2 
  transition-colors" onClick={()=> {deleteTodo(todo.id)}}>削除</button>
        </div>
    )
}