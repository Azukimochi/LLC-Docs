import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className={`button button--secondary button--lg ${styles.button}`}
            to="vcc://vpm/addRepo?url=https://azukimochi.github.io/vpm-repos/index.json">
            ダウンロード(VCC)
          </Link>
          
          <Link
            className={`button button--secondary button--lg ${styles.button}`}
            to="/docs/intro">
            説明書
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Light Limit Changer For MA は、Modular Avaterを前提としてアバターに非破壊でライティングの調節アニメーションを追加するツールです。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
