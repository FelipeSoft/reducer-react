"use client";

import { useEffect, useReducer, useState } from "react";
import { UserItem } from "@/app/components/users/user-item";
import { UserList } from "@/app/components/users/user-list";
import { User } from "@/app/types/user";
import { Button } from "@/app/components/button";
import { userReducer } from "@/app/reducer/user";

const Index = () => {
    const [userStateForm, setUserStateForm] = useState<User>({ email: "", id: "", name: "" });
    const [state, dispatch] = useReducer(userReducer, []);

    const createUser = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch({
            payload: {
                id: userStateForm.id,
                name: userStateForm.name,
                email: userStateForm.email,
            },
            type: "CREATE_USER"
        });
        setUserStateForm({
            id: "",
            email: "",
            name: ""
        });
    }

    const editUser = (user: User) => {
        dispatch({
            payload: {
                id: Number(userStateForm.id),
                name: user.name ?? userStateForm.name,
                email: user.email ?? userStateForm.email
            },
            type: "UPDATE_USER"
        });
    }

    const removeUser = (id: number) => {
        console.log(id);
        dispatch({
            payload: { id: id },
            type: "DELETE_USER"
        });
    }

    return (
        <>
            <div className="bg-slate-950 min-h-screen w-screen pt-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col w-full items-center">
                        <form className="flex flex-col w-full gap-4 max-w-md mb-8">
                            <label className="flex flex-col">
                                ID
                                <input value={userStateForm.id} onChange={(e) => setUserStateForm((prev) => ({ ...prev, id: Number(e.target.value) }))} className="px-4 py-2 rounded-md text-black" type="number" />
                            </label>
                            <label className="flex flex-col">
                                Nome
                                <input value={userStateForm.name} onChange={(e) => setUserStateForm((prev) => ({ ...prev, name: e.target.value }))} className="px-4 py-2 rounded-md text-black" type="text" />
                            </label>
                            <label className="flex flex-col">
                                E-mail
                                <input value={userStateForm.email} onChange={(e) => setUserStateForm((prev) => ({ ...prev, email: e.target.value }))} className="px-4 py-2 rounded-md text-black" type="text" />
                            </label>
                            <Button variant="blue" onClick={createUser}>Criar</Button>
                        </form>
                    </div>
                    <UserList>
                        {state.map((user) => {
                            return (
                                <UserItem onEdit={() => editUser(user)} onRemove={() => removeUser(Number(user.id))} key={user.id} user={user} />
                            )
                        })}
                    </UserList>
                </div>
            </div>
        </>
    );
}

export default Index;