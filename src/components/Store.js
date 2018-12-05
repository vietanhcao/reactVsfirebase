import { firebaseConnect } from '../firebaseConnect';
const redux = require('redux');
const initialState = {
    test:"test",
    isEdit : false,
    editItem: {},
    isAdd: false,
    alertShow: false,
    alertContent: "",
    alertType: ""
}
const store = redux.createStore((state = initialState, { type, nhanvao, editObj, getitem, pushcontent, alertType}) => {
    switch (type) {
        case 'AddData':
        firebaseConnect.push(nhanvao);
            return state
        case 'Change_Edit_Status':       
            return { ...state, isEdit: !state.isEdit}
        case 'Change_Add_Status':       
            return { ...state, isAdd: !state.isAdd}  
        case 'Get_edit_data':              
            return { ...state, editItem: editObj }
        case 'Edit':  
            firebaseConnect.child(getitem.id).update({
                noteTitle: getitem.noteTitle,
                noteTitleContent: getitem.noteTitleContent
            })
            return { ...state, editItem: {} }
        case 'DeleteItem':  
            firebaseConnect.child(getitem.id).remove();
            return state
        case 'Change_Alter_On':
            return { ...state, alertShow: true, alertContent: pushcontent, alertType }
        case 'Change_Alter_Off':
            return { ...state, alertShow: false }
        default:
            return state
    }

});
export default store;





