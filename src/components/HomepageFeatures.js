import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
  {
    title: 'MA前提ツール',
    image: require('@site/static/img/homepage/thumbnail_1.png').default,
    description: (
      <>
        Modular Avatar併用で非破壊で明るさ調節メニューが追加できる！
      </>
    ),
  },
  {
    title: '簡単導入・多機能',
    image: require('@site/static/img/homepage/thumbnail_2.png').default,
    description: (
      <>
        色温度・彩度調節機能・モノクロ化機能など多機能
        写真撮影に最適！
      </>
    ),
  },
];

function Feature({title, image, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={image} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Spacer size={50}/>
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

export const Spacer = ({ size, horizontal }) => {
  return (
    <div
      style={
        horizontal
          ? { width: size, height: 'auto', display: 'inline-block', flexShrink: 0 }
          : { width: 'auto', height: size, flexShrink: 0  }
      }
    />
  )
}
