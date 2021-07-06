import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0,
    /**[Map]
     * {
     *     type: 使用中， 未使用,
     *     name: menu-name,
     *     closeAble: 是否可以关闭,
     *     url:
     * }
     */
    pageList: new Map().set('Dashboard', {
      type: true,
      name: 'Dashboard',
      closeAble: false,
      url: '/',
    }),
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    addPageList(state, pageObj) {
      if (!state.pageList.has(pageObj.name)) {
        for (const stateElement of state.pageList) {
          console.log(stateElement[1].type);
          stateElement[1].type = false;
        }
        state.pageList.set(pageObj.name, pageObj);
      } else {
        for (const stateElement of state.pageList) {
          if (stateElement[1].name === pageObj.name) {
            stateElement[1].type = true;
          } else {
            stateElement[1].type = false;
          }
        }
      }
    },
    deletePageList(state, key) {
      state.pageList.delete(key);
    },
  },
});

export default store;
