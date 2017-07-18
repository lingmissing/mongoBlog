import { connect } from 'react-redux'
import { actions } from '../modules/AddArtical'
import AddArtical from '../components/AddArtical'

const mapActionCreators = {
  ...actions
}

const mapStateToProps = (state) => ({
  addArtical: state.addArtical,
  mainLayout: state.mainLayout
})

export default connect(mapStateToProps, mapActionCreators)(AddArtical)
