import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const useFetch = (user) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!user) return;

    const getUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (!response.ok) throw new Error("No se pudo obtener los datos del usuario");

        const data = await response.json();
        dispatch(addUser(data));
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [user]);

  return userData;
};

export default useFetch;





