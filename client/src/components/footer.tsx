import React, { ReactElement } from 'react';
interface socialItem {
  link: string;
  name: string;
}
const social: socialItem[] = [
  {
    link: 'https://t.me/zhebil',
    name: 'telegram',
  },
  {
    link: 'https://github.com/zhebil',
    name: 'github',
  },
  {
    link: 'tel:+380980129984',
    name: 'phone',
  },
  {
    link: 'https://www.instagram.com/zhebil',
    name: 'instagram',
  },
];

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="footer bg-light">
      <div className="container pt-3 pb-3">
        <div className="row align-items-center">
          <p className="col mb-4 mb-lg-0">
            Игра создана как учебный проект, в некоммерческих целях
          </p>
          <div className="col-12 col-lg-auto">
            <div className="row social">
              <p className="col-auto social__title">Обратная&nbsp;связь:</p>
              <ul className="col-auto social__list">
                {social.map((i) => (
                  <li key={i.name} className="social__item">
                    <a href={i.link} className="social__link">
                      <img src={`./assets/img/${i.name}.svg`} alt={i.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
