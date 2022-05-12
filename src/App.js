import React, { useState, useEffect } from "react";
// import "./App.css"
import Recipe from "./SinglePage";
//import "./css/style.css";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import AddFavourite from "./AddFavourite";
import { useLocation } from "react-router-dom";
import Header from "./header";
//const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


/*

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }




  return (
    <>
      <Header/>
      <h2>Our Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "Résultat introuvable. Essayez une autre clé de recherche."}
      </div>
    </>
  );
}


export default App;
*/



const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const App = () => {


  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [recipes, setRecipes] = useState([]);
  
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data.meals);
    setRecipes(data.meals);
    setIsLoading(false);
  };
  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
      event.preventDefault();
      searchRecipes();
    }
    
  useEffect(() => {
		const recipeFavourites = JSON.parse(localStorage.getItem('recipe-app'));
    setFavourites({recipeFavourites});
	}, []);


  const saveToLocalStorage = (items) => {
		localStorage.setItem('recipe-app', JSON.stringify(items));
	};




  const addFavouriteRecipe = (recipe) => {
		const newFavouriteList = [...favourites, recipe];
		setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    console.log(favourites)
	};

  const RemoveFavouriteRecipe = (recipe) => {
		const newFavouriteList = favourites.filter((favourite) => favourite.idMeal !== recipe.idMeal);
		setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    console.log(favourites)
	};


  
  function handleClick(){
    console.log("hello")
  }
  return (
    <>
    <Header/>
    <div className="container">

      <h2>Our Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => ( 
          <>
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
             handleFavouritesClick={addFavouriteRecipe}
				      favouriteComponent={AddFavourite}
          />

          <div onClick={() => addFavouriteRecipe(recipe)}>
          Fav
					</div>
          </>
      
        )) : "No Results."}
      </div>

    
     
      
    </div>
    </>
    
      
  );
}

export default App;


/*import React, { Component } from 'react';
import './App.css';

import Form from "./Form";
import Recipes from "./Recipes";



class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;*/
