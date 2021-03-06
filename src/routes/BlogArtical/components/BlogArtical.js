import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card'
import './BlogArtical.scss'

class BlogArtical extends Component {
  static propTypes = {
    getArtical: PropTypes.func,
    blogArtical: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.props.getArtical()
  }

  componentWillUnmount () {}

  render () {
    const { getArtical, blogArtical: { resultInfo: { result } } } = this.props
    return (
      <div className="blog-artical-page">
        {result.map((item, index) => (
          <Card key={index} data={item} articalSearch={data => getArtical(1, data)} />
        ))}
      </div>
    )
  }
}

export default BlogArtical
