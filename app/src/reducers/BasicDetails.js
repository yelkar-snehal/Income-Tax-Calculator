// part of reducer for basic detail
// update applications state here
// depending upon the action fired 
// by the action creator
// and payload updated by the same

import { SET_FIRST_NAME, SET_LAST_NAME, SET_PAN_NUMBER, SET_BIRTHDATE, SET_GROSS_INCOME } from "../actions/actions";


// initial state has to be an object
// or an array
const initialState = {
    fname: null,
    lname: null,
    panNumber: null,
    birthdate: null,
    grossIncome: null,
}


/**
 * 
 * @param {object} state 
 * @param {object} action 
 * function to decide the updated state
 * depending on the action type
 */
export const BasicDetails = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME:
            return { ...state, fname: action.fname }

        case SET_LAST_NAME:
            return { ...state, lname: action.lname }

        case SET_PAN_NUMBER:
            return { ...state, panNumber: action.panNumber }

        case SET_BIRTHDATE:
            return { ...state, birthdate: action.birthdate }

        case SET_GROSS_INCOME:
            return { ...state, grossIncome: action.grossIncome }

        default:
            return state
    }
}
