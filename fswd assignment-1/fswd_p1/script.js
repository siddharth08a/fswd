function validateForm() {

    let studentId = document.getElementById("studentId").value.trim();
    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();
    let parentMobile = document.getElementById("parentMobile").value.trim();

    let gender = document.querySelector('input[name="gender"]:checked');

    if (studentId === "") {
        alert("Please enter Student ID");
        return false;
    }

    if (name === "") {
        alert("Please enter Name");
        return false;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only alphabets");
        return false;
    }

    if (dob === "") {
        alert("Please select Date of Birth");
        return false;
    }

    if (!gender) {
        alert("Please select Gender");
        return false;
    }

    if (email === "") {
        alert("Please enter Email");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    if (mobile === "") {
        alert("Please enter Mobile Number");
        return false;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits");
        return false;
    }

    if (course === "") {
        alert("Please select a Course");
        return false;
    }

    if (address === "") {
        alert("Please enter Address");
        return false;
    }

    if (parentMobile === "") {
        alert("Please enter Parent's Contact Number");
        return false;
    }

    if (!/^[0-9]{10}$/.test(parentMobile)) {
        alert("Parent's contact number must contain exactly 10 digits");
        return false;
    }

    alert("Admission Form Submitted Successfully!");

    return true;
}