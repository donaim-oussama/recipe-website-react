import React, { useEffect } from 'react';
import {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import Header from './header';

const Recipe = () =>{
    const location = useLocation();
    const [reci, setReci] = useState({});

    useEffect(()=>{
        setReci(location.state.recipe);
    }, [])

    
   console.log(reci);
   const mealDbUrl = "https://www.themealdb.com/meal/" + reci.idMeal;

    return(
      <>
        <Header/>
        <div className="container">
          <div className="active-recipe">
            <img className="active-recipe__img" src={reci.strMealThumb} alt={reci.strMeal}/>
            <h3 className="active-recipe__title">{ reci.strMeal }</h3>
            <h4 className="active-recipe__publisher">
              Instructions: <span>{ reci.strInstructions }</span>
            </h4>
            <p className="active-recipe__website">Plus d'info: 
              <span><a href={mealDbUrl}>{mealDbUrl}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
      </div>
      </>
    )
}
/*class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);
    
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
    
  }
  render() {
    const recipe = this.state.activeRecipe;
    const mealDbUrl = "https://www.themealdb.com/meal/" + recipe.idMeal;
    return (
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <h3 className="active-recipe__title">{ recipe.strMeal }</h3>
            <h4 className="active-recipe__publisher">
              Instructions: <span>{ recipe.strInstructions }</span>
            </h4>
            <p className="active-recipe__website">Plus d'info: 
              <span><a href={mealDbUrl}>{mealDbUrl}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};*/

export default Recipe;