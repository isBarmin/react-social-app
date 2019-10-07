import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = props => {
  const { dialogs, messages } = props;

  const renderDialogItems = () => {
    return dialogs.map(item => {
      return <DialogItem key={item.id} name={item.name} id={item.id} />;
    });
  };

  const renderDialogMessages = () => {
    return messages.map(item => {
      return <DialogMessage message={item.message} id={item.id} />;
    });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__aside}>
        <ul className={s.dialogsList}>{renderDialogItems()}</ul>
      </div>

      <div className={s.dialogs__main}>{renderDialogMessages()}</div>
    </div>
  );
};

export default Dialogs;
