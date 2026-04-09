import { useEffect, useState } from "react";
import UserForm from "../components/user/user-form";
import UserTable from "../components/user/user-table";
import { fetchAllUser } from "../services/api.services";

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);
    // dung de bat cac state hoac props, se so sanh voi dom de re-render lai
    useEffect(() => {
        loadUser()
        console.log("Init api")

    }, []);
    const loadUser = async () => {
        const res = await fetchAllUser();
        setDataUser(res.data)
    }


    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUser} />
        </div>
    )

}
export default UserPage;