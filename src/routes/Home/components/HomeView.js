import React, { Component } from 'react'
import Fetch, { baseUrl } from 'root/Fetch'

class HomeView extends Component {
  uploadFiles (e) {
    const file = e.target.files[0]
    const data = new FormData()
    data.append('file', file)
    Fetch('upload', data).then(response => {
      window.open(`${baseUrl}${response.data.path}`)
    })
  }
  render () {
    return (
      <div>
        <input type='file' onChange={e => this.uploadFiles(e)} />
      </div>
    )
  }
}

export default HomeView
