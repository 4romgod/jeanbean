document.addEventListener("DOMContentLoaded", function () {
  emailjs.init('d1LZ6ZARetgVcPw1n'); // <-- Your public key

  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const from_name = document.getElementById("name").value || '';
    const from_email = document.getElementById("email").value || '';
    const subject = document.getElementById("subject").value || '';
    const message = document.getElementById("message").value || '';

    const emailParams = { from_email, from_name, subject, message };
    console.log(emailParams);
    emailjs.send('service_q9drsdh', 'template_ehjqomn', emailParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
});
