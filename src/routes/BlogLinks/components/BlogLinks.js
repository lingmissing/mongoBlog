import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BlogLinks.scss'

class BlogLinks extends Component {
  static propTypes = {
    getAllLink: PropTypes.func,
    blogLinks: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.props.getAllLink()
  }

  componentWillUnmount () {}

  render () {
    const { blogLinks: { links } } = this.props
    return (
      <div>
        <h1>BlogLinks</h1>
        {links.map(item =>
          <li key="item._id">
            <a href={item.href}>
              {item.name}
            </a>
          </li>
        )}
      </div>
    )
  }
}

export default BlogLinks
