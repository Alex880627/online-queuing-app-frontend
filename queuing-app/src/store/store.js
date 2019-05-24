import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		isLoggedIn: { isLoggedIn: false },
		isAdmin: { isAdmin: true },
		databaseData: {
			data: 'here will be the fetched data if u press the button',
			appointments_user: [],
			service_types: [],
		},
		loginProviderData:{data:"loginProvider"},
	},
	getters: {
	},
	mutations: {
		addToStore: (state, payload) => {	//	learning purpose
			state.databaseData.data = payload;
		},
		changeLoginState: state => {
			state.isLoggedIn = true;
		},
		addAppointmentsOfUserToStore: (state, payload) => {
			state.databaseData.appointments_user = payload.appointments;
		},
		addTypesOfServicesToStore: (state, payload) => {
			state.databaseData.service_types = payload.types;
		},
		loginProvider: (state,payload) => {
			console.log("loginProverfired")
			state.loginProviderData.data = payload
		},
	},
	actions: {
		fetchToStore: context => {	//	learning purpose
			fetch('http://localhost:4000/selected-type', {
				method: 'POST',
				mode: 'cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 'type': 'hairdresser' }),
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (myJson) {
					context.commit('addToStore', myJson)
					console.log(JSON.stringify(myJson));
				});
		},
		fetchCustomDataToStore: (context, endPoint, bodyData) => {
			fetch(`http://localhost:4000${endPoint}`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(bodyData),
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (jsonData) {
					context.commit('addAppointmentsOfUserToStore', jsonData);
				})
				.catch(function (error) {
					return error;
				});
		},
		fetchToLoginprovider: (context,payload) => {
			fetch('http://localhost:4000/login-provider',{
				method:'POST',
				mode: 'cors',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					'email':payload.email,
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
});
