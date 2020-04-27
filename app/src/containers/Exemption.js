import { connect } from "react-redux";
import { Exemption } from "../components/Exemption";

const mapStateToProps = state => ({
    fname: state.BasicDetails.fname,
    lname: state.BasicDetails.lname,
    panNumber: state.BasicDetails.panNumber,
    birthdate: state.BasicDetails.birthdate,
    grossIncome: state.BasicDetails.grossIncome,
})

export default connect(mapStateToProps, null)(Exemption);