import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        auth:{token:'token'},
       
        isLoggedIn:{isLoggedIn:false},
        isAdmin:{isAdmin:false},
        
        fetched:{data:'here will be the fetched data if u press the button'},
        loginProviderData:{data:"loginProvider"},
        loginUserData:{data:"init"},
        registerUserData:{data:"in"},
        registerProviderData:{data:"in"},
        userAppointments:{data:[]}
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
            if (payload.message == "Succesful login!") {
                state.isLoggedIn.isLoggedIn = true;
                state.isAdmin.isAdmin = true;
            }
            state.loginProviderData.data = payload
        },
        loginUser: (state,payload) => {
            console.log("loginUserfired")
            console.log(payload.token)
            console.log(payload.appointments)
            if (payload.message == "Succesful login!") {
                state.isLoggedIn.isLoggedIn = true;
                state.isAdmin.isAdmin = false;
                state.auth.token = payload.token
                state.userAppointments.data = payload.appointments;
            }
            state.loginUserData.data = payload
        },
        registerUser: (state,payload) => {
            console.log("registerUserISFired")
            state.registerUserData.data = payload
        },
        registerProvider: (state,payload) => {
            console.log("registerPRoviderISFIred")
            state.registerProviderData.data = payload
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
},


fetchToLoginUser: (context,payload) => {
    fetch('http://localhost:4000/login-user',{
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
    context.commit('loginUser',myJson)
    console.log(JSON.stringify(myJson));
    });
},

fetchToRegisterUser: (context,payload) => {
    fetch('http://localhost:4000/user-registration',{
    method:'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'username':payload.username,'lastname':payload.lastname,
    'firstname':payload.firstname,'email':payload.email,
    "password":payload.password

        }),
    })
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    context.commit('registerUser',myJson)
    console.log(JSON.stringify(myJson));
    });
},


fetchToRegisterProvider: (context,payload) => {
    fetch('http://localhost:4000/provider-registration',{
    method:'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'username':payload.username,'lastname':payload.lastname,
    'firstname':payload.firstname,'email':payload.email,
    "password":payload.password

        }),
    })
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    context.commit('registerProvider',myJson)
    console.log(JSON.stringify(myJson));
    });
},


fetchToGetServices: (context,payload) => {
    fetch('http://localhost:4000/provider-registration',{
    method:'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({'username':payload.username,'lastname':payload.lastname,
    'firstname':payload.firstname,'email':payload.email,
    "password":payload.password

        }),
    })
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    context.commit('registerProvider',myJson)
    console.log(JSON.stringify(myJson));
    });
},
    }
})