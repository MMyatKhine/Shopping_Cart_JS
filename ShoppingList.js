let a,b,result,total,totalResult=0,discountPrice;
let array=[]

let name=prompt("Enter item name!");
let p=prompt("Enter its price!");
let originalPrice=parseInt(p);
let d=(prompt("Enter its discount!"));
let discount=parseInt(d);
console.log("Item Name: "+name +"\n"+"Price:"+p+"\n"+"Discount:"+d);

let item ={Name:name,Price:originalPrice,Discount:discount};
array.push(item);

let priceCalculate=(originalPrice,discount)=>{
    discountPrice=originalPrice*(discount/100);
    price=originalPrice-discountPrice;
    return price;
}

let totalCalculate=()=>{
    for (let i=0;i<array.length;i++){
        a=array[i].Price;
        b=array[i].Discount;
        total=priceCalculate(a,b);
        console.log("Item Name: "+array[i].Name+"\n"+"Original Price:"+array[i].Price+"\n"+"Discount:"+array[i].Discount+"\n"+"Price:"+total);
        totalResult=total+totalResult;
    }
        console.log("Total Price : "+totalResult +" USD");
        totalResult=0;
    }
