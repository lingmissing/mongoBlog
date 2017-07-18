import { connect } from 'react-redux'
import { actions } from '../modules/Theme'
import Theme from '../components/Theme'

const mapActionCreators = {
  ...actions
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  mainLayout: state.mainLayout
})

export default connect(mapStateToProps, mapActionCreators)(Theme)
