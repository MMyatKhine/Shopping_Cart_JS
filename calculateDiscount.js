let array=[]
array=[ { name: "Milk Bottle", price: 30, discountPercent: 10},{ name: "Cheese", price: 10, discountPercent: 0},{name: "Packaged Meat (1kg)", price: 100, discountPercent: 5},{ name: "Chocolate", price: 30, discountPercent: 5},{ name: "Piza", price: 20, discountPercent: 0},{ name: "Icecream", price: 10, discountPercent: 2},{ name: "Peanut Jam", price: 10, discountPercent: 3}]
let a=array.length;
let finalprice=0,finalCost=0,l=0,j=1;

let calculatePrice=(price,discountPercent)=>{
    let discountPrice=price*(discountPercent/100);
     finalCost=price-discountPrice;
     return finalCost;
}

let c=()=>{
let calculateCost=(a)=>{
    for(let i=0;i<a;i++){
        let price=array[i].price;
        let discountPercent=array[i].discountPercent;
        l=calculatePrice(price,discountPercent);
        console.log("Item "+j+" cost  :"+l+ "USD");
         finalprice=l+finalprice;
         j++;
    }
        console.log("Total Price    :"+finalprice+ "USD");
}
calculateCost(a);
}

c();