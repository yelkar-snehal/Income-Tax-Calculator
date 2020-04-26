// action creators for basic details
// with individual creator having 
// action type and/or payload


import { SET_FIRST_NAME, SET_LAST_NAME, SET_PAN_NUMBER, SET_BIRTHDATE, SET_GROSS_INCOME } from './actions'


/**
 * 
 * @param {string} first name
 */
export const getFirstName = (fname) => ({
    type: SET_FIRST_NAME,
    fname
})

/**
 * 
 * @param {string} last name 
 */
export const getLastName = (lname) => ({
    type: SET_LAST_NAME,
    lname
})

/**
 * 
 * @param {string} panNumber 
 */
export const getPanNumber = (panNumber) => ({
    type: SET_PAN_NUMBER,
    panNumber
})

/**
 * 
 * @param {date} birthdate 
 */
export const getBirthdat = (birthdate) => ({
    type: SET_BIRTHDATE,
    birthdate
})

/**
 * 
 * @param {string} grossIncome 
 * datatype string is WIP
 * since number in js has an upper limit
 */
export const getGrossIncome = (grossIncome) => ({
    type: SET_GROSS_INCOME,
    grossIncome
})