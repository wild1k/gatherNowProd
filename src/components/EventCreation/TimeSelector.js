import React, { useState } from 'react';
import { DatePicker, TimePicker, Select, Space } from 'antd';

import 'antd/dist/antd.css';


const { Option } = Select;

function PickerWithTime({ type, onChange }) {
   if (type === 'time') return <TimePicker onChange={onChange} />;
   return <DatePicker picker={type} onChange={onChange} />;
 }




export default function SwitchablePicker() {
  const [type, setType] = useState('time');
  return (

    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
      </Select>
      <PickerWithTime type={type} onChange={value => console.log(value)} />
    </Space>
  );
}
