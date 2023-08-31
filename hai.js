const arr = [1,2,4,5,8,9,64]

 const sumOfArr=arr.reduce((accum,current)=>{
    return accum+current
},0)

console.log(sumOfArr)


const multiplyofarray= arr.map((element)=>{
    return 5*element
})
console.log(multiplyofarray)