import { User } from "../types/user"

type CreateUser = {
    type: "CREATE_USER",
    payload: User
}

type UpdateUser = {
    type: "UPDATE_USER",
    payload: {
        id: number,
        name?: string,
        email?: string
    }
}

type DeleteUser = {
    type: "DELETE_USER",
    payload: {
        id: number
    }
}

type UserReducerActions = CreateUser | UpdateUser | DeleteUser;

export const userReducer = (users: User[], action: UserReducerActions): User[] => {
    switch (action.type) {
        case 'CREATE_USER':
            return [...users, {
                id: users.length,
                name: action.payload.name,
                email: action.payload.email
            }];

        case 'UPDATE_USER':
            return users.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        name: action.payload.name ?? user.name,
                        email: action.payload.email ?? user.email
                    };
                }
                return user;
            });

        // case 'toggleDone':
        //     return users.map(t => {
        //         if (t.id === action.payload.id) {
        //             return { ...t, done: !t.done };
        //         }
        //         return t;
        //     });

        case 'DELETE_USER':
            return users.filter(user => user.id !== action.payload.id);

        default:
            return users;
    }
}