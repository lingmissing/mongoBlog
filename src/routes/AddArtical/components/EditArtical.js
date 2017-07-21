import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Tooltip } from 'antd'

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
          <li className="control-item left">
            <input type="file" className="upload-image-input" />
            <Tooltip placement="right" title="上传图片">
              <Icon type="picture" />
            </Tooltip>
          </li>
          <li className="control-item left" onClick={submitArtical}>
            <Tooltip placement="right" title="保存">
              <Icon type="save" />
            </Tooltip>
          </li>
          <li className="control-item left" onClick={() => togglePreview(false)}>
            <Tooltip placement="right" title="预览">
              <Icon type="scan" />
            </Tooltip>
          </li>
          <li className="control-item right">
            {artical.punish
              ? artical._id
                ? <span>
                  <Icon type="retweet" />发布更新
                  </span>
                : <span>
                  <Icon type="enter" />发布文章
                  </span>
              : <span>
                <Icon type="check" />已发布
                </span>}
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
