// action creators for exemption
// with individual creator having 
// action type and/or payload


import { SET_CITY, SET_RENT, SET_BASIC_SALARY, SET_DA, SET_HRA_RECEIVED } from './actions'


/**
 * 
 * @param {string} city
 */
export const setCity = (city) => ({
    type: SET_CITY,
    city
})

/**
 * 
 * @param {string} rent
 * string WIP
 */
export const setRent = (rent) => ({
    type: SET_RENT,
    rent
})

/**
 * 
 * @param {string} basicSalary
 * string WIP
 */
export const setBasicSalary = (basicSalary) => ({
    type: SET_BASIC_SALARY,
    basicSalary
})

/**
 * 
 * @param {string} DA 
 * string WIP
 */
export const setDA = (DA) => ({
    type: SET_DA,
    DA
})

/**
 * 
 * @param {string} hraReceived 
 * string WIP
 */
export const setHRAReceived = (hraReceived) => ({
    type: SET_HRA_RECEIVED,
    hraReceived
})
