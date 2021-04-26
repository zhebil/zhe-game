import React, { ReactElement } from 'react';

const ErrorIndicator: React.FC = (): ReactElement => {
  return (
    <div className="row">
      <div className="col alert alert-danger">
        <p>Что-то пошло не так.</p>
        <p>Перезагрузите страницу или попробуйте позже</p>
        <p>
          Если проблема не исчеза - сообщите об ошибке{' '}
          <a href="https://t.me/zhebil">@zhebil</a>
        </p>
      </div>
    </div>
  );
};

export default ErrorIndicator;
