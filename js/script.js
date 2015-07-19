//==============================================================
//popup search form
//==============================================================
var popup = document.querySelector(".popup");
var interestA = document.querySelector(".interest a");
var button = document.querySelector(".popup button");
var plusChild = document.querySelector(".counters-child .icon-plus");
var minusChild = document.querySelector(".counters-child .icon-minus");
var plusAdult = document.querySelector(".counters-adult .icon-plus");
var minusAdult = document.querySelector(".counters-adult .icon-minus");
var count = document.querySelector(".child-count");
var countAdult = document.querySelector(".adult-count");
var form = popup.querySelector("form");
var dateIn = form.querySelector("#datein");
var dateOut = form.querySelector("#dateout");
var y = 0; //счетчик взрослых
var x = 0; //счетчик детей
var z = 0; //счетчик кликов колличества детей
var adult = popup.querySelector(".counters-adult .count");
var child = popup.querySelector(".counters-child .count");

countAdult.innerHTML = y;
count.innerHTML = x;
minusAdult.classList.add("unactive");
minusChild.classList.add("unactive");

interestA.addEventListener("click", function(event) {
    event.preventDefault();

    var text = interestA.innerHTML;

    if (text == "ПОИСК ГОСТИНИЦЫ В седоне") {
        interestA.innerHTML = "скрыть поиск";
        popup.classList.remove("hiden");
        popup.classList.add("visible");
        interestA.classList.add("a-change");
        interestA.classList.remove("a-change-in");
    } else {
        interestA.innerHTML = "ПОИСК ГОСТИНИЦЫ В седоне";
        popup.classList.remove("visible");
        popup.classList.add("hiden");
        interestA.classList.remove("a-change");
        interestA.classList.add("a-change-in");
    };
});

plusChild.addEventListener("click", function() {
    x = count.innerHTML;
    x = parseInt(x);
    x += 1;
    count.innerHTML = x;
    if (x > 0) {
        minusChild.classList.remove("unactive");
    };
});

minusChild.addEventListener("click", function() {
    x = count.innerHTML;
    x = parseInt(x);
    if (x <= 1) {
        minusChild.classList.add("unactive");
        x = 0;
        count.innerHTML = x;
    } else {
        x -= 1;
        count.innerHTML = x;
    };
});

plusAdult.addEventListener("click", function() {
    y = countAdult.innerHTML;
    y = parseInt(y);
    y += 1;
    countAdult.innerHTML = y;
    if (y > 0) {
        minusAdult.classList.remove("unactive");
        adult.classList.remove("counter-required");
    };
});

minusAdult.addEventListener("click", function() {
    y = countAdult.innerHTML;
    y = parseInt(y);
    if (y <= 1) {
        minusAdult.classList.add("unactive");
        y = 0;
        countAdult.innerHTML = y;
        adult.classList.add("counter-required");
    } else {
        y -= 1;
        countAdult.innerHTML = y;
    };
});

form.addEventListener("submit", function(event) {

    if ((z > 0) || (x > 0)) {
        child.classList.remove("counter-required");
    } else {
        child.classList.add("counter-required");
    };

    if (!((dateIn.value) && (dateOut.value) && (y > 0) && (!(child.classList.contains("counter-required"))))) {
        event.preventDefault();
        if (!(dateIn.value)) {
            dateIn.classList.add("required");
            dateIn.focus();
        };
        if (!(dateOut.value)) {
            dateOut.classList.add("required");
            dateOut.focus();
        };
        if (!(y > 0)) {
            adult.classList.add("counter-required");
        } else {
            adult.classList.remove("counter-required");
        };
    } else {
        event.preventDefault(); //действие по умолчанию отменено чтоб  перекидывать на страницу поиска
        location.href = 'hotels.html';
    };

});

dateIn.onblur = function() {
    if ((dateOut.value) > (dateIn.value)) {
        popup.classList.remove("error-date");
        dateIn.classList.remove("required");
        dateOut.classList.remove("required");
    } else {
        dateIn.classList.add("required");
        dateOut.classList.add("required");
        popup.classList.add("error-date");
    };
    if ((dateOut.value) && (!(dateIn.value))) {
        dateIn.classList.add("required");
        dateOut.classList.remove("required");
        popup.classList.remove("error-date");
    }
    if ((dateIn.value) && (!(dateOut.value))) {
        dateOut.classList.add("required");
        dateIn.classList.remove("required");
        popup.classList.remove("error-date");
    }
};

dateOut.onblur = function() {
    if ((dateOut.value) > (dateIn.value)) {
        popup.classList.remove("error-date");
        dateIn.classList.remove("required");
        dateOut.classList.remove("required");
    } else {
        dateIn.classList.add("required");
        dateOut.classList.add("required");
        popup.classList.add("error-date");
    };
    if ((dateOut.value) && (!(dateIn.value))) {
        dateIn.classList.add("required");
        dateOut.classList.remove("required");
        popup.classList.remove("error-date");
    }
    if ((dateIn.value) && (!(dateOut.value))) {
        dateOut.classList.add("required");
        dateIn.classList.remove("required");
        popup.classList.remove("error-date");
    }
};

child.onclick = function() {
    child.classList.remove("counter-required");
    z += 1;
};