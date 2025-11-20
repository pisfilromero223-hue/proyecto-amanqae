const modal = document.getElementById("modalTaller");
const modalImg = document.getElementById("modalImg");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalBtn = document.getElementById("modalBtn");
const modalClose = document.querySelector(".modal-close");

const dataTalleres = {
    1: {
        titulo: "PINTURA VIRAL Y MOMAZOS",
        descripcion: "En este taller, fusionaremos el arte viral de los memes y cultura popular con la técnica tradicional de la pintura. Aprenderás composición, manejo de color y expresión artística, todo mientras creas tu propio meme. ¡Saca al artista que llevas dentro! No se necesita experiencia.<br><br><b>Tallerista:</b> Leonardo Serquen",
        btn: "https://docs.google.com/forms/d/12NOefkSl2th-l6DVEA8h_7V2JrMjGkRy6wD8ZdOce48/viewform?hl=es&hl=es&edit_requested=true",
        img: "images/home/taller1.jpg"
    },
    2: {
        titulo: "TALLER BRATZASO",
        descripcion: "Aprenderás a diseñar tus propias figurines inspiradas en el universo Bratz, utilizando materiales artísticos, tela  y elementos decorativos. El taller aborda nociones básicas de proporción corporal y composición visual. Cada participante desarrollará una figurina original, con libertad para definir su vestuario, colores, accesorios y actitud.<br><br><b>Tallerista:</b> Trilce Peralta  ",
        btn: "https://docs.google.com/forms/d/e/1FAIpQLSc-9Pr7PTVOH00JHXRavUVJsBJUR800cI1P0HJigaQ4gOrgDA/viewform",
        img: "images/home/taller2.jpg"
    },
    3: {
        titulo: "SEPARADORES BOTÁNICOS",
        descripcion: "Taller de separadores de libro con flores prensadas aprende a crear tus propios separadores únicos y naturales utilizando flores secas y técnica de prensado artesanal. En este taller descubrirás cómo preservar la belleza de las flores y combinarlas con diseño para crear piezas delicadas. Inscripciones al número: 970176165 , Costo de taller: 100 soles, Incluye todos los materiales y te llevaras tu propia prensa y de un rico brunch por Amanqae Café <br><br><b>Tallerista:</b> Yeny Gutierrez",
        btn: "https://docs.google.com/forms/d/e/1FAIpQLSek-Cnj1Hg1limWv09eZuf0xroQnjqGnJ7B7aeNjQ-4_w9TMw/viewform",
        img: "images/home/taller3.jpg"
    },
    4: {
        titulo: "PERÚ EN AZUL PRUSIA",
        descripcion: "En este taller los participantes aprenderán a combinar las soluciones químicas, emulsionar el sensibilizador sobre papel y exponer imágenes utilizando utilizando acetatos fotograficos. El resultado será una serie de postales de algunos lugares de Lima y Perù en el característico azul Prusia. No necesitas experiencia previa, solo muchas ganas de experimentar y dejar volar tu creatividad Inscripción al  997604647 . Costo del taller 50 soles.<br><br><b>Tallerista:</b> Katherine De Lama",
        btn: "https://docs.google.com/forms/d/e/1FAIpQLSfwpZA9upduGmYvw6S98_koEDN7p7gYdKPs9RWNqNcBXklm0Q/viewform",
        img: "images/home/taller4.jpg"
    }
};


document.querySelectorAll(".carta-images-container").forEach(card => {
    card.addEventListener("click", (e) => {
        e.preventDefault(); //  evita que suba al inicio

        const id = card.dataset.taller;
        const info = dataTalleres[id];

        modalImg.src = info.img;
        modalTitulo.innerHTML = info.titulo;
        modalDescripcion.innerHTML = info.descripcion;
        modalBtn.href = info.btn;

        // quitar clase si existe
        modal.classList.remove("fadeOut");
        
        // Mostrar modal
        modal.style.display = "flex";

        //  efecto fade-in
        setTimeout(() => modal.classList.add("fadeIn"), 10);
    });
});

// --- CERRAR MODAL ---
modalClose.addEventListener("click", () => {
    cerrarModalAnimado();
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        cerrarModalAnimado();
    }
});

// --- ANIMACIÓN DE CIERRE ---
function cerrarModalAnimado() {
    modal.classList.remove("fadeIn");
    modal.classList.add("fadeOut");

    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // coincide con la animación CSS
}