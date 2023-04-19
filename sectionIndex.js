// detectar la sección actual
var currentSection = $("body").attr("id");

// agregar la clase "active" al enlace correspondiente en el navbar
$("#sobreMi").each(function() {
  if ($(this).attr("href").indexOf(currentSection) !== -1) {
    $(this).parent().addClass("active");
  }
});