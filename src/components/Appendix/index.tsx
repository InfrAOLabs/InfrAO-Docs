import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
  {
    title: 'Better dry runs',
    description: 'Enhanced dry run capabilities for improved testing and validation',
    link: '/docs',
  },
  {
    title: 'Faster processes',
    description: 'Optimized processes for maximum speed and efficiency',
    link: '/docs',
  },
  {
    title: 'Code auditing',
    description: 'Comprehensive code review and security analysis',
    link: '/docs',
  },
  {
    title: 'General AO dev support',
    description: 'Dedicated support for AO development needs',
    link: '/docs',
  },
  {
    title: 'Join us and run nodes',
    description: 'Become part of our network and help improve AO infrastructure',
    link: '/docs',
  },
];

function Feature({ title, description, link }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link className={styles.featureLink} to={link}>
        <div className="card">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Appendix() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
