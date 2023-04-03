let arr = [2,3,4,5,4,3,2,1,8,7];

// let result = {};

// arr.forEach((ele, ind)=>{
//     // ele -2 
//     result[`${ele}`] = (result[`${ele}`] || 0) + 1;
// });


// const res = result.filter((ele, index)=>{
//     return ele > 1;
// });  


//console.log(res);  
// 1. result[2] = 2
// 2. result[3] = 2
// 3. result[4] = 2
// 4. result[5] = 1
// 5. result[3] = 1



//{2:2,3:2,4:2}

let temp = new Object; 
let temp2 = [];


for(let i=0;i<arr.length;i++){
    if(temp2.includes(arr[i])){
        temp[`${arr[i]}`] = (temp[`${arr[i]}`] || 1) + 1;;
    }
    else {
        temp2.push(arr[i]);
        //temp[`${arr[i]}`] = 1;
    }
}



console.log(temp);  