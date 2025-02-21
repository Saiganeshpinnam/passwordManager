import {Component} from 'react'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="password-manager-image"
        />
        <div className="adding-password-bg-container">
          <form className="adding-password-card-container">
            <div className="user-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="registering-icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="user-input form-control"
              />
            </div>
            <div className="user-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="registering-icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="user-input form-control"
              />
            </div>
            <div className="user-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="registering-icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="user-input form-control"
              />
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="adding-password-image"
          />
        </div>

        <div className="user-passwords-bg-container">Hello</div>
      </div>
    )
  }
}

export default App
