$(document).ready(function () {
    $("h1").css("color", "red");
});

console.log($("a").attr("href"));

$("h1").click(function () {
    $("h1").css("color", "blue");
});

$(".btn").click(function () {
    $("h1").css("color", "blue");
});

$(document).keydown(function (e) {
        $("h1").text(e.key);
});