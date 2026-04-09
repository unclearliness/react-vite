import { Button, Input, Modal, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.services';
const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    // async tra ve promise
    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create user successfully",

                description: "Crate success"
            })
        } else {
            notification.error({
                message: "Failed to create user",
                description: JSON.stringify(res.message)
            })
        }
        setIsModalOpen(false)
    };
    return (
        <div className='user-form' style={{ margin: "20px 0" }}>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <h3>Table Users</h3>
                <Button onClick={() => { setIsModalOpen(true) }} type="primary">Create User</Button>
            </div>
            <Modal title="Create User" open={isModalOpen} onOk={() => { handleSubmitBtn() }}
                onCancel={() => { setIsModalOpen(false) }} maskClosable={false} okText={"Create"} >
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                        <span>Full Name</span>
                        <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                    </div>
                </div>
            </Modal>

        </div>

    )
}
export default UserForm;