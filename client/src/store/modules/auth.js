import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from '@/router'
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  user: null,
  role: null,
  house: null,
  houses: null,
  userhouses: null,
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StateAllHouses: (state) => state.houses,
  StateHouse: (state) => state.house,
  StateUserHouses: (state) => state.userhouses,
  StateUser: (state) => state.user,
  StateUserRole: (state) => state.role,
};
const actions = {
  async Register({ dispatch }, form) {
    await axios.post('/api/auth/signup', form)
    .then((res) => {
        const UserForm = {
          username: form.username,
          password: form.password,
        };
        console.log(res.data)
        dispatch('LogIn', UserForm);
        Swal.fire('Success','Your account has been registered successfully. Please wait for verification from the admin','success')
        .then(() => {
          router.push("/account")
        })
      })
      .catch((error) => {
        let result = error.response.data
        if (error.response.status !== 400){
          Swal.fire('!',`${result.message}`,'info')
        } else {
          Swal.fire('Oops',`${result.message}`,'warning')
        }
      });
  },
  async LogIn({ commit }, User) {
    const response = await axios.post('/api/auth/login', User);
    localStorage.setItem('token', response.data.token);
    let role = parseInt(response.data.role)
    await commit('setUser', User.username);
    await commit('setUserRole', role);
  },
  async CreateHouse({ dispatch }, house) {
    await axios.post('/api/building', house, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    await dispatch('GetAllHouses');
  },
  async UpdateHouse({ dispatch }, {payload, houseID}) {
    localStorage.setItem('userID', houseID);
    await axios.put(`/api/building/${houseID}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    await dispatch('GetUserHouses');
  },
  async GetHouse({ commit }, houseID) {
    const response = await axios.get(`/api/building/${houseID}`);
    commit('setHouse', response.data);
  },
  async GetAllHouses({ commit }) {
    const response = await axios.get('/api/building');
    commit('setAllHouses', response.data);
  },
  async GetUserHouses({ commit }) {
    const response = await axios.get('/api/building/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    commit('setUserHouses', response.data);
  },
  async DeleteHouse({ dispatch }, houseID) {
    await axios.delete(`/api/building/${houseID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    await dispatch('GetUserHouses');
    // commit('SET_PRODUCTS', { products: res.data, houseID });
  },
  async LogOut({ commit }) {
    const user = null;
    commit('logout', user);
  },

};
const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  setUserRole(state, role) {
    state.role = role;
  },
  setHouse(state, house) {
    state.house = house
  },
  setAllHouses(state, houses) {
    state.houses = houses;
  },
  setUserHouses(state, userhouses) {
    state.userhouses = userhouses;
  },
  setDeleteHouse(state, houses) {
    state.houses = houses.id;
  },
  logout(state) {
    state.user = null;
    state.houses = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
