import { useState } from "react";

export default function Add() {
    const [data, setData] = useState({
        add_todo: ''
    });
    return (
        <input
            data-testid="todo-input"
            onChange={(evt) => setData(oldData => ({ ...oldData, [evt.target.name]: evt.target.value }))}
            name="add_todo"
            value={data.add_todo} />
    )
}