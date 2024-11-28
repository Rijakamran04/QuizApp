import { UserPayloadObject } from '../interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MainState {
  userName: string
  userEmail: string | null
  userPoints: number // Store user points here
  isFieldFocusRegistered: boolean
  purchasedItems: string[] // Add a purchasedItems array
}

const initialState: MainState = {
  userName: 'John Doe',
  userEmail: 'doe.doe.doe@example.com',
  userPoints: 500, // Initial points (can be dynamic based on your logic)
  isFieldFocusRegistered: false,
  purchasedItems: [], // Initialize the purchasedItems array as empty
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayloadObject>) => {
      state.userName = action.payload.name
      state.userEmail = action.payload.email
    },
    incrementPoints: (state, action: PayloadAction<number>) => {
      state.userPoints += action.payload
    },
    decrementPoints: (state, action: PayloadAction<number>) => {
      state.userPoints -= action.payload
    },
    addPurchasedItem: (state, action: PayloadAction<string>) => {
      // Add the purchased item to the array (if not already purchased)
      if (!state.purchasedItems.includes(action.payload)) {
        state.purchasedItems.push(action.payload)
      }
    },
  },
})

export const { setUser, incrementPoints, decrementPoints, addPurchasedItem } = mainSlice.actions

export default mainSlice.reducer  