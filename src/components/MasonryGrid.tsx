'use client';

import { CGWork } from '@/types/cg-work';
import CGWorkCard from './CGWorkCard';
import styles from './MasonryGrid.module.css';

interface Props {
  works: CGWork[];
}

export default function MasonryGrid({ works }: Props) {
  return (
    <div className={styles.grid}>
      {works.map((work) => (
        <CGWorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}
