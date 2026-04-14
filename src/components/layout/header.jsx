import { BookOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './header.css';


const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/users">Users</Link>,
            key: 'user',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to="/books">Books</Link>,
            key: 'product',
            icon: <BookOutlined />,
        },

    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header;