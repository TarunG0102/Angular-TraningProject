type employee ={
    name:string;
   department:string
};

type player ={
    team:string;
}

type combinedType = employee & player

// const sachin: combinedType={ //Must Need to assign value this will not work

//     name:"sachin",
//     department:"IT",
//     // team :"Angluar"
// }

// const sachin: combinedType={  // Can not be extra added 

//     name:"sachin",
//     department:"IT",
//     team :"Angluar"
//     player:"India"
// }


const sachin: combinedType={  // Can not be extra added 

    name:"sachin",
    department:"IT",
    team :"Angluar"
}

console.log(sachin)