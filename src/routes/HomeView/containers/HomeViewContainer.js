import { connect } from 'react-redux'
import { actions } from '../modules/HomeView'
import HomeView from '../components/HomeView'

const mapActionCreators = {
  ...actions
}

const mapStateToProps = (state) => ({
  homeView: state.homeView,
  mainLayout: state.mainLayout
})

export default connect(mapStateToProps, mapActionCreators)(HomeView)
