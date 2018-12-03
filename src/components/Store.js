import { firebaseConnect } from '../firebaseConnect';
const redux = require('redux');
const initialState = {
    test:"test"
}
const store = redux.createStore((state = initialState, { type, nhanvao }) => {
    switch (type) {
        case 'AddData':
        firebaseConnect.push(nhanvao);
        console.log('ok' + nhanvao);
            return state
        default:
            return state
    }
});
export default store;





