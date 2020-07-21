
//  feetToMile
 
function feetToMile(feet){
     return  feet * 0.00019;
  
    }
    var total_mile  = feetToMile(50); 
    
    console.log(total_mile);

  

 

// woodCalculator
 
   function woodCalculator(chair, table, bed){
       
    var chairCount= chair*1;
    var tableCount = table *3;
    var bedCount = bed*5;

    var totalWood= chairCount+tableCount+bedCount;
    return totalWood;
          
   }

   var total = woodCalculator(2, 3, 5);
   console.log(total);


// brickCalculator

function brickCalculator(feet){
    var floor=0;
   
    if(floor=>10){

        return 15*1000;
    }
    else if (floor=>20){
         return 12*1000;
    }
    else{
        return 10*1000;
    }

}

var feetCount = brickCalculator(20);
console.log(feetCount);


//tinyFriend

function tinyFriend(name){
    var smallest = Name[0];
       for(i=0; i<name.length; i++){
           var currentName = name[i];
           if(currentName>largest){
               smallest=currentName;
           }
       }
       return smallest;
}

var result = tinyFriend(["prottoy", "rifat"]);
console.log(result);

