const calculate = (a,b,operation)=>{
    return operation(a,b);
};

const result = calculate(5,6,(num1,num2)=>num1+num2);

console.log(result);