//Write a function that accepts an array of strings and console.logs each element using a for loop.
 
function ArrayStrings(arr){
 for(let i=0;i<arr.length;i++){
    console.log(arr[i])
 }
}
let arr=["ball","bit","girl","bottom"]
ArrayStrings(arr)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each 
//number multiplied by 2.

function arrayNumbers(numbers){
    numbers.forEach(function(number){
        console.log(number*2)
    })
}
let numbers=[2,4,5,6,7,89,10]
arrayNumbers(numbers)


//Write a function that takes in an array of numbers and consoles the first four items 
//multiplied by 8 and the last two added by 5.
// Console the array with the new values
function ArrayNumber(number){
    let r=[]
    for(d=0;d<number.length;d++){
        if(d<4){
        r.push(number[d]*8)
        }
        else if(d>2){
            r.push(number[d])
        }
    }
    console.log(r)
}
let number=[3,5,6,8,55,9];
ArrayNumber(number)

//Write a function that takes in the following array and use a while loop to iterate
// and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
let f=0;
function ArrayNums(arrNum){
   
    while(f<arrNum.length){
 if(f===5){
        break;
        }
        console.log({"arrNum":arrNum[f]})
        f++
        }
    }
ArrayNums(arrNum)

//Write a function that takes in a an array of strings and use a continue
// statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']

function ArrStrings(fruits){
    for(let g=0;g<fruits.length;g++){
        if(g==2){
            continue
        }
        console.log({"continue":fruits[g]})
    }
}
let fruits= ['apple','plum','banana','strawberries','kiwi'] 
ArrStrings(fruits)
