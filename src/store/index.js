import { createStore } from 'vuex';
import md5 from 'md5';

export default createStore({
    state: {
        leftCollapse: false,
        rightCollapse: false,
        staticURL: ''
    },
    mutations: {
        setLeftCollapse(state, value) {
            state.leftCollapse = value;
        },
        setRightCollapse(state, value) {
            state.rightCollapse = value;
        },
        setStaticURL(state) {
            const mysteryCode = localStorage.getItem('mystery-code') || '';
            // 防君子不防小人
            const prefix = md5(mysteryCode) === '21232f297a57a5a743894a0e4a801fc3' ? '' : 'v-';
            state.staticURL = `https://${prefix}static.kooriookami.top`;
        }
    },
    actions: {}
});
