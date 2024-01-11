// const TypedTwo = new Typed(".multi-text-name", {
//     strings: ["Gersi", ""],
//     typeSpeed: 100, // speed at which characters are typed.
//     backSpeed: 100, // speed at which characters are removed.
//     backDelay: 1000,
//     loop: true,
//     });

const typed = new Typed(".multi-text", {
  strings: ["my resume", "click below"],
  typeSpeed: 100, // speed at which characters are typed.
  backSpeed: 100, // speed at which characters are removed.
  backDelay: 1000,
  loop: true,
});

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".about-me", { origin: "top" });
ScrollReveal().reveal(".get-in-touch", { origin: "right" });

ScrollReveal().reveal(".card-left", { origin: "right" });
ScrollReveal().reveal(".card-right", { origin: "left" });

// EMAIL

function SendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if (name == "" || email == "" || phone == "" || message == "") {
    alert(
      "Please fill in all the fields (Name, Email, Phone, and Message) before submitting the form."
    );
    return false;
  } else {
    const params = {
      from_name: name,
      email_id: email,
      phone_nr: phone,
      message: message,
    };

    emailjs
      .send("service_63xl6fo", "template_i5479ak", params)
      .then(function (res) {
        alert("Email Sent " + res.status);
      });
  }
}


// Clear Contact Me on send btn click

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  const firstNameInput = document.getElementById("name");
  firstNameInput.value = "";
  const firstEmailInput = document.getElementById("email");
  firstEmailInput.value = "";
  const firstPhoneInput = document.getElementById("phone");
  firstPhoneInput.value = "";
  const firstMessageInput = document.getElementById("message");
  firstMessageInput.value = "";
});
