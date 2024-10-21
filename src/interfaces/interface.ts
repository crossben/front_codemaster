
export interface IUser {
    _id : any;
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
}

export interface IInstructor {
    _id : any;
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
}


export interface IModule {
    _id : any;
    name: string;
    description?: string;
    contenu?: string;
}
export interface IRessource {
    _id : any;
    title: string;
    url?: string;
}

export interface IQuiz {
    _id : any;
    title: string;
    questions: {
        correctAnswer: string;
        question: string;
        options: string[];
    };
}

export interface ICourse {
    _id : any;
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


export interface IEnrolledCourse {
    _id : any;
    userId: any;
    courseId: any;
    courseTitle: string; // Added for quick reference
    enrollmentDate: Date;
    status: string;
}
