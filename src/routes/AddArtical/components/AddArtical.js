import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogButton from 'components/BlogButton'
import marked from 'marked'
import highlightjs from 'highlight.js'
import EditArtical from './EditArtical'
import { Icon } from 'antd'
import './AddArtical.scss'
import MarkedContent from '../../../components/MarkedContent'

class AddArtical extends Component {
  static propTypes = {
    getCatList: PropTypes.func,
    addArtical: PropTypes.object,
    getArticalByCategory: PropTypes.func,
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
    this.props.getCatList()
    this.props.getArticalByCategory()
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
      addArtical: { categoryList, articalInfo, artical },
      getDetail,
      saveArticalChange,
      submitArtical
    } = this.props
    return (
      <div className="add-artical-content">
        {this.state.writing
          ? <div className="add-artical">
            <div className="aside-artical">
              <div className="home-box">
                <BlogButton type="light" block>
                    回首页
                  </BlogButton>
              </div>
              <div className="add-cat-box">
                <span className="add-cat-btn">
                  <i className="icon-add" /> &nbsp;新建文集
                  </span>
                <div className="create-notebook-form">
                  <input type="text" className="create-input" />
                  <div className="button-list">
                    <span className="create-note-book-btn">提交</span>
                    <span className="cancle-btn">取消</span>
                  </div>
                </div>
              </div>
              <ul className="cat-list">
                {categoryList.map(item =>
                  <li key={item._id} className="cat-item">
                    {item.name}
                    <Icon type="setting" />
                  </li>
                  )}
              </ul>
            </div>
            <div className="middle-artical">
              <div className="create-artical">ss</div>
              <ul className="artical-list">
                {articalInfo.result.map(item =>
                  <li key={item._id} onClick={() => getDetail(item._id)}>
                    {item.title}
                  </li>
                  )}
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
          : <div className="artical-preview">
            <div className="artical-edit-content">
              <EditArtical
                togglePreview={this.togglePreview}
                artical={artical}
                submitArtical={submitArtical}
                saveArticalChange={saveArticalChange}
                />
            </div>
            <MarkedContent className="artical-preview-content" content={artical.content} />
          </div>}
      </div>
    )
  }
}

export default AddArtical
