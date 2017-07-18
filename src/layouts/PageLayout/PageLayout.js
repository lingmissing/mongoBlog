import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

class PageLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    const { children } = this.props
    return (
      <div className="container">
        <Link to="/add-artical">add-artical</Link>
        <div className="page-layout__viewport">
          {children}
        </div>
      </div>
    )
  }
}

export default PageLayout
