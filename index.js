const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Chloe is the champion";
body.append(newHeader);


// //has a 'newHeader' variable that points to node 'h1#victory':
// const newHeader = document.createElement("h1");
// newHeader.id = "victory";
// newHeader.innerHTML = "<p>Chloe is the champion</p>";
// document.body.append(newHeader);

