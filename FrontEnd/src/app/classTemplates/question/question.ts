export class Answer {
    username?: string;
    answer?: string;
    date?: number;
    upvotes?: Array<string>;
    downvotes?: Array<string>;
    featured_points?: number;
}

export class Question {
    id?: string;
    username?: string;
    title?: string;
    description?: string;
    tags?: Array<string>;
    date?: number;
    upvotes?: Array<string>;
    downvotes?: Array<string>;
    featured_points?: number;
    url?: string;
    question_url?: string;
    answers?: Array<Answer>;
    images?: Array<string>;
    department?: string;
}