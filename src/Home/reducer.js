// src/Home/reducer.js
const INITIAL_STATE = {
    noteArray: []
  };


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_NOTE":
        return {
            noteArray: [...state.noteArray, action.payload]
        };
        case "DELETE_NOTE":
        return {
            ...state,
            noteArray: [...state.noteArray, action.payload]
        };
        default:
        return state;
    }
};