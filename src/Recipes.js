import React from 'react';
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
    { props.recipes.map((recipe) => {
      return (
        <div key={recipe.strMeal} className="col-md-4">
          <div className="recipes__box">
            <img 
              className="recipe__box-img" 
              src={recipe.strMealThumb} 
              alt={recipe.strMeal}/>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.strMeal.length < 20 ? `${recipe.strMeal}` : `${recipe.strMeal.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Categorie: <span>
                  { recipe.strCategory }
                </span></p>
              </div>
              <button className="recipe_buttons">
                <Link to={{ 
                  pathname: `/recipe/${recipe.idMeal}`,
                  state: {recipe}
                }}>Voir ingrédients</Link>
              </button>
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Recipes;