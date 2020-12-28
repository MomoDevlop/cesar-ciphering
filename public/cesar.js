// Reppresente Alphabet  clair
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// represente l'alphabet chiffré
let cyperAlphabet = ''
let isValid = true

/***
 *  Fonction de chiffrement 
 * @param {String} message
 * @param {Number} key
 * @return {Object}
 * 
 * */

function cipher(message, key) {
    let result = ''
    message = message.trim()
    if (key >= 1 && key <= 25) {
        // Creation de l'alphabet chiffré en fonction de la clé 
        cyperAlphabet = alphabet.slice(-key) + alphabet.slice(0, -key)

        // Parccourir le message et faire la correspondance entre  chaque lettre du message clair  avec la valeur correspondante dans l'alphabet chiffré
        for (i = 0; i < message.length; i++) {
            come:

            for (j = 0; j < alphabet.length; j++) {


                if (message[i] === alphabet[j] || message[i] === alphabet[j].toUpperCase()) {

                    // Vérifier si la lettre est majuscule et affecte une lettre majuscule au cas écheant
                    if (message[i] === message[i].toUpperCase()) {
                        console.log(message[i].toUpperCase())
                        result += cyperAlphabet[j].toUpperCase()
                    } else {
                        result += cyperAlphabet[j]
                    }

                }
                // Verifier si la lettre correspond à un espace, si oui retourné un espace et sortir de la boucle
                if (message[i] === ' ') {
                    result += ' '
                    break come
                }
            }

        }


        return { "message": result, "status": true }

    } else {
        return { "message": result, "status": false }
    }

}


/**
 *  Fonction de déchiffrement
 * @param {String} message
 * @param {Number} key
 * @return {Object}
 * 
 **/
function decipher(message, key) {
    let result = ''
    message = message.trim();
    if (key >= 1 && key <= 25) {
        // Creation de l'alphabet chiffré en fonction de la clé 
        cyperAlphabet = alphabet.slice(-key) + alphabet.slice(0, -key)

        // Parccourir le message et faire la correspondance entre  chaque lettre du message clair  avec la valeur correspondante dans l'alphabet chiffré
        for (i = 0; i < message.length; i++) {
            come:

            for (j = 0; j < alphabet.length; j++) {


                if (message[i] === cyperAlphabet[j] || message[i] === cyperAlphabet[j].toUpperCase()) {

                    // Vérifier si la lettre est majuscule et affecte une lettre majuscule au cas écheant
                    if (message[i] === message[i].toUpperCase()) {
                        console.log(message[i].toUpperCase())
                        result += alphabet[j].toUpperCase()
                    } else {
                        result += alphabet[j]
                    }

                }
                // Verifier si la lettre correspond à un espace, si oui retourné un espace et sortir de la boucle
                if (message[i] === ' ') {
                    result += ' '
                    break come
                }
            }

        }
        return { "message": result, "status": true }

    } else {
        return { "message": '', "status": false }
    }

}

/**
 *  Rénitialiser le formulaire
 * @return {void}
 * 
 **/
function resetForm() {
    document.forms[0].reset()
    document.getElementById('cryptedMessageId').innerText = ''
    document.getElementById('copyButton').innerHTML = ''
    resetError()
}

/**
 *  Rénitialiser les erreurs
 * @return {void}
 * 
 **/
function resetError() {
    document.getElementById('errorId').innerHTML = ''
}

/**
 *  Affichage du message chiffré ou déchiffré à l'utilisateur
 * @param {tring} result
 * @return {void}
 * 
 **/
function bindElements(result) {
    document.getElementById('cryptedMessageId').value = result
    document.getElementById('copyButton').innerHTML = '<button type="button" class="btn btn-info mt-2" id="cipherButton" onclick="copyText()">Cliquer pour copier</button>'
}

/**
 * Fonction de test des valeurs entrées par l'utilisateur, affichage d'une alerte d'erreur ou de succès
 * @param {boolean} flag
 * @return {void}
 * 
 **/
function testInputs(flag) {
    if (!flag) {
        const message = `<div class="alert alert-danger text-center" role="alert"> 
                            La clé doit être comprise entre 1 et 25
                         </div>`
        document.getElementById('errorId').innerHTML = message


    } else {
        const message = `<div class="alert alert-success text-center" role="alert"> 
                            Operation réussie
                         </div>`
        document.getElementById('errorId').innerHTML = message
    }
}

/**
 *  Fonction de copie du texte chiffré
 * @param {tring} result
 * @return {void}
 * 
 **/
function copyText() {
    const elementToCopy = document.getElementById("cryptedMessageId")
    navigator.clipboard.writeText(elementToCopy.value);
}

// Executer la fonction de chiffrement à chaque clic sur le bouton chiffer
document.getElementById("cipherButton").addEventListener('click', (e) => {
    e.preventDefault()
    const result = cipher(document.getElementById('messageId').value, document.getElementById('key').value)
    bindElements(result.message)
    testInputs(result.status)
})

// Executer la fonction de dechiffrement à chaque clic sur le bouton déchiffrer
document.getElementById("decipherButton").addEventListener('click', (e) => {
    e.preventDefault()
    const result = decipher(document.getElementById('messageId').value, document.getElementById('key').value)
    bindElements(result.message)
    testInputs(result.status)
})





