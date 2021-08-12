var rect= require("./rectangle")


function solveRect(l,b){
    console.log("solving for rectangle with l = " +l+" and with b= " +b);
    if(l<=0 || b<=0){
        console.log("rectangle dimension should be greater than zero: l="+l+" and b="+b);
    }else{
        console.log("the area of the rectangle is: "+rect.area(l,b));
        console.log("the perimeter of the rectangle is :"+rect.perimeter(l,b));
    }
}
solveRect(2,4)
solveRect(5,6)
solveRect(0,0)