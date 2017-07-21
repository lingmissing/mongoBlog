import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import BlogHeader from 'components/BlogHeader'
import BlogFooter from 'components/BlogFooter'
import './PageLayout.scss'

class PageLayout extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    const { children } = this.props
    return (
      <div className="container">
        <BlogHeader />
        <div className="page-layout__viewport">
          {children}
        </div>
        <BlogFooter />
      </div>
    )
  }
}

export default PageLayout
