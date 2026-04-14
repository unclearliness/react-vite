import { Button, Input, Modal, notification } from 'antd';
import { useState } from "react";
import { createUserAPI } from '../../services/api.services';

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "Create user successfully",

                description: "Crate success"
            })

            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "Failed to create user",
                description: JSON.stringify(res.message)
            })
        }
    };
    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }

    return (
        <div className='user-form' style={{ margin: "20px 0" }}>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <h3>Table Users</h3>
                <Button onClick={() => { setIsModalOpen(true) }} type="primary">Create User</Button>
            </div>
            <Modal title="Update user" open={isModalOpen} onOk={() => { handleSubmitBtn() }}
                onCancel={() => { setIsModalOpen(false) }} maskClosable={false} okText={"Save"} >
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
export default UpdateUserModal;