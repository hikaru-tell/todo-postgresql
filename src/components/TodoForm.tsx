"use client";

    import { useRouter } from "next/navigation";
    import { useState } from "react";

export default function TodoForm({onSubmit}: {onSubmit: () => void}) {
    const [title, setTitle] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        await fetch("api/todo", {
            method: "POST",
            body: formData
        })
        setTitle("");
        onSubmit();
    }

    return (
        <div>
        
        <form className="" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">作成</button>
        </form>
        </div>

    )
}