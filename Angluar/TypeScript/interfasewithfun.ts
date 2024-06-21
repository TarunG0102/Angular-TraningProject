interface saysHi{
    sayhi: Function;
  };
  class interfacePerson implements saysHi{ 
     constructor(private fname:string,private lname:string) {
      }  
      fullName():string{
          return this.fname+" "+this.lname
      }
     disp():void { 
        console.log("hi "+this.fullName()) 
     } 

     sayhi():void{
     console.log("hi all");
     }
  }
  
  let display=new interfacePerson("Sachin","Tendulkar")
  p1.disp();
