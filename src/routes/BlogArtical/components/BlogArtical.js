import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card'
import './BlogArtical.scss'

class BlogArtical extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div className="blog-artical-page">
        <Card />
      </div>
    )
  }
}

export default BlogArtical
