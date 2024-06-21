class person{

fname:string;
lname:string;

constructor(fname:string,lname:string){
    this.fname = fname;
    this.lname = lname;
}

fullname():string{

    return this.fname+" "+this.lname
}

disp():void{
    console.log("Hi "+
        this.fullname())
}

}

let p1:person = new person("Sachine","Tendulkar")
let p2:person = new person("Tejal","More")
let p3:person = new person("Rahul","Tiwari")
let p4:person = new person("Shiwani","Tiwari")
let p5:person = new person("Kushi","Tiwari")
p1.disp()
let person_arr:person[] =[p1,p2,p3,p4,p5]
person_arr.sort((n1:person,n2:person):number =>{
    if(n1.fname>n2.fname)
    return -1 ;
    else if (n1.fname<n2.fname)
    return 1 ;
    
    return 0;
    });

console.log(JSON.stringify(person_arr))


