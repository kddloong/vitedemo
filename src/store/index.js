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
     *     choseStatus
     * }
     */
    pageList: new Map().set('Dashboard', {
      type: true,
      name: 'Dashboard',
      closeAble: false,
      choseStatus: true,
    }),
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    addPageList(state, pageObj) {
      if (!state.pageList.has(pageObj.name)) {
        state.pageList.set(pageObj.name, pageObj);
      }
    },
  },
});

export default store;
