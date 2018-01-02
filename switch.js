let food = "soup"
switch(food){
    case "salad":
        console.log("salad")
        break;
    case "soup":
        console.log("soup")   
        break;    
    case "butter":
        console.log("butter")
        break;
    default:
        console.log("Sorry")
}    
//break is important, otherwise the next statements are printed without checking for cases
