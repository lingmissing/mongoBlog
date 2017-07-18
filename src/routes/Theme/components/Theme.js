import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogButton from 'components/BlogButton'
import './Theme.scss'

class Theme extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <div>
        <BlogButton>hell</BlogButton>
        <BlogButton disabled>hell</BlogButton>
        <BlogButton type="light">hell</BlogButton>
        <BlogButton type="primary" block>
          hell
        </BlogButton>
      </div>
    )
  }
}

export default Theme
