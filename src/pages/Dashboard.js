import React from 'react';
import './dashboard.css';
import { Column } from '@ant-design/plots';
import {BsArrowDownRight} from 'react-icons/bs';
import { Table } from 'antd';

const Dashboard = () => {

  const columns = [

    {
      title: 'Sr.No',
      dataIndex: 'key',
    },
    
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [
    {
      key: '1',
      name: 'John Brown',
      product: 32,
      status: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      product: 42,
      status: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      product: 32,
      status: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      product: 99,
      status: 'Sydney No. 1 Lake Park',
    },
  ];
  

  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'April',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
  ];
  const config = {
    
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      
       return '#ffd333';
     },

    label: {
      
      position: 'middle',
     
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Amount',
      },
    },

    
  };

  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3' >
      <div className='d-flex justify-content-between  flex-grow-1 bg-white p-3 rounded-3'>
        <div>
          <p>Total</p>
          <h3>$1300</h3>
        </div>
        <div className='d-flex flex-column align-items-end'>
          <h6 ><BsArrowDownRight/>34</h6>
          <p className='mb-0'>Compare to April 2023</p>
        </div>
      </div>
      <div className='d-flex justify-content-between  flex-grow-1 bg-white p-3 rounded-3'>
        <div>
          <p>Total</p>
          <h3>$1300</h3>
        </div>
        <div className='d-flex flex-column align-items-end'>
          <h6 ><BsArrowDownRight/>34</h6>
          <p className='mb-0'>Compare to April 2023</p>
        </div>
      </div>
      <div className='d-flex justify-content-between  flex-grow-1 bg-white p-3 rounded-3'>
        <div>
          <p>Total</p>
          <h3>$1300</h3>
        </div>
        <div className='d-flex flex-column align-items-end'>
          <h6 ><BsArrowDownRight/>34</h6>
          <p className='mb-0'>Compare to April 2023</p>
        </div>
      </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Income statics</h3>
        <div>
        <Column {...config} />
        </div>
        <div className='mt-4'>
          <h3 className='mb-4'>Recent order</h3>
          <div>
          <Table
               columns={columns}
        dataSource={data1}
      />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
