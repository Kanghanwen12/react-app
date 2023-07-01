import React from 'react';

import FormDemo from './formList/list'
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};

const FormDisabledDemo = () => {
  const formItem = [
    {
      type: 'Input',
      label: '姓名',
      name: 'names',
      rules: [
        () => ({
          validator(_, value) {
            if (value && value.length > 20) {
              return Promise.reject(new Error('促销名称最多不能超过20个字'));
            }
            return Promise.resolve();
          },
        }),
        {
          required: true, message: '促销名称不能为空!',
          whitespace: true
        }
      ]
    },
    {
      type: 'Chekbox',
      label: 'Chekbox',
      name: 'Chekbox',
      rules: [{required: true, message: 'Chekbox不能为空!'}],
      option: [
        {label: '测试门店', value: '1'},{label: '测试商家', value: '2'}
      ]
    },
    {
      type: 'Radio',
      label: 'Radio',
      name: 'Radio',
      rules: [{required: true, message: 'Radio不能为空!'}],
      option: [
        {label: '满减', value: 1}, {label: '极速达', value: 2}, {label: '新人首单免运费', value: 3}
      ]
    },
    {
      type: 'RangePicker',
      label: '活动时段',
      name: 'activeStartTime',
      rules: [{required: true, message: 'RangePicker不能为空!'}],
    },

  ]
  const onFinish = (val) =>{
    console.log(val,'val')
  }
  return (
    <>
      <FormDemo
        formItemLayouts = {formItemLayout}
        formItem = {formItem}
        onSubmit={onFinish}
      />
    </>
  );
};
export default FormDisabledDemo
