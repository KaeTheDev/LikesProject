var count = 0;
var countElement = document.querySelector(".likes");

function increaseCounter() {
    count++;
    countElement.innerText = count + " like(s)";
    console.log(count);
}



