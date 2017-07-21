import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Icon } from 'antd'
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
          <p className="artical-info">
            <span className="info-detail">
              <Icon type="calendar" /> 发表于 2016-12-16
            </span>
            |
            <span className="info-detail">
              <Icon type="folder" /> 分类于 <Link>chrome插件</Link>
            </span>
          </p>
          <h1 className="artical-card-title">ss</h1>
        </header>
        <footer className="artical-footer">
          <ul className="tag-list">
            <li className="tag-item">
              <Link>hhhh</Link>
            </li>
            <li className="tag-item">
              <Link>hhhh</Link>
            </li>
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
