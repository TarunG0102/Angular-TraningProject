function sayhi(id:number,fname:string,lname?:string):void{
    console.log("ID",id);
    console.log("Name",fname);

    if(lname!=undefined)
    console.log("lname",lname)
}

sayhi(123,"TARUN")
sayhi(123,"TARUN","KUMAR")

