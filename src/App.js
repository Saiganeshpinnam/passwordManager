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
      website,
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
    const {usersPasswordsList} = this.state
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
    const isCountZero = count
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
            <h1 className="passwords-heading">Add New Passwords</h1>
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
            <div className="btn-container">
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="adding-password-image"
            alt="password manager"
          />
        </div>

        <div className="user-passwords-bg-container">
          <div className="passwords-header">
            <p className="your-passwords-heading">
              Your Passwords <span className="passwords-count">{count}</span>
            </p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-icon"
                alt="search"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                placeholder="Search"
                value={searchInput}
                className="search-placeholder"
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
            <label htmlFor="inputLabel" className="show-passwords-label">
              Show Passwords
            </label>
          </div>

          {isCountZero === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <h1 className="passwords-heading">No Passwords</h1>
            </div>
          ) : (
            <div className="user-given-passwords-list-container">
              {searchResults.map(eachUserPassword => (
                <div
                  key={eachUserPassword.id}
                  className="each-password-container"
                >
                  <h1 className="user-initial">
                    {eachUserPassword.username[0]}
                  </h1>
                  <div className="web-name-password-container">
                    <p className="user-details">{eachUserPassword.website}</p>
                    <p className="user-details">{eachUserPassword.username}</p>
                    {showPasswords ? (
                      <p className="user-details">
                        {eachUserPassword.password}
                      </p>
                    ) : (
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                        alt="stars"
                        className="encrypted-password-image"
                      />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => this.deletePassword(eachUserPassword.id)}
                    className="delete-btn"
                    data-testid="delete"
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
          )}
        </div>
      </div>
    )
  }
}

export default App
