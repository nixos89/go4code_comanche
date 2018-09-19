import { Post } from "./post";
import { SecurityAuthority } from "./securityAuthority";

export class User{
    id?: Number;
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    email: String;
    posts: Post[];
    securityAuthority: SecurityAuthority;   
}
