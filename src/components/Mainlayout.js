
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import React, { useState } from 'react';
import {AiOutlineDashboard} from 'react-icons/ai';
import {RiProductHuntLine} from 'react-icons/ri';
import {BsDatabaseFillAdd, BsCart2, BsBellFill} from 'react-icons/bs'
import {MdOutlinePeopleAlt, MdOutlineContactPhone} from 'react-icons/md';
import {TiThListOutline} from 'react-icons/ti';
import {FcSettings} from 'react-icons/fc';
import {CgNotes} from 'react-icons/cg';
import {SiBrandfolder, SiBloglovin} from 'react-icons/si';
import {BiCategory, BiHorizontalRight,BiHorizontalLeft } from 'react-icons/bi'
import { Navigate, useNavigate, Outlet } from 'react-router-dom';



const { Header, Sider, Content } = Layout;


const Mainlayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const Navigate = useNavigate();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >
                    <h3 className='text-center py-3 mb-0 fs-5'>
                    <span className='sm-logo'>AD</span>
                    <span className='lg-logo'>Admin Dash</span></h3>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({key}) => {
                        if (key === 'signout'){

                        }else{
                            Navigate(key)
                        }
                    }}



                    items={[
                        {
                            key: '1',
                            icon: <AiOutlineDashboard className='fs-4'/>,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customer',
                            icon: <MdOutlinePeopleAlt className='fs-4'/>,
                            label: 'Customer',
                        },
                        {
                            key: 'catalog',
                            icon: <BsDatabaseFillAdd className='fs-4'/>,
                            label: 'Catalog',
                            children : [
                                {
                                    key: 'Product',
                                    icon: <RiProductHuntLine className='fs-4'/>,
                                    label: 'Add Product',
                                },
                                {
                                    key: 'productList',
                                    icon: <TiThListOutline className='fs-4'/>,
                                    label: 'Product List',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className='fs-4'/>,
                                    label: 'Brand List',
                                },
                                {
                                    key: 'category',
                                    icon: <BiCategory className='fs-4'/>,
                                    label: 'Category',
                                },
                            ]

                            
                        },
                        {
                            key: 'orders',
                            icon: <BsCart2 className='fs-4'/>,
                            label: 'Orders',
                        },

                        {
                            key: 'blog',
                            icon: <SiBloglovin className='fs-4'/>,
                            label: 'Blogs',
                            children: [
                                {
                                    key:'blog-list',
                                    icon:<SiBloglovin className='fs-4'/>,
                                    label:'Blog List'
                                },
                                {
                                    key:'blog-category',
                                    icon:<SiBloglovin className='fs-4'/>,
                                    label:'Blog Category'
                                }
                            ]
                        },
                        {
                            key: 'enqueries',
                            icon: <MdOutlineContactPhone className='fs-4'/>,
                            label: 'Enqueries',
                        },

                        {
                            key: 'setting',
                            icon: <FcSettings className='fs-4'/>,
                            label: 'Setting',
                        },

                        {
                            key: 'notes',
                            icon: <CgNotes className='fs-4'/>,
                            label: 'Notes',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className='d-flex justify-content-between heading ps-3 pe-5'   >
                    
                    {React.createElement(collapsed ? BiHorizontalRight : BiHorizontalLeft, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}

                    <div className='d-flex gap-3 align-item-center'>
                    <div className='position-relative badg'>
                        <BsBellFill/>
                        <span className='badg-a badge bg-warning rounded-circle p-1 position-absolute'>3</span>
                    </div>


                    <div className='d-flex gap-3 align-item-center'>
                    <div className='profile_pic '>
                        <img className='profile_pic ' src='https://th.bing.com/th/id/R.0de849455e8b26a86ed20c7ede549de0?rik=6qgpqRjH9ZfUFA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_266351.png&ehk=MGAevLueHXm4kBUecqJpFIory4vHyHTATf4kHUQsOFM%3d&risl=&pid=ImgRaw&r=0' alt='Profile pic'></img>
                    </div>
                    <div>
                        <h5 className='mb-0'>name of the person</h5>
                        <p className='mb-0'>Email address of the person</p>
                    </div>
                    </div>
                    </div>
                    
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        backgroundColor: 'white',
                        
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Mainlayout;
