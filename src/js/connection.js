/*

getMealsName()
.then(function(data) {
    console.log(data);
})


function getMealsName() {
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then(function (response) {
            return response.json();
        })
}*/
//document.getElementById("index-div").addEventListener("load", indexLoad);

document.addEventListener('DOMContentLoaded', indexLoad, false);
document.getElementById("btn_search").addEventListener("click", busquedaTexto);
document.getElementById("btn_random").addEventListener("click", busquedaRandom);

function indexLoad(){
    console.log("Loaded")

    const tresRecetas=document.getElementById("carrusel");   



const texto="b";
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
            for(let i=0;i<3;i++){
                const element=data.meals[i];
                
                const receta = {
                    nombre:element.strMeal,
                    ingredientes:[  element.strIngredient1,
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

                    cantidades:[    element.strMeasure1,
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
                
                
                createReceta(receta,tresRecetas);


                
            //});
            }
            
        }
    });

}


function createReceta(receta,myDiv){

    const div1= document.createElement("div");
    div1.classList.add('card')
    const div2= document.createElement("div");
    div1.classList.add('card-body')

    const img1=document.createElement("img");
    img1.src=receta.imagen;
    img1.classList.add('img-fluid');

    const h3= document.createElement('h3');
    h3.innerText=receta.nombre;

    const boton= document.createElement('button');
    boton.innerText="Ver más";
    boton.classList.add('btn');
    boton.classList.add('btn-primary');




    div2.appendChild(img1);
    div2.appendChild(h3);
    div2.appendChild(boton);
    div1.appendChild(div2);

    myDiv.appendChild(div1);


}

function busquedaRandom(){

}

function busquedaTexto(){
    
}
/*
const getMeals = () => {
  const meals = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese')
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => `failed.${error}`);

  return meals;
};

const data = await getMeals();
const theMeals = data.meals;
console.log(data.meals);*/
