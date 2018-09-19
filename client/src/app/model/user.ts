import { SecurityAuthority } from './securityAuthority';
import { Post } from './post';



export class User {
    id?: Number;
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    email: String;
    posts: Post[];
    securityAuthority: SecurityAuthority;
}


export class UserLogin {
    username: String;
    password: String;

}
