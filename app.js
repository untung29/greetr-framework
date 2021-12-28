// g.greet().setLang("es").greet(true).log();
var g = G$("John", "Doe");

$("#login").click(function () {
  g.setLang($("#lang").val()).HTMLGreeting($("#greeting"), true).log();
});
