document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let fatherName = document.getElementById("fatherName").value.trim();
  let motherName = document.getElementById("motherName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let terms = document.getElementById("terms").checked;

  let message = document.getElementById("message");

  let gender = document.querySelector('input[name="gender"]:checked');

  // Empty fields check
  if (
    fullName === "" ||
    mobile === "" ||
    fatherName === "" ||
    motherName === "" ||
    email === "" ||
    password === ""
  ) {
    alert("All fields are required!");
    message.style.color = "red";
    message.textContent = "All fields are required!";
    return;
  }

  // Mobile number validation
  let mobilePattern = /^[0-9]{10}$/;

  if (!mobilePattern.test(mobile)) {
    alert("Enter a valid 10-digit mobile number!");
    message.style.color = "red";
    message.textContent = "Invalid mobile number!";
    return;
  }

  // Gender validation
  if (!gender) {
    alert("Please select gender!");
    message.style.color = "red";
    message.textContent = "Please select gender!";
    return;
  }

  // Terms validation
  if (!terms) {
    alert("Please accept terms and conditions!");
    message.style.color = "red";
    message.textContent = "Accept terms and conditions!";
    return;
  }

  // Password validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    message.style.color = "red";
    message.textContent = "Weak password!";
    return;
  }

  // Success popup
  alert("Registration Successful!");

  message.style.color = "green";
  message.textContent = "Registration Successful!";

  console.log({
    fullName,
    mobile,
    fatherName,
    motherName,
    email,
    password,
    gender: gender.value,
    terms
  });

  this.reset();
});