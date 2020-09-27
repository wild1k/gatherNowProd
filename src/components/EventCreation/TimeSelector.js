import React, { useState } from 'react';
import { Select, Space, TimePicker} from 'antd';

import 'antd/dist/antd.css';


const { Option } = Select;

function PickerWithType({ type, onChange }) {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  return <PickerWithType picker={type} onChange={onChange} />;
}



export default function TimeSelector() {
  const [type, setType] = useState('time');
  return (
  <div>
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
      </Select>
      <PickerWithType type={type} onChange={value => console.log(value)} />
    </Space>
    </div>
  );
}
