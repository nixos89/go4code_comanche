import { User } from "./user";
import { Attachment } from "./attachment";

export class Post{
    id?: Number;
    user: User;
    date: String;
    time: String;
    text: String;
    viewNumber: Number;
    comment: Comment[];
    attachments: Attachment[];
    rating: Number;
}