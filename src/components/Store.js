import { firebaseConnect } from '../firebaseConnect';
const redux = require('redux');
const initialState = {
    test:"test",
    isEdit : false
}
const store = redux.createStore((state = initialState, { type, nhanvao }) => {
    switch (type) {
        case 'AddData':
        firebaseConnect.push(nhanvao);
        console.log('ok' + nhanvao);
            return state
        case 'Change_Edit_Status':           
            return {...state, isEdit: !state.isEdit}
        default:
            return state
    }
});
export default store;





