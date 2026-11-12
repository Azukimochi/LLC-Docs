import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


const FeatureList = [
  {
    title: 'MA前提ツール',
    image: require('@site/static/img/homepage/thumbnail_1.png').default,
    alt: 'Light Limit Changer For MA のロゴとアバターのイメージ画像。「MA前提 ライティング調整ツール」',
    description: (
      <>
        Modular Avatar併用で非破壊で明るさ調節メニューが追加できる！
      </>
    ),
  },
  {
    title: '簡単導入・多機能',
    image: require('@site/static/img/homepage/thumbnail_2.png').default,
    alt: 'Light Limit Changerってどんなツール？ Modular Avatar対応なので非破壊で簡単導入、アバターの明るさをいつでもExMenuから操作可能、lilToon・Poiyomi・UnlitWFシェーダーに対応。ほかにもエミッションの強さ・彩度や色相・色温度の調節、逆光ライトの制御などの便利機能があります。',
    description: (
      <>
        色温度・彩度調節機能・モノクロ化機能など多機能
        写真撮影に最適！
      </>
    ),
  },
];

function Feature({title, image, alt, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={image} alt={alt} />
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
