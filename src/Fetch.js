import axios from 'axios'
export const baseUrl = 'http://localhost:3007/'
export default function Fetch (url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${url}`, data)
      .then(response => response.data)
      .then(response => {
        if (response.code === 0) {
          resolve(response)
        } else {
          reject(response)
        }
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
