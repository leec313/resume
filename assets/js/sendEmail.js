function sendMail(contactForm) {
    emailjs.send("service_0mo0ubq", "template_kfcsgtq", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Success, your message has been sent to Lee!")
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}