import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "acc",
  initialState: {
    /*convert string to bool using equality*/
    loggedIn: false,
    id: "localStorage.getItem('id')",
    jwt: "localStorage.getItem('jwt')",
    name: "",
    email: "",
  },
  reducers: {
    signIn: (state, action) => {
      /*save the name and password from the state payload passed in. Pass in
            state, name, password into authenticator*/
      const { _id, jwt, name, email } = action.payload;

    //   localStorage.setItem('loggedIn','true');
    //   localStorage.setItem('id',_id);
    //   localStorage.setItem('jwt',jwt);
      state.loggedIn = true;
      state.id = _id;
      state.jwt = jwt;
      state.name = name;
      state.email = email;
    },
    signOut: (state) => {
      //update local storage to false then convert LoggedIn and admin to bool
    //   localStorage.setItem('loggedIn','false');
    //   localStorage.setItem('id','');
    //   localStorage.setItem('jwt','');
      state.loggedIn = false;
      state.id = "localStorage.getItem('id')";
      state.jwt = "localStorage.getItem('jwt')";
      state.email = "";
      state.name = "";
    },
  },
});

export default slice.reducer;
export const { signIn, signOut } = slice.actions;