
export type IUser = {
    _id: any;
    uid: any;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber?: string;
    googleId?: string;
    password?: string;
    profileImageUrl?: string;
    role: string;
    enrolledToCourses?: [any];
    emailVerified?: boolean;
    phoneNumberVerified?: boolean;
    createdAt: any;
    updatedAt: any;
}

export type IInstructor = {
    _id: any;
    uid: any;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    googleId?: string;
    password?: string;
    profileImageUrl: string;
    role: string;
    courses: ICourse[];
    createdAt: any;
    updatedAt: any;
}


export type IModule = {
    _id: any;
    name: string;
    description?: string;
    contenu?: string;
}
export type IRessource = {
    _id: any;
    title: string;
    url?: string;
}

export type IQuiz = {
    _id: any;
    title: string;
    questions: {
        correctAnswer: string;
        question: string;
        options: string[];
    };
}

export type ICourse = {
    _id: any;
    uid: any;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    category: string;
    level: string;
    duration: string;
    instructor: IInstructor;
    enrolledStudents?: number;
    rating?: number;
    requirements?: string[];
    learningObjectives?: string[];
    modules?: IModule[] | undefined;
    quizzes?: IQuiz[];
    resources?: IRessource[] | undefined;
}


export type IEnrolledCourse = {
    _id: any;
    userId: any;
    courseId: any;
    courseTitle: string; // Added for quick reference
    enrollmentDate: Date;
    status: string;
}
