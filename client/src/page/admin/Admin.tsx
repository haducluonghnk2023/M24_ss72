import { useDispatch, useSelector } from "react-redux";
import { getUser, addUser, removeUser } from "../../store/reducers/reducerUser";
import { useEffect } from "react";
import { User } from "../../interface";
export default function Admin() {
  // lấy dữ liệu về
  const getData: any = useSelector((state) => state);
  //   console.log(getData);

  const dispatch = useDispatch();
  //   console.log("data", getData);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  // hàm thêm user
  const addNewUser = () => {
    let newUser = {
      name: "minh quang",
    };
    dispatch(addUser(newUser));
  };
  const handleDeleteUser = (id: number) => {
    dispatch(removeUser(id));
  };
  const handleEditUser = (id: number) => {
    console.log("id", id);
  };

  return (
    <div>
      {getData.reducerUser.user.map((user: User) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => handleDeleteUser(user.id)}>xóa</button>
          <button onClick={() => handleEditUser(user.id)}>sửa</button>
        </li>
      ))}
      <button onClick={addNewUser}>add User</button>
    </div>
  );
}
