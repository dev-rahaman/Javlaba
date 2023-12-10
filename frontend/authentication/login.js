function submitLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Basic validation
  if (email === "" || password === "") {
    alert("Both email and password are required");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  // please update the url as your live server url
  fetch("https://49kvttxyfi.execute-api.us-east-2.amazonaws.com/dev/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem("account", "logged");
        document.getElementById("loginForm").reset();
        window.location.href = "../../index.html";
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    })
    .catch((error) => console.error(error));
}
