import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

const initialUsersPasswordList = [
  {
    id: uuidv4(),
    website: '',
    username: '',
    password: '',
  },
]

class App extends Component {
  state = {
    userWebsite: '',
    usersPasswordsList: initialUsersPasswordList,
    website: '',
    username: '',
    password: '',
  }

  onSubmitUserDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      usersPasswordsList: [...prevState.usersPasswordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  getuserWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  getUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  getUserPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {usersPasswordsList} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="password-manager-image"
          alt="app logo"
        />
        <div className="adding-password-bg-container">
          <form
            className="adding-password-card-container"
            onSubmit={this.onSubmitUserDetails}
          >
            <div className="user-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="registering-icon"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="user-input form-control"
                onChange={this.getuserWebsite}
              />
            </div>
            <div className="user-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="registering-icon"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="user-input form-control"
                onChange={this.getUserName}
              />
            </div>
            <div className="user-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="registering-icon"
                alt="password"
              />
              <input
                type="text"
                placeholder="Enter Password"
                className="user-input form-control"
                onChange={this.getUserPassword}
              />
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="adding-password-image"
            alt="password manager"
          />
        </div>

        <div className="user-passwords-bg-container">
          {usersPasswordsList.map(eachUserPassword => (
            <div key={eachUserPassword.id}>
              <p>{eachUserPassword.website}</p>
              <p>{eachUserPassword.username}</p>
              <p>{eachUserPassword.password}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
