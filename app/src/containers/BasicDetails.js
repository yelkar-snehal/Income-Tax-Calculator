// container files are used to map
// state and dispatched methods to props


import { connect } from "react-redux";
import { BasicDetails } from "../components/BasicDetails";
import { setFirstName, setLastName, setPanNumber, setBirthdate, setGrossIncome } from "../actions/BaiscDetails";



const mapDispatchToProps = dispatch => ({
    setFirstName: fname => dispatch(setFirstName(fname)),
    setLastName: lname => dispatch(setLastName(lname)),
    setPanNumber: panNumber => dispatch(setPanNumber(panNumber)),
    setBirthdate: birthdate => dispatch(setBirthdate(birthdate)),
    setGrossIncome: grossIncome => dispatch(setGrossIncome(grossIncome)),
})



export default connect(null, mapDispatchToProps)(BasicDetails);