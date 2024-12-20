/// Bouton Secret

function secret_button() {
    const secretButton = document.querySelector('.secret__button');
    const secretText = "Vitale est le personnage masculin d'overwatch le plus joué par des femmes.";

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

/// image en grand

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    const overlay = document.createElement("div");
    const overlayImage = document.createElement("img");
    const closeOverlay = document.createElement("span");

    Object.assign(overlay.style, {
        display: "none",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    });

    Object.assign(overlayImage.style, {
        maxWidth: "500px",
        maxHeight: "350px",
        borderRadius: "10px",
        boxShadow: "0 0 15px white"
    });

    Object.assign(closeOverlay.style, {
        position: "absolute",
        top: "20px",
        right: "30px",
        color: "white",
        fontSize: "40px",
        fontWeight: "bold",
        cursor: "pointer",
        userSelect: "none"
    });

    closeOverlay.textContent = "×";

    overlay.appendChild(overlayImage);
    overlay.appendChild(closeOverlay);
    document.body.appendChild(overlay);

    images.forEach(image => {
        image.addEventListener("click", () => {
            overlayImage.src = image.src;
            overlay.style.display = "flex";
        });
    });

    closeOverlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        }
    });
});

/// naissance de Vitale

document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector(".secret__paragraph");
    const targetDate = new Date("2033-07-12");
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    paragraph.innerHTML = 
    "Dans l'univers futuriste d'Overwatch, le personnage mythique Vitale sera né dans " + daysDifference + " jours. Préparez-vous à cet événement légendaire le 12 juillet 2033 !";
});