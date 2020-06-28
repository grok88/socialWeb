

export type userType = {
    id: string,
    userUrl:string,
    photos:{
        small:string | null,
        large: string | null
    }
    followed: boolean,
    name: string,
    status: string,
    location: {
        country: string,
        city: string
    }
}
 export type usersReducerInitialStateType = {
    users: Array<userType>
}
export type followACType = { type: "FOLLOW", userId: string }
export type unFollowACType = { type: "UNFOLLOW", userId: string }
export type setUsersACType = { type: "SET-USERS", users: Array<userType> }

export type usersReducerAC = followACType | unFollowACType | setUsersACType;

let initialState: usersReducerInitialStateType = {
    users: [
        // {id: v1(),userUrl:'https://www.dw.com/image/47372909_303.jpg', followed: false, name: 'Alex', status: 'I am big', location: {country: 'Belarus', city: 'Minsk'}},
        // {
        //     id: v1(),
        //     userUrl:'https://www.dw.com/image/47372909_303.jpg',
        //     followed: true,
        //     name: 'Sergey',
        //     status: 'I am big too',
        //     location: {country: 'Belarus', city: 'Pinsk'}
        // },
        // {
        //     id: v1(),
        //     userUrl:'https://www.dw.com/image/47372909_303.jpg',
        //     followed: false,
        //     name: 'Sveta',
        //     status: 'I am big so so',
        //     location: {country: 'Belarus', city: 'Vitebsk'}
        // }
    ]
}

const usersReducer = (state: usersReducerInitialStateType = initialState, action: usersReducerAC) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((user: userType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((user: userType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case 'SET-USERS' :
            console.log(1)
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default :
            return state
    }
}

export const followAC = (userId: string): followACType => {
    return {
        type: "FOLLOW",
        userId
    }
}
export const unFollowAC = (userId: string): unFollowACType => {
    return {
        type: "UNFOLLOW",
        userId
    }
}
export const setUsersAC = (users: Array<userType>): setUsersACType => {
    return {
        type: "SET-USERS",
        users
    }
}

export default usersReducer;