import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        username: '',
        followers: '',
        repositories: '',
        image: ''
    },
    reducers: {
        addUser: (state, action) => {
            const { name, login, followers, public_repos, avatar_url } = action.payload;
            state.name = name;
            state.username = login, 
            state.followers = followers,
            state.repositories = public_repos,
            state.image = avatar_url
        }
    }
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer