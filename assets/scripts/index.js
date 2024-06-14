(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          document.querySelector(".newsletter").classList.toggle("hide");
          document.querySelector(".success-container").classList.toggle("hide");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  document.querySelector("#dismiss").addEventListener("click", () => {
    document.querySelector(".newsletter").classList.toggle("hide");
    document.querySelector(".success-container").classList.toggle("hide");
    forms[0].classList.remove("was-validated");
    forms[0].reset();
  });
})();
