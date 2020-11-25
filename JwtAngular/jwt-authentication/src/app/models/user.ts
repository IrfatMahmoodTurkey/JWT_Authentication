export class User {    
    userName: string;        
    isLoggedIn: boolean;    
    role: string;
    
    constructor(_userName:string, _isLoggedIn:boolean, _role:string){
        this.userName = _userName;
        this.isLoggedIn = _isLoggedIn;
        this.role = _role;
    }
} 