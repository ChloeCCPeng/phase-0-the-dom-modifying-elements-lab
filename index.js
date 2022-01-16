// Write your code here! 
//no longer has DOM node 'main#main'
const main = document.getElementById("main");
main.remove();

//has a 'newHeader' variable that points to node 'h1#victory':
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "<p>Chloe is the champion</p>";
document.body.append(newHeader);

