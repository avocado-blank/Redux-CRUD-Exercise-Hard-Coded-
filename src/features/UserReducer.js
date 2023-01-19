import { createSlice } from '@reduxjs/toolkit'
import { UsersData } from '../FakeData'

const userList = UsersData

export const usersSlice = createSlice({
  name: 'users',
  initialState: { value: userList },
  reducers: {
    adduser: (state, action) => {
      state.value.push(action.payload)
      console.log(action.payload)
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((data) => {
        return data.id !== action.payload.id
      })
      console.log(action.payload.id)
    },
    updateUsername: (state, action) => {
      state.value.map((data) => {
        if (data.id === action.payload.id) {
          data.username = action.payload.username
        }
      })
    },
    updateName: (state, action) => {
      state.value.map((data) => {
        if (data.id === action.payload.id) {
          data.name = action.payload.name
        }
      })
    },
  },
})

export const {
  adduser,
  deleteUser,
  updateUsername,
  updateName,
} = usersSlice.actions
export default usersSlice.reducer
