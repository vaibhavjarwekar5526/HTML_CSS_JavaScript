class User
{
    static count=0;

    constructor(username){
        this.username=username;
        this.count = ++User.count;
    }
    userCount=()=>{
        
        console.log(this.count);
    }
    getUserName=()=>{
        console.log(this.username);
    }
}

//User.prototype.count=0;

const u1 = new User("johnsmith10")
u1.userCount();
u1.getUserName();

console.log("------------------------------------");

const u2 = new User("marysue1989")
u2.userCount();
u2.getUserName();

console.log("------------------------------------");

const u3 = new User("milan_rodrick")
u3.userCount();
u3.getUserName()
