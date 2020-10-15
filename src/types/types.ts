export type UserType = {
    id: string;
    userUrl: string;
    photos: {
        small: string | null;
        large: string | null;
    }
    followed: boolean;
    name: string;
    status: string;
    location: {
        country: string;
        city: string;
    }
}
// Для постов
export type ObjPostType = {
    id: string,
    message: string,
    likeCount: string
}
