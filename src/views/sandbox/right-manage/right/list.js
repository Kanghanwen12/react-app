import { Table, Tag, Space } from 'antd';
import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import { ChildList, DeleteList, aditList } from '../../../../util/api'



const List = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "权限名称",
      dataIndex: "title",
      key: "title",
      width: "12%",
    },
    {
      title: "权限路径",
      dataIndex: "key",
      width: "30%",
      key: "key",
      render: (key) => (
        <>
          <Tag color="blue" key={key}>
            {key}
          </Tag>
        </>
      ),
    },
    {
      title: "操作",
      dataIndex: "address",
      width: "30%",
      key: "address",
      render: (_, record) => (
        <Space size="middle">
          {record.pagepermisson === 1 ? (
            <a onClick={() => adit(record)}>修改为开</a>
          ) : (
            <a onClick={() => adit(record)}>修改为关</a>
          )}
          <a onClick={() => del(record)}>删除</a>
        </Space>
      ),
    },
  ];
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    ChildList({}).then(res =>{
        res.data[0].children = null
        res.data.map((item) => {
          if(!item.children || item.children.length === 0){
            item.children = null
          }
        })
        setDataSource(res.data)
      })
  }, [])

  const del = (record) => {
    console.log(record);
    DeleteList({id:record.id}).then(res => {
      console.log(res)
        setDataSource(dataSource.fifter(data => data.id !== record.id))
      }).catch(res =>{
        console.log(res)
        console.log(11)
      })
    // axios.delete(`/rights/${record.id}`).then(res =>{
    //   setDataSource(dataSource.fifter(data => data.id !== record.id))
    // })

  };
  const adit = (item) => {
    console.log(item);
    item.pagepermisson = item.pagepermisson === 1 ? 0 : 1
    setDataSource([...dataSource])
    aditList(item.id,{pagepermisson: item.pagepermisson}).then(res => {
      console.log(res)
    })
      // axios.patch(`/rights/${item.id}`,{
      //   pagepermisson: item.pagepermisson
      // }).then(res =>{

      // })



  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={
          {
            pageSize: 5,
          }
        }
      />
    </>
  );
};

export default List;
