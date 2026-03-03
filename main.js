const mobileBtn = document.getElementById("mobileBtn");
const navMenu = document.getElementById("navMenu");

// Auto adjust menu for PC / Mobile
function updateMenuDisplay() {
  if (window.innerWidth > 768) {
    navMenu.style.display = "flex";   // PC: always show
  } else {
    navMenu.style.display = "none";   // Mobile: hide
  }
}

// Toggle menu on mobile
mobileBtn.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});
function bookNow() {
        // You can put any JavaScript logic here
        alert("Redirecting to MakeMyTrip!");
        // Redirect to MakeMyTrip
        window.location.href = "https://www.makemytrip.com/";
    }  


    function flight () {
        // You can put any JavaScript logic here
        alert("Redirecting to MakeMyTrip!");
        // Redirect to MakeMyTrip
        window.location.href = "https://www.makemytrip.com/";
    }
    function hotel () {
        // You can put any JavaScript logic here
        alert("Redirecting to MakeMyTrip!");
        // Redirect to MakeMyTrip
        window.location.href = "https://www.makemytrip.com/";
    }

    function packages () {
        // You can put any JavaScript logic here
        alert("Redirecting to MakeMyTrip!");
        // Redirect to MakeMyTrip
        window.location.href = "https://www.makemytrip.com/";
    }

    function info () {
        // You can put any JavaScript logic here
        alert("Redirecting to MakeMyTrip!");
        // Redirect to MakeMyTrip
        window.location.href = "https://www.makemytrip.com/";
    }




// Run on load & on resize
updateMenuDisplay();
window.addEventListener("resize", updateMenuDisplay);

function sendEmail() {
    // Get values from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Default recipient email
    const toEmail = "sakthivelsp04@gamil.com"; // Replace with your email

    

    // Build mailto link
    const subject = encodeURIComponent("Contact Form Submission from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    // Open default mail client
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
}

// Toggle mobile menu
document.getElementById("mobileBtn").addEventListener("click", function () {
    document.getElementById("navMenu").classList.toggle("show");
});



// Load Login Page inside content box
function loadLogin() {
    fetch("login.html")
    .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
    })
    .then(data => {
        document.getElementById("content").innerHTML = data;
        window.scrollTo(0, 0); // auto scroll to top when login loads
    })
    .catch(err => {
        document.getElementById("content").innerHTML =
            "<h3 style='color:red;'>Could not load login page</h3>";
    });
  }
