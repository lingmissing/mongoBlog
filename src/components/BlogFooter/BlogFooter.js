import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import './BlogFooter.scss'

class BlogFooter extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentWillUnmount () {}

  render () {
    return (
      <footer className="foot">
        <div className="foot-copy">
          © 2016-2017 Oliver Wang
          <a href="http://www.beianbaba.com/icp/ochukai.me" target="view_window">
            （鲁ICP备16006255号-1）
          </a>
          <Icon type="heart" />
        </div>
      </footer>
    )
  }
}

export default BlogFooter
