import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  adduser,
  deleteUser,
  updateUsername,
  updateName,
} from './features/UserReducer'

function App() {
  const users = useSelector((state) => state.value)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newName, setNewName] = useState('')
  return (
    <div className="App">
      <>
        <div className="addUsers">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            onClick={() =>
              dispatch(
                adduser({ id: users[users.length - 1].id + 1, name, username }),
              )
            }
          >
            Add User
          </button>
        </div>
        <div className="displayUsers">
          {users.map((data) => (
            <div key={data.id}>
              <h1>{data.name}</h1>
              <h1>{data.username}</h1>
              <input
                type="text"
                placeholder="New Name"
                onChange={(e) => setNewName(e.target.value)}
              ></input>
              <button
                onClick={() =>
                  dispatch(updateName({ id: data.id, name: newName }))
                }
              >
                Update Name
              </button>
              <br />
              <br />
              <input
                type="text"
                placeholder="New Username"
                onChange={(e) => setNewUsername(e.target.value)}
              ></input>
              <button
                onClick={() =>
                  dispatch(
                    updateUsername({ id: data.id, username: newUsername }),
                  )
                }
              >
                Update username
              </button>
              <button onClick={() => dispatch(deleteUser({ id: data.id }))}>
                Delete User
              </button>
            </div>
          ))}
        </div>
      </>
    </div>
  )
}

export default App
