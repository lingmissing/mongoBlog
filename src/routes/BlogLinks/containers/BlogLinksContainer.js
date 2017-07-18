import { connect } from 'react-redux'
import { actions } from '../modules/BlogLinks'
import BlogLinks from '../components/BlogLinks'

const mapActionCreators = {
  ...actions
}

const mapStateToProps = (state) => ({
  blogLinks: state.blogLinks
})

export default connect(mapStateToProps, mapActionCreators)(BlogLinks)
