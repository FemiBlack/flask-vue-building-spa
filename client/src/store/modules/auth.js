import axios from 'axios';
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  user: null,
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
};
const actions = {
  async Register({ dispatch }, form) {
    await axios.post('/api/auth/signup', form);
    const UserForm = {
      username: form.username,
      password: form.password,
    };
    await dispatch('LogIn', UserForm);
  },
  async LogIn({ commit }, User) {
    const response = await axios.post('/api/auth/login', User);
    localStorage.setItem('token', response.data.token);
    await commit('setUser', User.username);
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
