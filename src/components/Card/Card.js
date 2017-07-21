import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './Card.scss'

class Card extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <artical className="artical-card">
        <header className="artical-header">
          <span className="update-time">2011-11-11-11</span>
          <h1 className="artical-card-title">ss</h1>
        </header>
        <footer className="artical-footer">
          <ul className="tag-list">
            <li className="tag-item">
              <Link>hhhh</Link>
            </li>
          </ul>
        </footer>
      </artical>
    )
  }
}

export default Card
