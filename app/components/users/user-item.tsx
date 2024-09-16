import { User } from "@/app/types/user";
import { Button } from "../button";
import { useReducer } from "react";
import { userReducer } from "@/app/reducer/user";

type Props = {
    user: User,
    onEdit: (id?: number, ) => void;
    onRemove: (id: number) => void;
};

export const UserItem = ({ user, onEdit, onRemove }: Props) => {
    const [state, dispatch] = useReducer(userReducer, []);

    return (
        <article className="flex items-start justify-between flex-col bg-slate-800 text-white h-[180px] w-full rounded-md p-4">
            <div className="flex flex-col">
                <p><span className="font-semibold">ID: </span>{user.id}</p>
                <p><span className="font-semibold">Nome: </span>{user.name}</p>
                <p><span className="font-semibold">Email: </span>{user.email}</p>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="blue" onClick={() => onEdit(Number(user.id))}>Editar</Button>
                <Button variant="destructive" onClick={() => onRemove(Number(user.id))}>Excluir</Button>
            </div>
        </article>
    )
}