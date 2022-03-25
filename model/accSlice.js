import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "acc",
  initialState: {
    /*convert string to bool using equality*/
    loggedIn: false,
    id: "localStorage.getItem('id')",
    name: "",
    email: "",
    role: "",
    addictions: [],
    goals: [],
    routine: []
  },
  reducers: {
    signIn: (state, action) => {
      /*save the name and password from the state payload passed in. Pass in
            state, name, password into authenticator*/
      const { _id, name, email, role, addictions, goals, routine } = action.payload;

    //   localStorage.setItem('loggedIn','true');
    //   localStorage.setItem('id',_id);
    //   localStorage.setItem('jwt',jwt);
      state.loggedIn = true;
      state.id = _id;
      state.name = name;
      state.email = email;
      state.role = role;
      state.addictions = addictions;
      state.goals = goals;
      state.routine = routine;
    },
    signOut: (state) => {
      //update local storage to false then convert LoggedIn and admin to bool
    //   localStorage.setItem('loggedIn','false');
    //   localStorage.setItem('id','');
    //   localStorage.setItem('jwt','');
      state.loggedIn = false;
      state.id = "localStorage.getItem('id')";
      state.email = "";
      state.name = "";
    },
    addAddiction: (state) => {
      const { addiction } = action.payload;
      state.addictions.push(addiction);
    },
    editAddiction: (state) =>{
      const { name } = action.payload;
      state.addictions.name = name;
    }
  }
});

export default slice.reducer;
export const { signIn, signOut, addAddiction, editAddiction } = slice.actions;