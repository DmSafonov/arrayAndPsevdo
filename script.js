const arr = [1, 2, 3, 4, 6, 8];

arr.pop();

arr.push(10);

console.log(arr);

for (let i=0; i< arr.length; i++){ //Перебор
   console.log(arr[i]);
};

for(let value of arr){
   console.log(value);
};

arr.forEach((item, i, arr)=>{
   console.log(`${arr[i]}: ${item}`)
});

// const str = prompt("", "");
// const products = str.split(", ");
arr.sort();
console.log(arr);