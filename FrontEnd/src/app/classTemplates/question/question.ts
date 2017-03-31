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
    url_title?: string;
    answers?: Array<Answer>;
}