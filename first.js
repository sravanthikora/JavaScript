// ************************Functions********************
function student(){
    stu_name = "sravanthi";
    stu_pin=1;
    branch="ECE";
    document.write("details of "+stu_name+" is "+stu_pin+","+branch);
}
var stu = student();
function add(a,b){
    total = a+b;
    document.write("<h2>addition of "+a+","+b+" is "+total+"</h2>");
}
add(5,6);
function sub(a,b){
    total=a-b;
    return total;
}
document.write("<h3>"+sub(3,1)+"</h3>")
var diff=sub(7,4);
document.write(diff)


// **********************Arrays***********************
var cars =["BMW","mercedes","RollsRoyals","Tesla","TataPunch"]
document.write("<h3>"+cars[3]+"</h3>");
for (var i=0;i<cars.length;i++){
    document.write(cars[i]+" , ")
}
cars.push("Benz");
document.write("<br>");
for (var i=0;i<cars.length;i++){
    document.write(cars[i]+" , ")
}
var arr1 = new Array(1,2,2,5);
document.write("<br>");
document.write(arr1[3]);


// *********************Objects********************
document.write("<br>")
var Bike = {
    bike_name:"Unicorn",
    color:"black",
    price:2500
}
document.write("bike name is : "+Bike.bike_name)
document.write("<br>")
document.write(Bike.model="High end");
document.write("<br>")
document.write(delete Bike.price);
document.write("<br>")

// **********constructor for multiple Object***********
function car(car_brand,car_model,price){
    this.car_brand=car_brand;
    this.car_model=car_model;
    this.price=price;
    this.AutoPilot=function(){
        document.write(car_brand+" is automatic");
    }
}
var c1=new car("Tesla","model 1",200000);
var c2=new car("Audi","model 2",350000);
c1.fueltype="petrol";
document.write(c1.car_brand);
document.write("<br>")
document.write(c1.fueltype);
document.write("<br>")
document.write(delete c1.price)
document.write("<br>")
document.write(c1.price)
document.write("<br>")
c1.AutoPilot();
document.write("<br>")
c2.AutoPilot();