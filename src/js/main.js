import modals from "./modules/modals";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let deadline = "2020-08-08";

  modals();
  timer(".container1", deadline);
});

$("form").submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "assets/mailer/mail.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $("#consultation, #order").fadeOut();
    $(".overlay, #thanks").fadeIn("slow");

    $("form").trigger("reset");
  });
  return false;
});
