
function copyToClipboard(idTextArea) {
    var textArea = document.getElementById("form:" + idTextArea);
    textArea.select();
    document.execCommand('copy');
    // return false;
}

/* Effacer la dernière question et la dernière réponse */
function toutEffacer() {
    document.getElementById("form:question").value = "";
    document.getElementById("form:reponse").value = "";
}