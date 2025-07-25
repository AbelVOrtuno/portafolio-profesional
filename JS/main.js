const splash = document.getElementById("splash");
const content = document.getElementById("content");
const volver = document.getElementById("volver");

// Click al abrir portada //

splash.addEventListener("click",()=> {
    splash.classList.add("cerrar");

    setTimeout(()=> {
        content.classList.add("abrir");
    },1000);
});

// Cuando haces click en el boton //

volver.addEventListener("click",()=> {
    content.classList.remove("abrir");

    setTimeout(() => {
        splash.classList.remove("cerrar");
    },500);
});