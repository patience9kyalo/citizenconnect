export interface User {
  Id: string
  Name: string;
  Email: string;
  Password: string;
  Role: string;
  IsApproved?: number
}

export interface RegisterResponse {
  Name: string;
  Email: string;
  Password: string;
  Role:string
  Message: string;
}

export interface LoginReq {
  Email: string;
  Password: string;
}

export interface Payload {
  Sub: string;
  Id: string;
  Name: string;
  Role: string;
}

export interface LoginResponse {
  message: string;
  Role: string;
  payload: Payload;
  token:string
}
