export class ContactInfo {
    phone_no?: string;
    email_id?: string;
    country?: string;
    state?: string;
    city?: string;
    zipcode?: number;
};

export class User {
    username?: string;
    password?: string;
    name?: string;
    bio?: string;
	gender?: string;
    date?: number;
	category?: string;
	institute?: string;
    rating?: number;
	contributing?: Array<string>;
    contact_information?: ContactInfo;
    favourite_tags?: Array<string>;
    following?: Array<string>;
    followers?: Array<string>;
    question_ask?: Array<string>;
    question_answer: Array<string>;
}