// JavaScript Validation Script for Student Admission Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("admissionForm");
  const resetBtn = document.getElementById("resetBtn");
  const successBox = document.getElementById("successBox");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    function check(condition, elementId, message) {
      const errSpan = document.getElementById(elementId);
      if (!condition) {
        errSpan.textContent = message;
        isValid = false;
      } else {
        errSpan.textContent = "";
      }
    }

    // 1. Validate Student ID
    const sid = document.getElementById("studentId").value.trim();
    check(sid !== "" && sid.length >= 4, "err_studentId", "Enter a valid Student ID (min 4 characters).");

    // 2. Validate Full Name (letters and spaces only)
    const name = document.getElementById("fullName").value.trim();
    const namePattern = /^[A-Za-z\s]{3,50}$/;
    check(name !== "" && namePattern.test(name), "err_fullName", "Name must contain only alphabets and spaces (min 3 chars).");

    // 3. Validate Date of Birth (must be valid past date)
    const dobVal = document.getElementById("dob").value;
    const today = new Date().toISOString().split("T")[0];
    check(dobVal !== "" && dobVal < today, "err_dob", "Select a valid date of birth (cannot be today or in the future).");

    // 4. Validate Gender
    const genders = document.getElementsByName("gender");
    const isGenderSelected = Array.from(genders).some(r => r.checked);
    check(isGenderSelected, "err_gender", "Please select a gender.");

    // 5. Validate Email Address
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    check(email !== "" && emailPattern.test(email), "err_email", "Enter a valid email address (e.g. name@domain.com).");

    // 6. Validate Mobile Number (10 digits starting with 6-9)
    const mobile = document.getElementById("mobile").value.trim();
    const phonePattern = /^[6-9]\d{9}$/;
    check(mobile !== "" && phonePattern.test(mobile), "err_mobile", "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");

    // 7. Validate Course
    const course = document.getElementById("course").value;
    check(course !== "", "err_course", "Please select a course from the dropdown.");

    // 8. Validate Address
    const address = document.getElementById("address").value.trim();
    check(address !== "" && address.length >= 10, "err_address", "Please provide a complete address (min 10 characters).");

    // 9. Validate Parent's Contact Number
    const parentMobile = document.getElementById("parentMobile").value.trim();
    const parentSpan = document.getElementById("err_parentMobile");
    if (parentMobile === "") {
      parentSpan.textContent = "Parent's contact number is required.";
      isValid = false;
    } else if (!phonePattern.test(parentMobile)) {
      parentSpan.textContent = "Enter a valid 10-digit parent contact number.";
      isValid = false;
    } else if (parentMobile === mobile) {
      parentSpan.textContent = "Parent's number cannot be identical to student's mobile.";
      isValid = false;
    } else {
      parentSpan.textContent = "";
    }

    // Success Handling
    if (isValid) {
      successBox.style.display = "block";
      successBox.textContent = `Application successfully validated & submitted for ${name} (ID: ${sid})!`;
      alert("Success! Admission Form submitted for " + name);
    } else {
      successBox.style.display = "none";
    }
  });

  resetBtn.addEventListener("click", function () {
    form.reset();
    document.querySelectorAll(".error-text").forEach(el => el.textContent = "");
    successBox.style.display = "none";
  });
});
