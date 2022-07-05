import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";
import {API_URL} from '../constans/API';
import Axios from 'axios';

class ProductStore {

    products = [];

    contructor() {
        makeObservable(this, {
            getProduct: action,
        })
    }

    getProduct() {
        Axios.get(`${API_URL}type/3`)
        .then((result) => {
            this.products = result.data.pokemon
            // console.log(result.data.pokemon)
        })
        .catch((e) => {
            if(e.response){
                
            }
        })
    }

}

export const ProductStoreContext = createContext(new ProductStore());