import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card'
import './BlogArtical.scss'

class BlogArtical extends Component {
  static propTypes = {
    getArtical: PropTypes.func,
    blogArtical: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.props.getArtical(1, 10)
  }

  componentWillUnmount () {}

  render () {
    const { blogArtical: { resultInfo: { result, total } } } = this.props
    return (
      <div className="blog-artical-page">
        {result.map(item => <Card key={item._id} data={item} />)}
      </div>
    )
  }
}

export default BlogArtical
