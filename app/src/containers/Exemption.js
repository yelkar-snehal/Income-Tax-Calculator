// container files are used to map
// state and dispatched methods to props


import { connect } from 'react-redux';
import { Exemption } from '../components/Exemption';
import { setCity, setRent, setBasicSalary, setDA, setHRAReceived } from '../actions/Exemption'


// temp to check whether state is getting updated
// const mapStateToProps = state => ({
//     fname: state.BasicDetails.fname,
//     lname: state.BasicDetails.lname,
//     panNumber: state.BasicDetails.panNumber,
//     birthdate: state.BasicDetails.birthdate,
//     grossIncome: state.BasicDetails.grossIncome,
// })


const mapDispatchToProps = dispatch => ({
    setCity: city => dispatch(setCity(city)),
    setRent: rent => dispatch(setRent(rent)),
    setBasicSalary: basicSalary => dispatch(setBasicSalary(basicSalary)),
    setDA: DA => dispatch(setDA(DA)),
    setHRAReceived: hraReceived => dispatch(setHRAReceived(hraReceived)),
})


export default connect(null, mapDispatchToProps)(Exemption);
