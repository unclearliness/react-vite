import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './update.user.form';

const UserTable = (props) => {
    const { dataUsers } = props;
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a href='/#'>{record._id}</a>
                </>
            ),
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined style={{ color: "blue", cursor: "pointer" }} />
                    <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
                </div>
            ),
        },
    ];


    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal />
        </>
    )

}
export default UserTable;