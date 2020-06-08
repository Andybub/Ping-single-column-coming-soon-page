$(document).ready(function (e) {
  $("form > button").click(function (e) {
    formValidate();
  });

  function formValidate() {
    var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var email = $("form > input").val();

    if (emailReg.test(email)) {
      $("form > input").removeClass("error");
      $("form > .errorMessage").removeClass("error");
    } else {
      $("form > input").addClass("error");
      $("form > .errorMessage").addClass("error");
    }
  }
});
