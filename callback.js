/*function read(){
    let num =prompt("read a number")
    num=Number(num);
    return num;
}
 function add(callbackfunc){
    let num1= callbackfunc();
    let num2= callbackfunc();
    let sum=num1+num2;
    alert(sum)
 }

add(read);*/

//A function can return a function

/*function double(arr){
   let  brr=[];
   for (let i=0;i<arr.length;i++){
    brr.push(arr[i]*2);

   }
   return brr;
}

function print(fn){
    let num =[1,2,3,4,5]
    let result=fn(num);
    console.log(result);

}
print(double)*/

//print the idex of the element

let arr=[1,2,3,4,5]
function callback(ele, index, arr){
    console.log(ele+"...."+index);

}
arr.forEach(callback);

/*let result=arr.every((ele)=>{
    if(ele<10){
        return true
    }
    else{
        return false
    }
})

console.log(result)

//to chech divisibilty of 4,6,8
/*let arr1=[256,36,8,2,96,108]

let result1 =arr1.every((ele)=>{
    if(ele%4==0 & ele%6==0 & ele% 8==0){
        return true
    }
    else{
        return false
    }
})
console.log(result1)*/

/*let arr=[1,3,5,8,9]
let newarr=arr.splice(2,3)
console.log(arr,newarr)
let newarr2=arr.splice(2,3,78,68,79,89)
console.log(arr,newarr2)


arr.find()
arr.concat()
arr.findIndex()
arr.filter()
arr.reduce()
arr.map()

