import React from 'react';
import { reduxForm, Field } from 'redux-form';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLength50 = maxLengthCreator(50);

const Dialogs = props => {
  const { dialogs, messages } = props.dialogsPage;
  const { addMessage } = props;

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

  const handleSubmit = values => {
    addMessage(values.message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__aside}>
        <ul className={s.dialogsList}>{renderDialogItems()}</ul>
      </div>

      <div className={s.dialogs__main}>
        {renderDialogMessages()}
        <DialogAddMessageForm
          className="form-add-message"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

let DialogAddMessageForm = ({ className, handleSubmit, ...props }) => {
  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className={s['form-row']}>
        <Field
          component={Textarea}
          name="message"
          placeholder="Enter yuor message"
          validate={[required, maxLength50]}
        />
      </div>
      <button>Send</button>
    </form>
  );
};

DialogAddMessageForm = reduxForm({
  form: 'dialogAddMessageForm'
})(DialogAddMessageForm);

export default Dialogs;
