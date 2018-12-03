// import { firebaseConnect } from '../firebaseConnect';
const redux = require('redux');
const initialState = {
    test:"test"
}
const store = redux.createStore((state = initialState, { type, payload }) => {
    switch (type) {
        case 'AddData':
            console.log('ok');
            return state
        default:
            return state
    }
});
export default store;





