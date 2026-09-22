$(document).ready(function() {

  $("#signupbutton").click(function() {

    var hasError = false;


    // Check name fields
    if (
      $("#fn").val().trim() === "" ||
      $("#mi").val().trim() === "" ||
      $("#ln").val().trim() === ""
    ) {

      $("#name").addClass("error");

      $("#fn, #mi, #ln")
        .addClass("field-error")
        .attr("aria-invalid", "true");

      $("#name-error").prop("hidden", false);

      hasError = true;

    } else {

      $("#name").removeClass("error");

      $("#fn, #mi, #ln")
        .removeClass("field-error")
        .removeAttr("aria-invalid");

      $("#name-error").prop("hidden", true);

    }


    // Check email field
    if ($("#em").val().trim() === "") {

      $("#email").addClass("error");

      $("#em")
        .addClass("field-error")
        .attr("aria-invalid", "true");

      $("#email-error").prop("hidden", false);

      hasError = true;

    } else {

      $("#email").removeClass("error");

      $("#em")
        .removeClass("field-error")
        .removeAttr("aria-invalid");

      $("#email-error").prop("hidden", true);

    }


    // Do not continue if there are errors
    if (hasError) {
      return;
    }


    alert(
      "Thank you! Please watch your email for our exciting newsletter and offers!"
    );

  });

});