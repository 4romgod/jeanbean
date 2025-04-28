document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const guardianName = document.getElementById("gname").value;
    const guardianEmail = document.getElementById("gmail").value;
    const childName = document.getElementById("cname").value;
    const childAge = document.getElementById("cage").value;
    const message = document.getElementById("message").value;

    // Log the form data (you can replace this with an API call or other logic)
    console.log("Form Submitted:");
    console.log("Guardian Name:", guardianName);
    console.log("Guardian Email:", guardianEmail);
    console.log("Child Name:", childName);
    console.log("Child Age:", childAge);
    console.log("Message:", message);

    // Optionally, reset the form
    form.reset();
  });
});
