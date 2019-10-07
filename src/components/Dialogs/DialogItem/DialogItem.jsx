import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  const path = `/dialogs/${props.id}`;

  return (
    <li className={s.dialogItem}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
