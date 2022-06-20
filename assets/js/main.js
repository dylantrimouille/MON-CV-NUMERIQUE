window.addEventListener('DOMContentLoaded', function (e) {
    var about = document.getElementById("aboutBloc");
    var portFolio = document.getElementById("carousel");
    var skill = document.getElementById("skillBloc");
    var formBloc = document.getElementById("formBloc");
    var exp1 = document.getElementById("exp1");
    var exp2 = document.getElementById("exp2");
    var contact1 = document.getElementById("contact1");
    var contact2 = document.getElementById("contact2");


    window.addEventListener("scroll", function (e) {
        var scrollTop = window.scrollY,
            windowHeight = window.innerHeight,
            scrollHeight = document.body.scrollHeight;
        var scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;

        if (scrollPercent >= 10) {
            about.classList.add("fadeLeft");
            about.classList.remove("notLeft");
        }
        if (scrollPercent >= 27) {
            portFolio.classList.add("fadeRight");
            portFolio.classList.remove("notRight");
        }
        if (scrollPercent >= 40) {
            skill.classList.add("fadeLeft");
            skill.classList.remove("notLeft");
        }
        if (scrollPercent >= 55) {
            formBloc.classList.add("fadeRight");
            formBloc.classList.remove("notRight");
        }
        if (scrollPercent >= 65) {
            exp1.classList.add("fadeLeft");
            exp1.classList.remove("notLeft");
        }
        if (scrollPercent >= 70) {
            exp2.classList.add("fadeRight");
            exp2.classList.remove("notRight");
        }
        if (scrollPercent >= 80) {
            contact1.classList.add("fadeLeft");
            contact1.classList.remove("notLeft");
        }
        if (scrollPercent >= 80) {
            contact2.classList.add("fadeRight");
            contact2.classList.remove("notRight");
        }

    });
});