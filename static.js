class User { 
    static count =0
    constructor(username,email,password)
    {
    this.username=username;
    this.email=email;
    this.password=password;
    User.count++
    }
    Printnumofusers()
    {
        console.log('Num of users registered= '+User.count)
    }
    Register()
    {
        console.log(this.username+" is now registered")
    }
}
class Member extends User{
    constructor(username,email,password,memberpackage){
        super(username,email,password);
        this.memberpackage=memberpackage;
        this.todaysdate=new Date();
        const membershipActivetillyear=this.todaysdate.getFullYear();
        const membershipActivetillmonth=this.todaysdate.getMonth();
        const membershipActivetillday=this.todaysdate.getDay();
        this.membershipActivetilldate=new Date(
            membershipActivetillyear+1,
            membershipActivetillmonth+1,
           membershipActivetillday
        );

    }
    renewmembership(){
        const membershipActivetillyear=this.membershipActivetilldate.getFullYear();
        const membershipActivetillmonth=this.todaysdate.getmonth();
        const membershipActivetillday=this.todaysdate.getDay();
        if(this.package==="standard package"){
        this.membershipActivetilldate=new Date(
        membershipActivetillyear,
            membershipActivetillmonth+1,
           membershipActivetillday
        );
        }
        else if(this.package==="yearly package")
        {
            this.membershipActivetilldate=new Date(
                membershipActivetillyear+1,
                membershipActivetillmonth+1,
               membershipActivetillday
            );
        
    }
}
    subscribtionactivetilldate()
    {
        console.log(this.username+"is subscribed to" +this.package +"uptill"+this.membershipActivetilldate);
    }
    getpackage(){
        console.log(this.username+"is subdcribed to" +this.package);
    }
}
const Mike=new Member('mike','abc@gmail.com','pass123','yearlypackage')
Mike.getpackage();




