import React from 'react';
import { Reminder } from './Reminder.jsx';

export class ReminderList extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    let reminders = [{title: "r1", stage: 1, status: false}, {title: "r2", stage: 2, status: false}];
    return (
      <div>
        <Reminder content={reminders[0]}/>
        <Reminder content={reminders[1]}/>
      </div>
    );
  };
}
