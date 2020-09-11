document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

let friends = ["Paco","Fer","John","Fran"]
document.body.style.backgroundcolor = '#4682B4';
let friend = document.createElement('div');
friend.className = "friend";
document.body.appendChild(friend);

let buttonSing = document.createElement('button');
let sing = document.createTextNode("Sing!");
buttonSing.appendChild(sing);
document.body.appendChild(buttonSing);

buttonSing.addEventListener('click', function (){
for (var i = 0; i < friends.length; i++) { 
  let name = document.createElement('h3')    
  let nameText = document.createTextNode(friends[i]+ ":")
  name.appendChild(nameText)
  friend.appendChild(name)
  for (var j = 100; j > 0; j--) {
  let paragraph = document.createElement('p')
    let pName = document.createTextNode( j + " lines of code in the file," + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file")
    paragraph.appendChild(pName)
    name.appendChild(paragraph)
    }}}); 
});
