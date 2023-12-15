function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

const accountStatus = localStorage.getItem("account");
const loginButtonsContainer = document.getElementById("loginButtons");
const sabrinaLink = document.getElementById("sabrinaLink");

if (accountStatus === "logged") {
  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logout";
  logoutButton.className = "loginButton";
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("account");
    window.location.href =
      "https://dev-rahaman.github.io/Javlaba/frontend/authentication/login.html";
  });
  loginButtonsContainer.appendChild(logoutButton);

  // Allow access to the Sabrina page
  sabrinaLink.href = "../../frontend/members/sabrina.html";
} else {
  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  loginButton.className = "loginButton";
  loginButton.addEventListener("click", function () {
    window.location.href =
      "https://dev-rahaman.github.io/Javlaba/frontend/authentication/login.html";
  });
  loginButtonsContainer.appendChild(loginButton);

  // Prevent access to the Sabrina page for non-logged-in users
  sabrinaLink.addEventListener("click", function (event) {
    event.preventDefault();
    alert("You need to log in to access this page.");
    window.location.href =
      "https://dev-rahaman.github.io/Javlaba/frontend/authentication/login.html";
  });
}
