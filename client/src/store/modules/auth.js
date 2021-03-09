import axios from 'axios';
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  user: null,
  houses: null,
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StateHouses: (state) => state.houses,
  StateUser: (state) => state.user,
};
const actions = {
  async Register({ dispatch }, form) {
    await axios.post('api/auth/signup', form);
    const UserForm = {
      email: form.email,
      password: form.password,
    };
    await dispatch('LogIn', UserForm);
  },
  async LogIn({ commit }, User) {
    const response = await axios.post('api/auth/login', User);
    localStorage.setItem('token', response.data.token);
    await commit('setUser', User.email);
  },
  async CreateHouse({ dispatch }, house) {
    await axios.post('api/building', house, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    await dispatch('GetHouses');
  },
  async GetHouses({ commit }) {
    const response = await axios.get('api/building');
    commit('setHouses', response.data);
  },
  async GetUserHouses({ commit }) {
    const response = await axios.get('api/building/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    commit('setUserHouses', response.data);
  },
  async DeleteHouse(houseID) {
    await axios.delete(`api/building/${houseID}`);
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
  setHouses(state, houses) {
    state.houses = houses;
  },
  setUserHouses(state, houses) {
    state.houses = houses;
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
