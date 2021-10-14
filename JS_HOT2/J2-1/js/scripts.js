const ADMIN = "admin@example.com";
const PASSWORD = "password";
const EMFORMAT =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PSFORMAT =  /^[A-Za-z]\w{7,14}$/;

//Create an alias for getElementById
const $ = (id) => document.getElementById(id);

let processEntries = () =>
{
    let email = parseFloat($("theEmail").value);
    let password = parseFloat($("thePassword").value);
    let isValid = true

    //Validate Email Inputted
    if(email === "")
    {
        $("theEmail").nextElementSibling.firstChild.nodeValue = "You Seem To Have Forgotten Your Username";
        isValid = false;
    }
    else if (email !== EMFORMAT)
    {
        $("theEmail").nextElementSibling.firstChild.nodeValue = "Email Doesn't Seem To Be Right. Please Try Again";
        isValid = false;
    }

     //Validate Email Inputted
     if(password === "")
     {
         $("thePassword").nextElementSibling.firstChild.nodeValue = "You Seem To Have Forgotten Your Password";
         isValid = false;
     }
     else if (password !== PSFORMAT)
     {
         $("thePassword").nextElementSibling.firstChild.nodeValue = "Password Doesn't Seem To Be Right. Please Try Again";
         isValid = false;
     }
     if (email === ADMIN)
     {
         $("theEmail").nextElementSibling.firstChild.nodeValue = "text-success" + "Welcome Back Admin"
     }
     else if (password === PASSWORD)
     {
         $("thePassword").nextElementSibling.firstChild.nodeValue = "text-success" + "Welcome Back Admin"
     }

     //Check if isValid flag is true or not
     if(isValid)
     {
         return;
     }
};
window.onload = () =>
{
    $("submit").onclick = processEntries;
}
