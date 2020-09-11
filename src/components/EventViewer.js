
import React from 'react';
import { PickerView } from 'antd-mobile';

import "../index.css";

const availEvents = [
  [
    {
      label: 'Active', 
      value: 'active',
    },
    {
      label: 'Aquatic',
      value: 'water',
    },
    {
      label: 'Indoors',
      value: 'sedentary',
    },
    {
      label: 'Sporting Events',
      value: 'sports'
    },
    {
      label: 'Shopping',
      value: 'shopping'
    },
    {
      label: 'Social',
      value: 'social',
    },
    {
      label: 'Urban',
      value: 'drinking',
    },
    {
      label: 'Virtual',
      value: 'virtual',
    },
  ],
];


const style = { width: 10 };

export default class PickerViewer extends React.Component {
  state = {
    value: undefined,
  };
  onChange = (value) => {
    this.setState({
      value,
    });
  }
  render() {
    return (

      <div className="eventView scroller container code-box-demo">
        <PickerView className="config-provider" style={style} data={availEvents}
          onChange={this.onChange}
          value={this.state.value}
          cascade={false}>
        </PickerView>
      </div>
    );
  }
}