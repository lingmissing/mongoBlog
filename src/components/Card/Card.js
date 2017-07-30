import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Icon } from 'antd'
import './Card.scss'

class Card extends Component {
  static propTypes = {
    data: PropTypes.object
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentWillUnmount () {}

  toDtail () {
    this.context.router.push(`/archives/artical-detail?id=${this.props.data._id}`)
  }

  render () {
    const { data } = this.props
    return (
      <artical className="artical-card">
        <header className="artical-header">
          <p className="artical-info">
            <span className="info-detail">
              <Icon type="calendar" /> 发表于 {data.date}
            </span>
            |
            <span className="info-detail">
              <Icon type="folder" /> 分类于 <Link>{data.category}</Link>
            </span>
          </p>
          <h1 className="artical-card-title" onClick={() => this.toDtail()}>
            {data.title}
          </h1>
        </header>
        <footer className="artical-footer">
          <ul className="tag-list">
            {data.tag &&
              data.tag.split(',').map((item, index) =>
                <li className="tag-item" key="index">
                  <Link>#hhhh</Link>
                </li>
              )}
          </ul>
        </footer>
      </artical>
    )
  }
}

export default Card
