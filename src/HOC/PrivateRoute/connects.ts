import { connect } from "react-redux"
import { checkAuthAction } from "../../store/general/actions"

  const mapDispatchToProps = {
      checkAuthAction
    
}
const mapStateToProps = (state:any) => {
 return {
     
 }


}
  
const connected = connect(mapStateToProps, mapDispatchToProps)
export default  connected