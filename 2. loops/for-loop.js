for(let i=0; i<5; i++){
    console.log(i);
}

//console.log(i); -> printing this from outside of the scope of the loop won't work becuase we created the variable i inside that scope.

//but if we used var instead of let

for(var j= 0; j<5; j++){
    console.log(j);
}

console.log(j); //this will work