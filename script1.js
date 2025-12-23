document.getElementById("startBtn").addEventListener("click", function() {
    let password;
    while (true) {
        password = prompt("Entrez un mot de passe (ou tapez 'exit' pour quitter):");
        if (password === null || password.toLowerCase() === "exit") break;

        let force;
        if (password.length < 8) {
            force = "faible";
        } else if (password.length <= 12) {
            force = "moyen";
        } else {
            force = "fort";
        }

        alert(`La force de votre mot de passe est : ${force}`);
    }
});
