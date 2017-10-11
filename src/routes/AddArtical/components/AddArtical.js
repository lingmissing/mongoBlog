import React, { Component } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import highlightjs from 'highlight.js'
import EditArtical from './EditArtical'
import { Icon } from 'antd'
import './AddArtical.scss'
import MarkedContent from '../../../components/MarkedContent'

class AddArtical extends Component {
  static propTypes = {
    addArtical: PropTypes.object,
    getArtical: PropTypes.func,
    getDetail: PropTypes.func,
    saveArticalChange: PropTypes.func,
    submitArtical: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      writing: true
    }
    this.togglePreview = this.togglePreview.bind(this)
  }

  componentWillMount () {
    this.props.getArtical()
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
  togglePreview (status) {
    this.setState({
      writing: status
    })
  }
  render () {
    const {
      addArtical: { articalInfo, artical },
      getDetail,
      saveArticalChange,
      submitArtical
    } = this.props
    return (
      <div className="add-artical-content">
        {this.state.writing ? (
          <div className="add-artical">
            <div className="middle-artical">
              <ul className="artical-list">
                {articalInfo.result.map(item => (
                  <li key={item._id} onClick={() => getDetail(item._id)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="main-artical">
              <EditArtical
                togglePreview={this.togglePreview}
                artical={artical}
                submitArtical={submitArtical}
                saveArticalChange={saveArticalChange}
              />
            </div>
          </div>
        ) : (
          <div className="artical-preview">
            <div className="artical-edit-content">
              <EditArtical
                togglePreview={this.togglePreview}
                artical={artical}
                submitArtical={submitArtical}
                saveArticalChange={saveArticalChange}
              />
            </div>
            <MarkedContent className="artical-preview-content" content={artical.content} />
          </div>
        )}
      </div>
    )
  }
}

export default AddArtical
