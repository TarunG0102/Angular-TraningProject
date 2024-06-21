class PrivateePerson { 
    //fields not required to be declared if access specifier used in constructor
 
    //constructor 
    constructor(private fname:string,private lname:string) {
     //fields not required to be assigned if access specifier provided.
    }  
     fullName():string{
         return this.fname+" "+this.lname
     }
    //function 
    disp():void { 
       console.log("hi "+this.fullName()) 
    } 
 }
 
 let person_AAAAA=new PrivateePerson("Sachin","Tendulkar")
 person_AAAAA.disp()
 