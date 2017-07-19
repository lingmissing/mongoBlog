import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogButton from 'components/BlogButton'
import marked from 'marked'
import './AddArtical.scss'
var highlightjs = require('highlight.js')

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
    this.state = {}
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

  render () {
    const {
      addArtical: { categoryList, articalInfo, artical },
      getDetail,
      saveArticalChange,
      submitArtical
    } = this.props
    return (
      <div className="add-artical">
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
            {/* <div dangerouslySetInnerHTML={{ __html: this.getHtml(artical.content || '') }} /> */}
          </div>
          <ul className="cat-list">
            {categoryList.map(item =>
              <li key={item._id} className="cat-item">
                {item.name}
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
          <div className="artical-title">
            <input type="text" value={artical.title} onChange={e => saveArticalChange(e, 'title')} />
          </div>
          <ul className="artical-control">
            <li className="control-item upload-image">
              <input type="file" />
              上传图片
            </li>
            <li className="control-item">预览</li>
            <li className="control-item">
              {artical.punish ? '未发布' : '已发布'}
            </li>
            <li onClick={submitArtical} className="control-item">
              保存
            </li>
          </ul>
          <div className="artical-content">
            <textarea
              className="artical-area"
              value={artical.content}
              onChange={e => saveArticalChange(e, 'content')}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AddArtical
