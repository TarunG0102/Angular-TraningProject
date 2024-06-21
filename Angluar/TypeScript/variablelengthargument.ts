function addnumbers(...num:number[]){
var i:number;
var sum:number = 0;
for(i=0 ;i<num.length;i++)
    {
        sum += num[i] ;
    }
  console.log("Sum of Number of given the number is ",sum)
}

addnumbers(1,2,3,5)
addnumbers(10,2,3,50,50,55)