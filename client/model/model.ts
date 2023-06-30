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

export interface JobCustom {
    uid: string,
    id: string,
    companyName: string,
    jobTitle: string,
    typeTime: string, 
    salary: string,
    requireExp: string,
    jobDescription: string,
    jobRequirement: string,
    benefits: string,
    urlPhoto: string,
    numberRequirement: number,
    gender: string,
    address:string,


}