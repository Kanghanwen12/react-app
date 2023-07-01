import React, { useEffect } from 'react';
import {
 Form, Input, Radio, Select, DatePicker, Button
} from "antd";
import moment from 'moment';
const { RangePicker } = DatePicker;

const FormDisabledDemo = (props) => {
  console.log(props,'props')
  const { onSubmit } = props;
  const formItemLayout = props.formItemLayouts
  const formItem = props.formItem;
  useEffect(()=> {
    // console.log(props,'props')
  },[])


  const inputs = (item) =>{
    return (
      <Form.Item
        label= {item.label}
        name={item.name}
        rules={item.rules || []}
      >
        <Input />
      </Form.Item>
    )
  }

  const chekbox = (item) =>{
    return (
      <Form.Item
        name= {item.name}
        label= {item.label}
        rules={item.rules || []}
      >
        <Select placeholder="请选择门店范围"
                allowClear
                mode="tags"
                showArrow={true}
                style={{width: 300}}
        >
          {
            item.option.map(c => (
              <Select.Option value={c.value} key={c.value}
              >
                {c.label}
              </Select.Option>
            ))
          }
        </Select>
      </Form.Item>
    )
  }

  const radio = (item) => {
    return (
      <Form.Item
        name= {item.name} label= {item.label}
        rules={item.rules || []}
      >
        <Radio.Group options={item.option} />
      </Form.Item>
    )
  }

  const rangePickers = (item) => {
    return (
      <Form.Item
        name= {item.name} label= {item.label}
        rules={item.rules || []}
      >
        <RangePicker
          format="YYYY-MM-DD HH:mm:ss"
          showTime={{ defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')] }} />
      </Form.Item>
    )
  }
  const itemForm = () => {
    if(!formItem || formItem.length === 0) {return []}
    const arrItem = []
     formItem.map((item)=> {
      switch (item.type) {
        case 'Input':
          arrItem.push(inputs(item))
          break;
        case 'Chekbox':
          arrItem.push(chekbox(item))
          break;
        case 'Radio':
          arrItem.push(radio(item))
          break;
        case 'RangePicker':
          arrItem.push(rangePickers(item))
          break;
        default:
          break
      }
    })
    return arrItem;
  }
  const onFinish = (values) =>{
    // console.log(values,'values')
    onSubmit(values)

  }

    return (
    <Form
      layout="horizontal"
      {...formItemLayout}
      onFinish={onFinish}
    >
      {itemForm()}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
export default FormDisabledDemo
