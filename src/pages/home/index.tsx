import React, { useEffect, useState } from 'react';
import { getStudents } from '../../service/api';
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';


interface DataType {
    key: React.Key;
    sName:string;
    birthday: string;
    sex: string;
    deptName: string;
  }
function Home(props:any) {
  const [list, setList] = useState<DataType[]>([]);

  const columns:ColumnsType<DataType> = [
    {
        key:'sName',
        title:'姓名',
        dataIndex:'sName'
    },
    {
        key:'deptName',
        title:'班级',
        dataIndex:'deptName'
    },
    {
        key:'sex',
        title:'性别',
        dataIndex:'sex'
    },
    {
        key:'birthday',
        title:'年龄',
        dataIndex:'birthday'
    }
  ]
  useEffect(() => {
    getStudents({}).then(res => {
      console.log(res);
      if (Array.isArray(res)) setList(res);
    });
  }, []);
  return <Table dataSource={list} columns={columns} rowKey='id'/>;
}

export default Home;
