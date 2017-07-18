import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogButton from 'components/BlogButton'
import './AddArtical.scss'

class AddArtical extends Component {
  static propTypes = {
    getCatList: PropTypes.func,
    addArtical: PropTypes.object,
    getArticalByCategory: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.props.getCatList()
    this.props.getArticalByCategory()
  }

  componentWillUnmount () {}

  render () {
    const { addArtical: { categoryList } } = this.props
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
          </div>
          <ul className="cat-list">
            {categoryList.map(item =>
              <li key={item._id}>
                {item.name}
              </li>
            )}
          </ul>
        </div>
        <div className="middle-artical">2</div>
        <div className="main-artical">3</div>
      </div>
    )
  }
}

export default AddArtical
