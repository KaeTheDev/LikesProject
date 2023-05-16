var count1 = 0;
var count2 = 0;
var count3 = 0;
var countElement1 = document.querySelector(".likes1");
var countElement2 = document.querySelector(".likes2");
var countElement3 = document.querySelector(".likes3");


function increaseCount1() {
    count1++;
    countElement1.innerText = count1 + " like(s)";
    console.log(count1);
}

function increaseCount2() {
    count2++;
    countElement2.innerText = count2 + " like(s)";
    console.log(count2);
}

function increaseCount3() {
    count3++;
    countElement3.innerText = count3 + " like(s)";
    console.log(count3);
}
