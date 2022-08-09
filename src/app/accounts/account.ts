import { Student } from "../students/student";

export interface Account<T = Student> {
    _id: string;
    accountNum: number;
    bank: string;
    branch: string;
    accountType: string;
    status: string;

    studentID: T;
}