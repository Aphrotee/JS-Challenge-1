function ageInDays () {
   let birthYear = prompt(' What year were you born ?');
   if (birthYear === null | birthYear === ""){
       return;
   }
   else  {
       let age = 2022 - birthYear;
       let actualAgeInDays = 0;
       let daysToAdd = 0;
       if (age % 4 == 0){
           daysToAdd = age/4;
       } else if (age % 4 == 1){
           daysToAdd = (age - 1)/4;
       } else if (age % 4 == 2){
           daysToAdd = (age - 2)/4;
       } else if (age % 4 == 3){
           daysToAdd = (age - 3)/4;
       }
       actualAgeInDays = daysToAdd + (365 * age);
       let h3 = document.createElement('h3');  
       let textAnswer = document.createTextNode('You are ' + actualAgeInDays + ' days old.')
       h3.setAttribute('id', 'actualAgeInDays');
       h3.appendChild(textAnswer);
       document.getElementById('flex-box-result').appendChild(h3);
   }
}   
function reset(){
    document.getElementById('actualAgeInDays').remove();
}
