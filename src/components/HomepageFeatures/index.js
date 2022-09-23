import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Arduíno é incrível!',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O Arduído é uma tecnologia de circuito integrado muito parecido com um computador, de maneira compacta 💻
      </>
    ),
  },
  {
    title: 'Um mundo de possibilidades',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Aprenda a <code>controlar</code> componentes eletrônicos para que você consiga, por exemplo,
        acender uma lâmpada sem precisar apertar o interruptor! 💡
      </>
    ),
  },
  {
    title: 'Comece pelos fundamentos',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Aprenda a dar os primeiros passos com essa tecnologia. Você enxergará o mundo de outra maneira 🤩
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
