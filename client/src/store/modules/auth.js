import axios from 'axios';

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
    await axios.post('register', form);
    const UserForm = new FormData();
    UserForm.append('username', form.username);
    UserForm.append('password', form.password);
    await dispatch('LogIn', UserForm);
  },
  async LogIn({ commit }, User) {
    await axios.post('login', User);
    await commit('setUser', User.get('username'));
  },
  async CreateHouse({ dispatch }, house) {
    await axios.post('api/post', house);
    await dispatch('GetHouses');
  },
  async GetHouses({ commit }) {
    const response = await axios.get('api/houses');
    commit('setHouses', response.data);
  },
  async DeleteHouse(houseID) {
    await axios.delete(`api/houses/${houseID}`);
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
    state.houses = houses.houses;
  },
  setDeleteHouse(state, houses) {
    state.houses = houses.id;
  },
  LogOut(state) {
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
