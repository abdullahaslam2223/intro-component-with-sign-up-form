// Getting all input fields and calling functions for each value
var fname = document.getElementById("fname");
fname.addEventListener("focusout", function() { validateForm(fname, "First Name cannot be empty","fnameIcon","fnamePara")});
fname.addEventListener("focusout", function() {remove_error_icon_para("fnameIcon", "fnamePara", fname)});

var lname = document.getElementById("lname");
lname.addEventListener("focusout", function() { validateForm(lname, "Last Name cannot be empty","lnameIcon","lnamePara")});
lname.addEventListener("focusout", function() {remove_error_icon_para("lnameIcon", "lnamePara", lname)});

var email = document.getElementById("email");
email.addEventListener("focusout", function() { validateForm(email, "Email cannot be empty", "emailIcon","emailPara")});
email.addEventListener("focusout", function() {remove_error_icon_para("emailIcon", "emailPara", email)});

var password = document.getElementById("password");
password.addEventListener("focusout", function() { validateForm(password, "Password cannot be empty", "passwordIcon", "passwordPara")});
password.addEventListener("focusout", function() {remove_error_icon_para("passwordIcon", "passwordPara", password)});

// Function to add error icon and error paragraph after input field
function error_icon_para(inputField, para, iID, pID) {
    // For error icon
    let image = document.createElement("img");
    image.setAttribute("src", "images/icon-error.svg");
    image.setAttribute("width", "22px");
    image.setAttribute("alt", "error icon");
    image.setAttribute("class", "icon-error");
    image.setAttribute("id", iID);
    inputField.parentNode.insertBefore(image, inputField.nextSibling);

    // For error para
    const paragraph = document.createElement("p");
    const node = document.createTextNode(para);
    paragraph.appendChild(node);
    paragraph.setAttribute("class", "error-para");
    paragraph.setAttribute("id", pID);
    image.parentNode.insertBefore(paragraph, image.nextSibling);
}

// Function to remove error icon and paragraph if there is some value in the input field
function remove_error_icon_para(iconID, paraID, inputField) {
    const icon = document.getElementById(iconID);
    const para = document.getElementById(paraID);
    console.log(icon);
    if(inputField.value !== "") {
        icon.remove();
        para.remove();
    }
}

function validateForm(inputField, para, iID, pID) {
    const icon = document.getElementById(iID);
    if(inputField.value == "" && icon == null) {
        error_icon_para(inputField, para, iID, pID);
    }
    console.log(icon);
}
