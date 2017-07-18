import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'root/common'
import './BlogButton.scss'

class BlogButton extends Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { children, className, type, block, disabled } = this.props
    const blogClass = classNames({
      'blog-btn': true,
      'blog-btn-light': type === 'light',
      'blog-btn-primary': type === 'primary',
      'blog-btn-block': block,
      [className]: className
    })
    return (
      <button className={blogClass} disabled={disabled}>
        {children}
      </button>
    )
  }
}

export default BlogButton
