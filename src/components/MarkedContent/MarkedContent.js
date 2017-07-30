import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MarkedContent.scss'
import './highlignt.css'
import marked from 'marked'
import highlightjs from 'highlight.js'

class MarkedContent extends Component {
  static propTypes = {
    content: PropTypes.string,
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  getHtml (content) {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return highlightjs.highlightAuto(code).value
      }
    })
    return marked(content)
  }

  render () {
    const { content, className } = this.props
    return <div className={`echo ${className}`} dangerouslySetInnerHTML={{ __html: this.getHtml(content || '') }} />
  }
}

export default MarkedContent
