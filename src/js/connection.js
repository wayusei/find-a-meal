//document.addEventListener('DOMContentLoaded', indexLoad, false);
document.getElementById("btn_search").addEventListener("click", busquedaTexto);
document.getElementById("btn_random").addEventListener("click", busquedaRandom);
    

let btnRandom = document.getElementById("btn_random");
btnRandom.addEventListener('click', busquedaRandom);


/*function indexLoad() {
    //console.log("Loaded")

    const tresRecetas = document.getElementById("carrusel");
    const texto = "b";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${texto}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            //console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {

            //console.log(data.meals);
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

                createReceta(receta, tresRecetas);
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
}*/

function createTemplate(data){
            const node1 = document.createElement('div');
             const boton = document.createElement('button');
            boton.innerText = "Ver más";
            node1.appendChild(boton)
             data.meals.forEach(element => {
                        
                
                        const receta = {
                                nombre: element.strMeal,
                                id:element.idMeal,                   
                                imagen: element.strMealThumb,
                            
                        }

                        //console.log(receta);

                        const node = document.createElement('div');

                        node.setAttribute("data-toggle","modal");
                        node.setAttribute("data-target","#modal"+receta.id);
                        node.setAttribute("id","div"+receta.id);

                        



                         
                        let resultados = `
                            <div  >
                                <div class="card card-body">
                                    <div>
                                        <img class="card-img img-fluid" src="${receta.imagen}" alt="food" id="img${receta.id}">
                                        <h3>${receta.nombre}</h3>
                                        
                                    </div>
                                    <div class="modal fade" id="modal${receta.id}" tabindex="-1" role="dialog">
                                    <!------------------ ------>

                                    <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" >${receta.nombre} </h5>
                                                <button type="button" class="close" data-dismiss="modal" >
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                 <!-  -------------------------------- -->
                                                        <div class="container-fluid">
                                                            <div class="row" >
                                                                         div${receta.id}                                    
                                                            </div>
                                                        
                                                        </div>

                                                 <!- ---------------------------------- -->

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                
                                            </div>
                                            </div>
                                        </div>
                                                                         


                                    </div> <!--- -->
                                </div>

                            </div>
                        `;

                        node.innerHTML = resultados;
                        
                        node.addEventListener ("click", createModal);
                        node.myID=receta.id;
                        node1.appendChild(node);
                        
                         

                        
                    });
                   

    return node1;
}

function busquedaRandom() {
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
             //console.log(data);
            const resultados = createTemplate(data);
            
            //carrusel.innerHTML = resultados;
            carrusel.appendChild(resultados);

            
            

        }).catch((error) => console.log(`failed.${error}`));;
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
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingrediente) // Para buscar por ingrediente principal
            .then(response =>
                response.json()
            ).then(data => {
                
                if (data.meals) {
                    let resultados = createTemplate(data);
            
            //carrusel.innerHTML = resultados;
            carrusel.appendChild(resultados);
                    document.getElementById ("div"+data.meals.idMeal).addEventListener ("click", createModal(data.meals.idMeal));
                } else {
                    errores.innerHTML =`<h3 class="errores">No se encontró ninguna receta con ese ingrediente</h3>`;
                    //alert("No se encontró ninguna receta con ese ingrediente.");
                    searchInput.value = ''; // limpiamos el input text
                }
                carrusel.innerHTML = resultados;
            }).catch((error) => `failed.${error}`);;
    }
}

function createModal(e){

    // Obtenemos la sección donde se mostrarán los resultados
    let idReceta=e.currentTarget.myID;
    let divModal = document.getElementById("modal"+idReceta);
   

    //let divModal = document.getElementById("verReceta");
   

    
    
    if(idReceta !== undefined) {
        // Lookup full meal details by id

        
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idReceta)
        .then(response => response.json())
        .then(data => {

            data.meals.forEach(element => {

                 const receta = {
                    nombre: element.strMeal,
                    id:element.idMeal,
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

                let contenido=`  <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" >${receta.nombre}</h5>
                                                <button type="button" class="close" data-dismiss="modal" >
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                 <!-  -------------------------------- -->
                                                        <div class="container-fluid">
                                                            <div class="row" >
                                                            
                                                        
                                                                <section class="container">
                                                        
                                                        
                                                                    <div class="row">
                                                                        <div class="col-sm">
                                                                            <div class="card image-card">
                                                                                <div class="card-body">
                                                                                    <img class="image-food img-fluid"
                                                                                        src="${receta.imagen}">
                                                                                    <h3>${receta.nombre}</h3>
                                                        
                                                                                    <h4>Ingredients</h4>
                                                                                    <ul>`;
                                                                                        for(let i=0;i<receta.ingredientes.length;i++){
                                                                                            if(receta.cantidades[i]!="" && receta.cantidades[i]!=" " && receta.cantidades[i]!=null)
                                                                                                contenido+=`<li>${receta.ingredientes[i]} (${receta.cantidades[i]})</li>`;    
                                                                                        }

                                                                                        
                                                                                        
                                                                                    contenido+=`</ul>
                                                                                    <h4>Preparation</h4>
                                                        
                                                                                    <p>${receta.preparacion}</p>
                                                        
                                                        
                                                                                </div>
                                                        
                                                                            </div>
                                                        
                                                                        </div>
                                                        
                                                                    </div>
                                                        
                                                                </section>
                                                    
                                                            </div>
                                                        
                                                        </div>

                                                 <!- ---------------------------------- -->

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                
                                            </div>
                                            </div>
                                        </div>`;

                divModal.innerHTML=contenido;

                

            });
            
        }).catch(error => `failed.${error}`);
    }
}