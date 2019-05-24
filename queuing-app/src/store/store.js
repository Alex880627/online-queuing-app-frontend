import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLoggedIn:{isLoggedIn:false},
        isAdmin:{isAdmin:true}
    },
    getters:{

    },

    mutations:{
        addNameToGreeting : state => {
            state.hello.hy = "hiii Valami"
        },
        addToStore: (state,payload) => {
            console.log("hsidafifso")
            state.fetched.data = payload
        },

    },


    actions:{
        addNameToGreeting: context => {
            setTimeout(function(){
                context.commit('addNameToGreeting')
            } , 2000)
        } ,

        fetchToStore: context => {
                    fetch('http://localhost:4000/selected-type',{
                    method:'POST',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'type':'hairdresser'}),
                })
                .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                context.commit('addToStore',myJson)
                console.log(JSON.stringify(myJson));
            });
        }
    }
})