import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = props => {
  const { dialogs, messages } = props.dialogsPage;
  const { newMessageText, changeNewMessageText, addMessage } = props;

  const renderDialogItems = () => {
    return dialogs.map(item => {
      return <DialogItem key={item.id} name={item.name} id={item.id} />;
    });
  };

  const renderDialogMessages = () => {
    return messages.map(item => {
      return (
        <DialogMessage key={item.id} message={item.message} id={item.id} />
      );
    });
  };

  const handleChangeText = event => {
    const text = event.target.value;
    changeNewMessageText(text);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__aside}>
        <ul className={s.dialogsList}>{renderDialogItems()}</ul>
      </div>

      <div className={s.dialogs__main}>
        {renderDialogMessages()}

        <form className="form-message" onSubmit={handleSubmit}>
          <p>
            <textarea
              name="message"
              value={newMessageText}
              onChange={handleChangeText}
            />
          </p>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
