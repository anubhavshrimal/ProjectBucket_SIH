export class Comment {
    username?: string;
    comment?: string;
    date?: Date;
};

export class Info {
    upvotes?: Array<string>;
    downvotes?:  Array<string>;
}

export class Project {
    username?: string;
    id?: string;
    title?: string;
    date?: Date;
    description?: string;
    project_url?: string;
    tags?: Array<string>;
    contributors?: Array<string>;
    readme?: string;
    license?: string;
    _private?: string;
    video_url?: Array<string>;
    zip_file?: Array<string>;
    images?: Array<string>;
    upvotes?: Array<string>;
    downvotes?:  Array<string>;
    comments?: Array<Comment>;
    project_link?: string;
    url_title?: string;
}