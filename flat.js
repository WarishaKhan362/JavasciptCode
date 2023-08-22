//let arr=[1,2,3,4,5,6,67,78,67];
//arr.copyWithin(0,9,10);
//console.log(arr)

/*arr.sort((a,b)=>{
    if(a>b){
        return -1;
    }
    else if(a<b){
        return 1;
    }
})
arr.sort((a,b)=>a-b)
console.log(arr)
console.log(arr[4])*/

/*let arr=[12,23,45,25,67,87];
let temparr=arr.filter((ele,index,arr)=>{
    if(ele%5==0){
        return true;
      
        
    }
    else 
    return false;
})
console.log(temparr)*/

/*let arr2=[1,2,3,4,5,6];
let sum=arr2.reduce((prevAccumulatedResult,ele)=>{
    return prevAccumulatedResult+ele;
},0);
console.log(sum)*/

let arr3=[1,2,3,4,5,3,2];
let result=[];
let i=0;
while(i<=arr3.length+1){
    result=arr3[i];
    i++;
}
