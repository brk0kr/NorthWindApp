import * as actionTypes from "./actionTypes"

export function changeCategory(item){
    return {type:actionTypes.CHANGE_CATEGORY, payload:item}
}

export function getCategoriesSuccess(data){
     return {type:actionTypes.GET_CATEGORY_SUCCESS, payload:data}
}

export function getCategories(){
return function(dispatch){
    let url = "  http://localhost:3000/categories";
    return fetch(url)
    .then(response => response.json())
    .then(result => dispatch(getCategoriesSuccess(result)))
}
}