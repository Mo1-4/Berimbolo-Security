document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
        signInButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
            document.title = "Sign-Up"
        });
        
        signUpButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
            document.title = "Sign-In"
        });

    }
});

let passwords = document.querySelectorAll("#password")
passwords.forEach((pass) =>{
    pass.addEventListener("mouseover", () =>{
    pass.type = "text"
    })
pass.addEventListener("mouseout", () =>{
    pass.type = "password"
    })
})

