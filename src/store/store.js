import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        buttoncolor: 'orange'
    },
    getters: {
        logColor: state => { 
            console.log(`current color in store is ${state.buttoncolor}`)
        }
    },
    mutations: {
        changeButtonColor: ( state, color ) => {
            state.buttoncolor = color
            console.log(`button color in store is now color ${state.buttoncolor}!!`)
        } 
    }
})