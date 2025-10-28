
$(document).ready(function () {
    window.togglePassword = togglePassword; //export function sample to the globals.
    function togglePassword() {
      var x = document.getElementById("form-password");
      // var x = $('#form-password');
      if (x.type === "password") {
        x.type = "text";
        $('.input-group.show-password i').addClass('fa-eye-slash');
        $('.input-group.show-password i').removeClass('fa-eye');
      } else {
        x.type = "password";
        $('.input-group.show-password i').addClass('fa-eye');
        $('.input-group.show-password i').removeClass('fa-eye-slash');
  
      }
    }
  });
  