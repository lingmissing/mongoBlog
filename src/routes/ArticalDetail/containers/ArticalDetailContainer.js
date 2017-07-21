import { connect } from 'react-redux'
import { actions } from '../modules/ArticalDetail'
import ArticalDetail from '../components/ArticalDetail'

const mapActionCreators = {
  ...actions
}

const mapStateToProps = (state) => ({
  articalDetail: state.articalDetail,
  mainLayout: state.mainLayout
})

export default connect(mapStateToProps, mapActionCreators)(ArticalDetail)
