let form = document.querySelector("#loginForm");

//chargement de l'email
form.email.addEventListener("change", function()
{
    validEmail(this);
});
//chargement du password
form.password.addEventListener("change", function()
{
    validPassword(this);
});

//soumission du formulaire
form.addEventListener("submit", function(e)
{
    e.preventDefault();
    if(validEmail(form.email) && validPassword(form.password))
    {
        form.submit();
    }
});

//**********VALIDATION E-MAIL************
const validEmail = function(inputEmail)
{
    //creation de variable pour la validation email
    let emailRegExp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-z]+[.]{1}[a-z]{1,3}$");
    let numRegExp = new RegExp("[0-9]+");

    //recuperation de small
    let small = inputEmail.nextElementSibling;

    //on test l'expresion e-mail
    if(emailRegExp.test(inputEmail.value))
    {
        small.innerHTML = "Adresse valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    }
    else
    {
        small.innerHTML = "Adresse non valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
    //on test l'expression Numero
    if(numRegExp.test(inputEmail.value))
    {
        small.innerHTML = "Adresse valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
    }
}

//**********VALIDATION PASSWORD************
const validPassword = function(inputPassword)
{
    let msg;
    let valid = false;
    //Au moins: 8 caractères 1 maj, 1 min, 1 chiffre
    if(inputPassword.value.length < 8)
    {
        msg = "au moins 8 caractères";
    }
    else if(!/[A-Z]/.test(inputPassword.value))
    {
        msg = "faible ! au moins 1 majuscule";
    }
    else if(!/[a-z]/.test(inputPassword.value))
    {
        msg = "au moins 1 minuscule !";
    }
    else if(!/[0-9]/.test(inputPassword.value))
    {
        msg = "un peu faible !";
    }
    else if(!/[&#|@%ù$£¤µ*§!?€çéè]/.test(inputPassword.value))
    {
        msg = "un peu faible !";
    }
    
    else
    {
        valid = true;
        msg = "fort ! mot de pass valide";
    }

        //affichage
         //recuperation de small
    let small = inputPassword.nextElementSibling;

    //on test l'expresion password
    if(valid)
    {
        small.innerHTML = msg;
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    }
    else
    {
        small.innerHTML = msg;
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
}