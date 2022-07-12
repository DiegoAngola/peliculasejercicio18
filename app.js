let contenido = document.querySelector("#cone");
let mayor = document.querySelector("#mayor").setAttribute("onclick", "mayorEdad()");
let menor = document.querySelector("#menor").setAttribute("onclick", "menorEdad()");

function mayorEdad() {
    let template;
    let formulario = document.querySelector("#formulario");
    
    // ``
    template = `<form>`;
    template += `<select id="select" onchange="seleccionSelect()">`;


    template += `<option value=""> Seleccione una opcion... </option>`
    template += `<option value="Terror">Terror</option>`
    template += `<option value="Romance">Romance</option>`
    template += `<option value="Sci-Fi">Sci-Fi</option>`
    template += `<option value="Fantasia">Fantasia</option>`
    template += `<option value="Drama">Drama</option>`
    template += `<option value="Comedia">Comedia</option>`

    template += `</select>`

    template += `<input type="button" value="Limpiar" onclick="borroSelect()" id="borrarBtn">`

    template += `</form>`

    formulario.innerHTML = template;

}


function menorEdad() {

    let template;
    let formulario = document.querySelector("#formulario");
    // ``
    template = `<form>`;
    template += `<select id="select" onchange="seleccionSelect()">`;


    template += `<option value=""> Seleccione una opcion... </option>`
    template += `<option value="Sci-Fi">Sci-Fi</option>`
    template += `<option value="Fantasia">Fantasia</option>`
    template += `<option value="Comedia">Comedia</option>`

    template += `</select>`

    template += `<input type="button" value="Limpiar" onclick="borroSelect()" id="borrarBtn">`

    template += `</form>`

    formulario.innerHTML = template;

}




function borroSelect() {
    document.querySelector("#select").selectedIndex = 0;
    contenido.innerHTML = "";
}

function seleccionSelect() {
    let dato = document.querySelector("#select").value;
    console.log("select muestra: ", dato);
    switch (dato) {
        case "Terror":

            contenido.innerHTML = "<div id='contenido'>" + "<div class='peli'>" + "<h3>Umma</h3>" + "<img src='https://pics.filmaffinity.com/Umma-553762298-large.jpg'>" + "<a target='_blank' href='https://youtu.be/ZtrVTWK486k'>TRAILER</a>" + "</div>"  + "<div class='peli'>" + "<h3>El Exorcismo de Dios</h3>" + "<img src='https://static.cinepolis.com/resources/mx/movies/posters/414x603/38620-186816-20220202064944.jpg'>" + "<a target='_blank' href='https://youtu.be/JAMdGGDxkIQ'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>Paranormal Activity: Next of Kin</h3>" + "<img src='https://pics.filmaffinity.com/Paranormal_Activity_Allegados-935024364-large.jpg'>" + "<a target='_blank' href='https://youtu.be/JrKYck01fFI'>TRAILER</a>" + "</div>" + "</div>";
            break;


        case "Romance":

            contenido.innerHTML = "<div id='contenido'>" + "<div class='peli'>" + "<h3>After. Almas perdidas.</h3>" + "<img src='https://pics.filmaffinity.com/After_Almas_perdidas-506490529-large.jpg'>"+ "<a target='_blank' href='https://youtu.be/speZejQwBQo'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>A través de mi ventana</h3>" + "<img src='https://img.wattpad.com/cover/68514659-352-k903795.jpg'>" + "<a target='_blank' href='https://youtu.be/ibjAgqsgQzc'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>A dos metros de ti</h3>" + "<img src='https://pics.filmaffinity.com/A_dos_metros_de_ti-293759292-large.jpg'>" + "<a target='_blank' href='https://youtu.be/l-s3xpv0Q0U'>TRAILER</a>" + "</div>" + "</div>";

            break;
        case "Sci-Fi":

            contenido.innerHTML = "<div id='contenido'>" + "<div class='peli'>" + "<h3>Spider-Man: Sin camino a casa</h3>" + "<img src='https://mx.web.img3.acsta.net/pictures/21/11/25/18/23/3142881.jpg'>" + "<a target='_blank' href='https://youtu.be/r6t0czGbuGI'>TRAILER</a>" + "</div>" + "<div class='peli'>" +"<h3>Eternals</h3>" + "<img src='https://pics.filmaffinity.com/Eternals-719293850-large.jpg'>" + "<a target='_blank' href='https://youtu.be/v1EkoQV4g5c'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>The Adam Project</h3>" + "<img src='https://pics.filmaffinity.com/El_proyecto_Adam-982692706-large.jpg'>" + "<a target='_blank' href='https://youtu.be/AxQXlXpiHBg'>TRAILER</a>" + "</div>" + "</div>";

            break;
        case "Fantasia":

            contenido.innerHTML = "<div id='contenido'>" + "<div class='peli'>" +"<h3>Encanto</h3>" + "<img src='https://lumiere-a.akamaihd.net/v1/images/encanto_ka_las_pay1_92ad7410.jpeg?region=0%2C0%2C1080%2C1350'>" + "<a target='_blank' href='https://youtu.be/E4dCY_DvT-4'>TRAILER</a>" +"</div>" + "<div class='peli'>" +"<h3>Piratas del caribe: la venganza de Salazar</h3>" + "<img src='https://es.web.img3.acsta.net/pictures/17/03/27/17/40/153012.jpg'>" +  "<a target='_blank' href='https://youtu.be/azjsS0wxTA8'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>Avatar</h3>" + "<img src='https://pics.filmaffinity.com/Avatar-208925608-large.jpg'>" + "<a target='_blank' href='https://youtu.be/5PSNL1qE6VY'>TRAILER</a>" + "</div>" + "</div>";

            break;
        case "Drama":

            contenido.innerHTML = "<div id='contenido'>" + "<div class='peli'>" + "<h3>The Fallout: La vida después</h3>" + "<img src='https://pics.filmaffinity.com/The_Fallout-843415930-mmed.jpg'>" + "<a target='_blank' href='https://youtu.be/HMa_Oxnkz9M'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>Talentos ocultos</h3>" + "<img src='https://mx.web.img3.acsta.net/pictures/17/12/27/20/54/1633606.jpg'>" +  "<a target='_blank' href='https://youtu.be/xFALsPCeJvE'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>Yo antes de ti</h3>" + "<img src='https://m.media-amazon.com/images/I/71xzf5cTp6L._SL1500_.jpg'>" + "<a target='_blank' href='https://youtu.be/FRrc2X4Uzm4'>TRAILER</a>" + "</div>" + "</div>";

            break;
        case "Comedia":

            contenido.innerHTML = "<div id='contenido'>" + "<div class='peli'>" + "<h3>Los Minions</h3>" + "<img src='https://pics.filmaffinity.com/Minions_El_origen_de_Gru-956011343-large.jpg'>" + "<a target='_blank' href='https://youtu.be/eisKxhjBnZ0'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>Super Cool</h3>" + "<img src='https://pics.filmaffinity.com/Supersalidos-543132496-mmed.jpg'>" + "<a target='_blank' href='https://youtu.be/au2Zq8D9RaY'>TRAILER</a>" + "</div>" + "<div class='peli'>" + "<h3>Un espía y medio</h3>" + "<img src='https://es.web.img2.acsta.net/pictures/16/05/31/13/33/072749.jpg'>" + "<a target='_blank' href='https://youtu.be/eQnbwxzCzQ8'>TRAILER</a>" + "</div>" + "</div>";

            break;
        default:
            break;
    }

}