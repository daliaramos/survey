$(document).ready(function() {
  $("#survey").submit(function(event) {
    var nameInput = $("input#name").val();
    var lastInput = $("input#last").val();
    var foodInput = $("input#food").val();
    var bandInput = $("input#band").val();

    $(".name").text(nameInput);
    $(".last").text(lastInput);
    $(".food").text(foodInput);
    $(".band").text(bandInput);
    $("#output").show();

    event.preventDefault();
 });
});
