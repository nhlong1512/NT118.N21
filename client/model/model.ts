export interface FormDataSignIn {
    email: string;
    password: string;
}

export interface FormDataSignUp {
    fullName: string;
    email:string;
    password: string; 
    confirmPassword: string;
}

export interface UserCustom {
    id: string,
    fullName: string,
    email: string,
    role: number,
    createdAt: Date,
    photoURL: string,
    phoneNumber: string,
    dateOfBirth: string,
}