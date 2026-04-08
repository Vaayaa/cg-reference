'use client';

import { CGWork } from '@/types/cg-work';
import styles from './CGWorkCard.module.css';

interface Props {
  work: CGWork;
}

export default function CGWorkCard({ work }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={work.previewUrl}
          alt={work.title}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${work.id}/400/300`;
          }}
        />
        <div className={styles.overlay}>
          <div className={styles.tools}>
            {work.tools.map((tool) => (
              <span key={tool} className={styles.tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{work.title}</h3>
          <span className={styles.algorithm}>{work.algorithm}</span>
        </div>
        <p className={styles.artist}>by {work.artist}</p>
        <p className={styles.description}>{work.description}</p>
        <div className={styles.tags}>
          {work.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {work.sourceUrl && (
            <a
              href={work.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              作品
            </a>
          )}
          {work.codeUrl && (
            <a
              href={work.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              代码
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
