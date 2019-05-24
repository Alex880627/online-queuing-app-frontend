import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        hello:{ hy : "hiii"},
       
        isLoggedIn:{isLoggedIn:false},
        isAdmin:{isAdmin:true},
        
        fetched:{data:'here will be the fetched data if u press the button'},
        loginProviderData:{data:"loginProvider"}
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
        loginProvider: (state,payload) => {
            console.log("loginProverfired")
            state.loginProviderData.data = payload
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
        },
        fetchToLoginprovider: (context,payload) => {
            fetch('http://localhost:4000/login-provider',{
            method:'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'email':payload.email,
            "password":payload.password
        
        }),
        })
        .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        context.commit('loginProvider',myJson)
        console.log(JSON.stringify(myJson));
    });
}
    }
})