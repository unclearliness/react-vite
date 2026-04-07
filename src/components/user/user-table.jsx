import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../../services/api.services';

const UserTable = () => {
    // k bi render lai
    const [dataUser, setDataUser] = useState([]);
    useEffect(() => {
        loadUser()
        console.log("Init api")

    }, []);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUser();
        console.log("Check user: ", res.data)
        setDataUser(res.data)
    }

    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )

}
export default UserTable;