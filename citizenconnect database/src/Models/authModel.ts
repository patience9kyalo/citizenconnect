export interface User {
    length: number
    Id: string
    Name: string
    Email: string
    Password: string
    Role: string
    IsDelete: number
    IsEmailSent: number
    IsApproved: number
}


export interface Payload {
    Sub: string;
    Id: string;
    Name: string;
    Role: string;
}

// export interface LoginResponse {
//     message: string;
//     Role: string;
//     payload: Payload;
//     token: string
// }