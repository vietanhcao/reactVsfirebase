import { firebaseConnect } from '../firebaseConnect';
const redux = require('redux');
const initialState = {
    test:"test",
    isEdit : false,
    editItem: {}
}
const store = redux.createStore((state = initialState, { type, nhanvao, editObj }) => {
    switch (type) {
        case 'AddData':
        firebaseConnect.push(nhanvao);
            return state
        case 'Change_Edit_Status':       
            return { ...state, isEdit: !state.isEdit}
        case 'Get_edit_data':              
            return { ...state, editItem: editObj }
        default:
            return state
    }

});
export default store;





