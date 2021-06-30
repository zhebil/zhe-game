import React, { ReactElement, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { messageSelector } from '../redux/ducks/messages/selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { removeMessage } from '../redux/ducks/messages/actionCreators';

const Messages: React.FC = (): ReactElement => {
  const messages = useAppSelector(messageSelector);
  const dispatch = useAppDispatch();

  const ref = useRef(null);

  const onDeleteMessage = (id: number) => {
    dispatch(removeMessage(id));
  };
  return (
    <TransitionGroup className="message__container">
      {messages.map((message) => {
        return (
          <CSSTransition
            key={message.id}
            timeout={500}
            classNames="show"
            nodeRef={ref}
            appear={true}
            onEnter={() => {
              setTimeout(() => {
                dispatch(removeMessage(message.id));
              }, 2000);
            }}
          >
            <button
              className={`alert alert-${message.type}`}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              ref={ref}
              onClick={() => onDeleteMessage(message.id)}
            >
              <p className="mb-0">{message.text}</p>
            </button>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default Messages;
