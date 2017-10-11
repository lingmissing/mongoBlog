import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import MarkedContent from '../../../components/MarkedContent'
import './ArticalDetail.scss'

class ArticalDetail extends Component {
  static propTypes = {
    getDetail: PropTypes.func,
    location: PropTypes.object,
    articalDetail: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    console.log(this.props)
    const { id } = this.props.location.query
    this.props.getDetail(id)
  }

  componentWillUnmount () {}

  render () {
    const { articalDetail: { data: { title, content, date, category, tag } } } = this.props
    return (
      <div className="artical-detail">
        <div className="artical-detail-content">
          <p className="artical-small-title">
            <Icon type="calendar" /> 发表于{date}&nbsp; | &nbsp;<span>分类于{category}</span>
          </p>
          <h1 className="artical-detail-title">{title}</h1>
          <ul className="artical-detail-tag">
            {tag && tag.split(',').map(item => <li key={item}>{`#${item}`}</li>)}
          </ul>
          <MarkedContent content={content} />
        </div>
      </div>
    )
  }
}

export default ArticalDetail
