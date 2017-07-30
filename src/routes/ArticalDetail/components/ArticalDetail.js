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
    const { articalDetail: { data: { title, content, date } } } = this.props
    return (
      <div className="artical-detail">
        <div className="artical-detail-content">
          <p className="artical-small-title">
            <Icon type="calendar" /> 发表于{date}
          </p>
          <h1 className="artical-detail-title">
            {title}
          </h1>
          <MarkedContent content={content} />
        </div>
      </div>
    )
  }
}

export default ArticalDetail
