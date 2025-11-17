// Mensagem de saudação automática
window.onload = function () {
    let hora = new Date().getHours();
    let msg = "";

    if (hora < 12) msg = "Bom dia!";
    else if (hora < 18) msg = "Boa tarde!";
    else msg = "Boa noite!";

    console.log("Bem-vindo a PetShop - " + msg);
};
