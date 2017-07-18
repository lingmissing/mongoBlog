import { connect } from 'react-redux'
import { actions } from '../modules/BlogArtical'
import BlogArtical from '../components/BlogArtical'

const mapActionCreators = {
  ...actions
}

const mapStateToProps = (state) => ({
  blogArtical: state.blogArtical,
  mainLayout: state.mainLayout
})

export default connect(mapStateToProps, mapActionCreators)(BlogArtical)
