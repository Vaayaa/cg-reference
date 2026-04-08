'use client';

import { useState } from 'react';
import { categories } from '@/data/cg-works';
import styles from './FilterBar.module.css';

interface Props {
  onFilterChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export default function FilterBar({ onFilterChange, onSearchChange, totalCount, filteredCount }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>◈</span>
          <span className={styles.logoText}>CG Reference</span>
        </div>
        <div className={styles.search}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="搜索算法、艺术家、工具..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.categoryScroll}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.count}>
        展示 <strong>{filteredCount}</strong> / {totalCount} 个作品
      </div>
    </div>
  );
}
