function openSlideMenu(){
    document.getElementById('menu').style.width='250px';
      document.getElementById('content').style.marginLeft='250px';
  
  }
  function closeSlideMenu(){
    document.getElementById('menu').style.width='0px';
      document.getElementById('content').style.marginLeft='0px';
  }
  
  
  
  
  // get meal list that matches with the ingredients
  const searchBtn = document.getElementById('search-btn');
  const mealList = document.getElementById('meal');
  const mealDetailsContent = document.querySelector('.meal-details-content');
  const recipeCloseBtn = document.getElementById('recipe-close-btn');
  
  
  
  // event listeners
  searchBtn.addEventListener('click', getMealList);
  mealList.addEventListener('click', getMealRecipe);
  recipeCloseBtn.addEventListener('click', () => {
      mealDetailsContent.parentElement.classList.remove('showRecipe');
  });
  
  
  // get meal list that matches with the ingredients
  function getMealList(){
      let searchInputTxt = document.getElementById('search-txt').value.trim();
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
      .then(response => response.json())
      .then(data => {
          let html = "";
          if(data.meals){
              data.meals.forEach(meal => {
                  html += `
                      <div class = "meal-item" data-id = "${meal.idMeal}">
                          <div class = "meal-img">
                              <img src = "${meal.strMealThumb}" alt = "food">
                          </div>
                          <div class = "meal-name">
                              <h3>${meal.strMeal}</h3>
                              <a href = "#" class = "recipe-btn">Get Recipe</a>
                          </div>
                      </div>
                  `;
              });
              mealList.classList.remove('notFound');
          } else{
              html = "Sorry, we didn't find any meal!";
              mealList.classList.add('notFound');
          }
  
          mealList.innerHTML = html;
      });
  }
  
  
  // get recipe of the meal
  function getMealRecipe(e){
      e.preventDefault();
      if(e.target.classList.contains('recipe-btn')){
          let mealItem = e.target.parentElement.parentElement;
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
          .then(response => response.json())
          .then(data => mealRecipeModal(data.meals));
      }
  }
  
  // create a modal
  function mealRecipeModal(meal){
      console.log(meal);
      meal = meal[0];
      let html = `
          <h2 class = "recipe-title">${meal.strMeal}</h2>
          <h4 class="Ingredients">Ingredients:</h4>
          <div class="cardbox">
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient1}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure1}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                  <h3>${meal.strIngredient2}</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>${meal.strMeasure2}</p>
                    <a href="#">Read More</a>
                </div>
              </div>
            </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient3}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure3}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient4}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure4}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient5}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure5}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient6}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure6}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient7}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure7}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient8}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure8}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient9}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure9}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient10}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure10}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient11}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure11}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cardcontainer">
              <div class="card">
                <div class="face face1">
                  <div class="content">
                    <h3>${meal.strIngredient12}</h3>
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>${meal.strMeasure12}</p>
                      <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          
  
          
  
          
  
          <div class = "recipe-meal-img">
              <img src = "${meal.strMealThumb}" alt = "">
          </div>
          <div class = "recipe-instruct">
              <h3>Instructions:</h3>
              <p>${meal.strInstructions}</p>
          </div>
          <div class = "recipe-link">
              <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
          </div>
      `;
      mealDetailsContent.innerHTML = html;
      mealDetailsContent.parentElement.classList.add('showRecipe');
  }
  
  const favouritebtn= document.querySelector('btn');
  
  