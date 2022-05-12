class Favorites{
    
    getFav(){
        var recipes;
        if(localStorage.getItem('recipes') === null){
            recipes = [];
        } else{
            recipes = JSON.parse(localStorage.getItem('recipes'));
        }
        return recipes;
    }

    addFav(recipe){
        const recipes = this.getFav();
        recipes.push(recipe);
        localStorage.setItem('recipe' + recipe.idMeal, JSON.stringify(recipes))
    }

    
}