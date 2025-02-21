import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

const initialUsersPasswordList = []

class App extends Component {
  state = {
    usersPasswordsList: initialUsersPasswordList,
    website: '',
    username: '',
    password: '',
    count: 0,
    searchInput: '',
    showPasswords: false,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
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
      count: prevState.count + 1,
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

  deletePassword = id => {
    const {usersPasswordsList, count} = this.state
    const filteredUsersPasswordData = usersPasswordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState(prevState => ({
      usersPasswordsList: filteredUsersPasswordData,
      count: prevState.count - 1,
    }))
  }

  showUserPasswords = () => {
    this.setState(prevState => ({
      showPasswords: !prevState.showPasswords,
    }))
  }

  render() {
    const {usersPasswordsList, searchInput, count, showPasswords} = this.state
    const searchResults = usersPasswordsList.filter(eachPasswordDetails =>
      eachPasswordDetails.website.includes(searchInput),
    )
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
          <div className="passwords-header">
            <p>Your Passwords {count}</p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-icon"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="passwords-header-separator" />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="inputLabel"
              onClick={this.showUserPasswords}
            />
            <label htmlFor="inputLabel">Show Passwords</label>
          </div>

          <div className="user-given-passwords-list-container">
            {searchResults.map(eachUserPassword => (
              <div
                key={eachUserPassword.id}
                className="each-password-container"
              >
                <h1 className="user-initial">{eachUserPassword.username[0]}</h1>
                <div>
                  <p>{eachUserPassword.website}</p>
                  <p>{eachUserPassword.username}</p>
                  {showPasswords ? (
                    <p>{eachUserPassword.password}</p>
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      alt="stars"
                    />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => this.deletePassword(eachUserPassword.id)}
                  className="delete-btn"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    alt="delete"
                    className="delete-icon"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
