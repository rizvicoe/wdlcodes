var age = [21,22,20,34,27,54,78];

let agestr = age.join(",");


console.log(agestr);

for(let i=0; i < age.length; i++){
  if(age[i]<=18){
      console.log("Less");
  }
}

for(let i in age ){
  console.log(age[i]);
}

age.forEach(function (ele,i){
  console.log(ele,i);
});

let eligible = age.filter(function (ele,i){
    if(ele>=50){
        return true;
    }
  
});

console.log(eligible);

// Object
var student = {
    name: 'Shibu',
    location: 'Vasai',
    pincode: 401202,
    distance: 45.3
};
  
  
for(let onestudent in student){
    console.log(onestudent,student[onestudent]);
}
  
  
