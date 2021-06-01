export default function getNthFibonacciNumber(n){
    if(!isNaN(n)&&n>=0){
        if(n===0)return 0;
        else if(n===1)return 1;
        else return getNthFibonacciNumber(n-1)+getNthFibonacciNumber(n-2)
    }
    else{
        throw "Invalid data"
    }
}