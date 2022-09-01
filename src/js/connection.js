document.addEventListener('DOMContentLoaded', indexLoad, false);
document.getElementById("btn_search").addEventListener("click", busquedaTexto);
document.getElementById("btn_random").addEventListener("click", busquedaRandom);
    

let btnRandom = document.getElementById("btn_random");
btnRandom.addEventListener('click', busquedaRandom);



function indexLoad() {
    console.log("Loaded")

    const tresRecetas = document.getElementById("carrusel");
    const texto = "b";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${texto}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {

            console.log(data.meals);
            //data.meals.forEach(element => {
            for (let i = 0; i < 3; i++) {
                const element = data.meals[i];

                const receta = {
                    nombre: element.strMeal,
                    ingredientes: [element.strIngredient1,
                    element.strIngredient2,
                    element.strIngredient3,
                    element.strIngredient4,
                    element.strIngredient5,
                    element.strIngredient6,
                    element.strIngredient7,
                    element.strIngredient8,
                    element.strIngredient9,
                    element.strIngredient10,
                    element.strIngredient11,
                    element.strIngredient12,
                    element.strIngredient13,
                    element.strIngredient14,
                    element.strIngredient15,
                    element.strIngredient16,
                    element.strIngredient17,
                    element.strIngredient18,
                    element.strIngredient19,
                    element.strIngredient20],

                    cantidades: [element.strMeasure1,
                    element.strMeasure2,
                    element.strMeasure3,
                    element.strMeasure4,
                    element.strMeasure5,
                    element.strMeasure6,
                    element.strMeasure7,
                    element.strMeasure8,
                    element.strMeasure9,
                    element.strMeasure10,
                    element.strMeasure11,
                    element.strMeasure12,
                    element.strMeasure13,
                    element.strMeasure14,
                    element.strMeasure15,
                    element.strMeasure16,
                    element.strMeasure17,
                    element.strMeasure18,
                    element.strMeasure19,
                    element.strMeasure20,],

                    preparacion: element.strInstructions,
                    imagen: element.strMealThumb,
                    categoria: element.strCategory
                }

              //  createReceta(receta, tresRecetas);
            }
        }
    });
}



function createReceta(receta, myDiv) {

    const div1 = document.createElement("div");
    div1.classList.add('card')
    const div2 = document.createElement("div");
    div1.classList.add('card-body')

    const img1 = document.createElement("img");
    img1.src = receta.imagen;
    img1.classList.add('img-fluid');

    const h3 = document.createElement('h3');
    h3.innerText = receta.nombre;

    const boton = document.createElement('button');
    boton.innerText = "Ver más";
    boton.classList.add('btn');
    boton.classList.add('btn-primary');

    div2.appendChild(img1);
    div2.appendChild(h3);
    div2.appendChild(boton);
    div1.appendChild(div2);

    myDiv.appendChild(div1);
}

function busquedaRandom() {
    let searchInput = document.getElementById("search-input");
    // Obtenemos la sección donde se mostrarán los resultados
    let carrusel = document.getElementById("carrusel");

    //Limpiamos la pantalla
    let errores = document.getElementById("mostrarMensajes");
    errores.innerHTML ='';

    // Lookup a single random meal
    fetch('https://www.themealdb.com/api/json/v1/1/random.php') // Para buscar una receta aleatoria
        .then(response =>
            response.json()
        ).then(data => {
            let resultados = "";
            if (data.meals) { // Existe ese elemento? 
                //console.log(data.meals);
                resultados += `
                        <a href="#verReceta" data-toggle="modal" data-target="#verReceta" id="recetaOpenModal">
                            <div class="card h-100 card-body" id="${data.meals[0].idMeal}">
                                <div>
                                    <img class="card-img img-fluid" src="${data.meals[0].strMealThumb}" alt="food">
                                    <h3>${data.meals[0].strMeal}</h3>
                                   <!-- <button class="btn btn-lg btn-primary" id="${data.meals[0].idMeal}">Ver más</button> -->
                                </div>
                            </div>
                        </a>    
                    `;
            }
            carrusel.innerHTML = resultados;
            searchInput.value = ''; // limpiamos el input text
        }).catch((error) => `failed.${error}`);;
}

/**
 * Función que realizara la busqueda de recetas leyendo el valor del input text
 */
function busquedaTexto()  {
    // Obtendremos el valor del texto del input para buscar una receta por ingrediente principal
    let searchInput = document.getElementById("search-input");
    let ingrediente = searchInput.value.trim();
    // Obtenemos la sección donde se mostrarán los resultados
    let carrusel = document.getElementById("carrusel");
    let errores = document.getElementById("mostrarMensajes");

    //Limpiamos la pantalla
    carrusel.innerHTML = '';
    errores.innerHTML ='';

    //Validamos que no se mande un string vacio para buscar
    if (ingrediente === "") {
        errores.innerHTML =`<h3 class="errores">Debe ingresar un ingrediente</h3>`;
        //alert("Debe ingresar un ingrediente");
    } else {
        //fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+searchInput) // Nota: si se quiere buscar por por área descomentar esta linea
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingrediente) // Para buscar por ingrediente principal
            .then(response =>
                response.json()
            ).then(data => {
                let resultados = "";
                if (data.meals) {
                    data.meals.forEach(element => {
                        //console.log(element);
                        resultados += `
                            <a href="#verReceta" data-toggle="modal" data-target="#verReceta" id="recetaOpenModal">
                                <div class="card card-body" id="${element.idMeal}">
                                    <div>
                                        <img class="card-img img-fluid" src="${element.strMealThumb}" alt="food">
                                        <h3>${element.strMeal}</h3>
                                        <!-- <button class="btn btn-lg btn-primary" id="${element.idMeal}">Ver más</button> -->
                                    </div>
                                </div>
                            </a>
                        `;
                    });
                } else {
                    errores.innerHTML =`<h3 class="errores">No se encontró ninguna receta con ese ingrediente</h3>`;
                    //alert("No se encontró ninguna receta con ese ingrediente.");
                    searchInput.value = ''; // limpiamos el input text
                }
                carrusel.innerHTML = resultados;
            }).catch((error) => `failed.${error}`);;
    }
}

function creaModal(idReceta, event){

    // Obtenemos la sección donde se mostrarán los resultados
    let modalTituloReceta = document.getElementById("titulo-receta");
    let modalFotoReceta = document.getElementById("foto-receta");
    let modalDescReceta = document.getElementById("descripcion-receta");

    event.preventDefault();
    console.log(idReceta);
    if(idReceta !== undefined) {
        // Lookup full meal details by id
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idReceta)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }).catch(error => `failed.${error}`);
    }
}