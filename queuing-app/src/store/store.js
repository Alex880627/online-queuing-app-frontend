import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        hello:{ hy : "hiii"}
    },
    getters:{

    },

    mutations:{
        addNameToGreeting : state => {
            state.hello.hy = "hiii Valami"
        }
    },

    actions:{
        addNameToGreeting: context => {
            setTimeout(function(){
                context.commit('addNameToGreeting')
            } , 2000)
        }
    }
})