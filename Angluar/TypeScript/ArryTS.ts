var arr:number[]= new Array(4)

for(let i = 0;i<arr.length;i++){
    arr[i] = i*2
}

arr[4] = 100
arr[10] = 50
console.log(arr)