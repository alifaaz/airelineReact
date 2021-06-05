import { connect } from "react-redux"
import { loginAction } from "../../store/general/actions"
import { loginErrorSelector, loginLoadingSelector } from "../../store/general/selectors"

  const mapDispatchToProps = {
    loginAction
}




const mapStateToProps = (state:any) => {
  const general = state.general
  return {
    loading:loginLoadingSelector(general),
    error:loginErrorSelector(general)
  }


}
  
const connected = connect(mapStateToProps, mapDispatchToProps)
export default  connected