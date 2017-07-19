import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, toolTip } from 'antd'
debugger

class EditArtical extends Component {
  static propTypes = {
    artical: PropTypes.object,
    saveArticalChange: PropTypes.func,
    submitArtical: PropTypes.func,
    togglePreview: PropTypes.func
  }
  render () {
    const { artical, submitArtical, saveArticalChange, togglePreview } = this.props
    return (
      <div className="edit-artical">
        <div className="artical-title">
          <input type="text" value={artical.title} onChange={e => saveArticalChange(e, 'title')} />
        </div>
        <ul className="artical-control">
          <li className="control-item upload-image">
            <Icon type="search" />
            <input type="file" />
            上传图片
          </li>
          <li className="control-item" onClick={() => togglePreview(false)}>
            预览
          </li>
          <li className="control-item">
            {artical.punish ? '未发布' : '已发布'}
          </li>
          <li onClick={submitArtical} className="control-item">
            保存
          </li>
        </ul>
        <div className="artical-content">
          <textarea className="artical-area" value={artical.content} onChange={e => saveArticalChange(e, 'content')} />
        </div>
      </div>
    )
  }
}

export default EditArtical
