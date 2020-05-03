// part of reducer for exemption
// update applications state here
// depending upon the action fired 
// by the action creator
// and payload updated by the same


import { SET_CITY, SET_RENT, SET_BASIC_SALARY, SET_DA, SET_HRA_RECEIVED } from '../actions/actions'


// initial state has to be an object
// or an array
const initialState = {
    city: null,
    rent: null,
    basicSalary: null,
    DA: null,
    hraReceived: null,
}


/**
 * 
 * @param {object} state 
 * @param {object} action 
 * function to decide the updated state
 * depending on the action type
 */
export const Exemption = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, fname: action.city }

        case SET_RENT:
            return { ...state, lname: action.rent }

        case SET_BASIC_SALARY:
            return { ...state, panNumber: action.basicSalary }

        case SET_DA:
            return { ...state, birthdate: action.DA }

        case SET_HRA_RECEIVED:
            return { ...state, grossIncome: action.hraReceived }

        default:
            return state
    }
}
