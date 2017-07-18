import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AddArtical.scss'

class AddArtical extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div className="add-artical">
        <div className="aside-artical">1</div>
        <div className="middle-artical">2</div>
        <div className="main-artical">3</div>
      </div>
    )
  }
}

export default AddArtical
