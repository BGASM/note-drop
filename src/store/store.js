// store.js

import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uuid: ''
    },
    mutations: {
        setUUID (state) {
            state.uuid = uuidv4()
        }
    },
    getters: {
        getUUID: state => {
            return state.uuid
        }
    }

});