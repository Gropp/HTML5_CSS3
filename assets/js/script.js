// script para trocar algumas tags no html

// captura o botao de id signin
var btnSignin = document.querySelector("#signin");
// captura o botao de id signup
var btnSignup = document.querySelector("#signup");
// captura a tag body
var body = document.querySelector("body");

// evento de escuta no objeto botao signin para click
btnSignin.addEventListener("click", function(){
    body.className = "sign-in-js";
});

// evento de escuta no objeto botao signup para click
btnSignup.addEventListener("click", function(){
    body.className = "sign-up-js";
});