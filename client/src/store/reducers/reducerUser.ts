import axios from "axios";
import { User } from "../../interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const user: User[] = [];
// hàm lấy tất cả user
export const getUser: any = createAsyncThunk("users/getAllUsers", async () => {
  const response = await axios.get("http://localhost:8080/user");
  return response.data;
});
// hàm thêm mới user
export const addUser: any = createAsyncThunk("users/addUser", async (user) => {
  const response = await axios.post("http://localhost:8080/user", user);
  return response.data;
});

// hàm xóa user

export const removeUser: any = createAsyncThunk("users/removeUser", async (id) => {
 await axios.delete(`http://localhost:8080/user/${id}`);
  return id;
});
export const editUser:any= createAsyncThunk("users/editUser",async(id)=>{
  const response = await axios.get(`http://localhost:8080/user/${id}`);
  return response.data;
})



const reducerUser = createSlice({
  name: "user",
  initialState: {
    user: user,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        //trạng thái chờ lấy dữ liệu
       
      })
      .addCase(getUser.fulfilled, (state: any, action) => {
        // trạng thái lấy dữ liệu thành công
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        // trạng thái lấy dữ liệu thất bại
      })
      .addCase(addUser.fulfilled,(state, action)=>{
        state.user.push(action.payload)
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.user = state.user.filter((user:any) => user.id!== action.payload);
      })
      .addCase(editUser.fulfilled,(state,action) =>{
        state.user = state.user.filter((user:any) => user.id!== action.payload.id)
        state.user.push(action.payload)
      })
  },
});

// xuất ra các action

// xuất reducer
export default reducerUser.reducer;
