import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: []
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers (state, action) {
      state.users = action.payload
    },
    addUser (state, action) {
      state.users.push(action.payload)
    },
    editUser (state, action) {
      state.users = state.users.map(user => {
        if (user.id === action.payload.id) { return action.payload }
        return user
      })
    },
    deleteUser (state, action) {
      state.users = state.users.filter(user => action.payload !== user.id)
    }
  }
})

export const { addUsers, addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer
