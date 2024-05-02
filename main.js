const email_icon = document.querySelector(".email-icon");
const contact_email_btn = document.querySelector("#contact-email");
const btn_resume = document.querySelector(".btn-resume");

// 1) SNACKBAR NOTIFCATION COPY TO CLIPBOARD
function showSnackBar(){
    var notif = document.querySelector("#snackbar");
    notif.className="show";
    setTimeout(()=>{
        notif.className = notif.className.replace("show", "");}, 3000);
}

function copyToClipboard(icon){
    var dev_email = "ncw1@ualberta.ca"
    if (navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(dev_email)
        // Sucessfully copies to clipboard.
        .then(function(){
            showSnackBar();
            console.log("Email copied to clipbaord.");
        })
        // Failed to copy.
        .catch(function(error){
            console.error("Failed to copy email to clipboard.");
        })
    }
    showSnackBar();
}   

email_icon.addEventListener("click", () =>{
    copyToClipboard(this);
})

contact_email_btn.addEventListener("click", () =>{
    copyToClipboard(this);
})

// 2) OPEN RESUME ON RESUME BTN CLICK
btn_resume.addEventListener("click", () => {
    window.open("./assets/resume_nathan_wong.pdf"); // Opens my resume.
})