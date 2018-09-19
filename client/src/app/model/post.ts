import { User } from "./user";
import { Attachment } from "./attachment";
import { Comment } from "./comment";

export class Post{
    id?: number;
    user: User;
    datum: String;
    time: String;
    text: String;
    viewNumber: Number;
    comment?: Comment[];
    attachments?: Attachment[];
    rating: Number;
}