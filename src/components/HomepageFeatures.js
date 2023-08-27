import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'MA前提ツール',
    src: ('../../static/img/homepage/figure_break_hammer_fix.png'),
    description: (
      <>
        Modular Avater併用で非破壊で明るさ調節メニューが追加できる！
      </>
    ),
  },
  {
    title: '簡単導入',
    src: ('../../static/img/homepage/computer_manual_woman_fix.png'),
    description: (
      <>
        ウインドウを開いてアバターをセットして生成ボタンを押すだけ！
      </>
    ),
  },
  {
    title: '多機能',
    src: ('../../static/img/homepage/presentation_slide_fukuzatsu.png'),
    description: (
      <>
        色温度・彩度調節機能（上級者向け）を搭載
        写真撮影に最適！
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.Image} alt={title} />
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
