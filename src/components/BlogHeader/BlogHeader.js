import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './BlogHeader.scss'

class BlogHeader extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {
      height: 0
    }
  }

  componentWillMount () {
    setTimeout(() => {
      this.setState({
        height: 120
      })
    }, 500)
  }

  componentWillUnmount () {
    this.setState({
      height: 0
    })
  }

  render () {
    return (
      <header className="blog-header" style={{ height: this.state.height }}>
        <h1 className="blog-name">I am Oliver</h1>
        <ul className="home-list">
          <li className="home-item">
            <Link to="/archives">カタログ/（目录）</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default BlogHeader
