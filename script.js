/// Bouton Secret

function secret_button() {
    const secretButton = document.querySelector('.secret__button');
    const secretText = "Est le personnage masculin d'overwatch le plus joué par des femmes.";

    secretButton.textContent = secretText;
}

/// Alertes quand le bouton les champs ne sont correctements remplies

function VerifInput() {
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");

    const textarea = document.getElementById("message");
    const message = textarea.value.trim();
    const minLength = 50;

    if (nameField.value.trim().length < 3) {
        alert("Votre prénom et nom doivent contenir au moins 3 lettres.");
        return;
    }

    if (!nameField.value || !emailField.value) {
        alert("Tous les champs doivent être remplis.");
        return;
    }

    if (message.length < minLength) {
        alert("Vous devez écrire au moins 50 caractères dans votre message.");
        return;
    }
        alert("Message envoyé avec succès !");
    };
    
/// A suivre..

