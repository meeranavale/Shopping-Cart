import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cartItems: [],
    products: [
      {
        name: 'Acer Laptop',
        image_path: 'https://rukminim1.flixcart.com/image/832/832/j7xngy80/computer/y/z/g/acer-na-laptop-original-imaey292dny45qdn.jpeg?q=70',
        price: 45990,
        quantity: 1
      },
      {
        name: 'Apple Macbook',
        image_path: 'https://rukminim1.flixcart.com/image/832/832/j4irlow0/computer/j/8/c/apple-na-notebook-original-imaevdrcvuksg2zv.jpeg?q=70',
        price: 57990,
        quantity: 1
      },
      {
        name: 'Apple Notebook',
        image_path: 'https://rukminim1.flixcart.com/image/832/832/computer/v/f/z/apple-macbook-pro-notebook-original-imae9weh8guxs8uk.jpeg?q=70',
        price: 62590,
        quantity: 1
      },
      {
        name: 'Dell Insprion Core i7 7th Gen',
        image_path: 'https://rukminim1.flixcart.com/image/832/832/j52rrm80/computer/a/h/n/dell-inspiron-3567-notebook-original-imaetu5ch98vzge5.jpeg?q=70',
        price: 57890,
        quantity: 1
      },
      {
        name: 'Lenovo Core i5 7th Gen',
        image_path: 'https://rukminim1.flixcart.com/image/312/312/j63x7rk0/computer/m/w/a/lenovo-na-laptop-original-imaewfhdwnxdzdhc.jpeg?q=70',
        price: 49999,
        quantity: 1
      },
      {
        name: 'HP 15 Pentium Quad Core',
        image_path: 'https://rukminim1.flixcart.com/image/832/832/j6v2ky80/computer/d/a/g/hp-na-laptop-original-imaex8fhspprkq3p.jpeg?q=70',
        price: 20990,
        quantity: 1
      },
      {
        name: 'Asus FX553 Core i7 7th Gen',
        image_path: 'https://rukminim1.flixcart.com/image/832/832/ja8j0cw0/computer/h/z/c/asus-na-laptop-original-imaewzj7ubwgzuh6.jpeg?q=70',
        price: 69990,
        quantity: 1
      },
      {
        name: 'HP APU Dual Core A9 7th Gen',
        image_path: 'https://rukminim1.flixcart.com/image/832/832/j6xxgnk0/computer/c/k/9/hp-laptop-original-imaexasbvggmkzgn.jpeg?q=70',
        price: 20990,
        quantity: 1
      }
    ]
  },
  getters,
  mutations,
  actions
});


