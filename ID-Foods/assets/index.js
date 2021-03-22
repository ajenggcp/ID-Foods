
// let cartButton = document.querySelector("#cartButton");
// let numberDisplay = document.querySelector("#numberDisplay");
// cartButton.addEventListener('click', function(event) {
//     document.querySelector('#count').innerText++;
// });

var count = 0;

function ButtonClick(){
    count += 1;
    document.getElementById("count").innerHTML = count;
};