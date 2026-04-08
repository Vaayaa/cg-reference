'use client';

import { useState, useMemo } from 'react';
import FilterBar from '@/components/FilterBar';
import MasonryGrid from '@/components/MasonryGrid';
import { cgWorks } from '@/data/cg-works';
import styles from './page.module.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorks = useMemo(() => {
    return cgWorks.filter((work) => {
      const matchesCategory =
        activeCategory === 'All' ||
        work.algorithm === activeCategory ||
        work.tags.includes(activeCategory);

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        work.title.toLowerCase().includes(query) ||
        work.artist.toLowerCase().includes(query) ||
        work.algorithm.toLowerCase().includes(query) ||
        work.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        work.tools.some((tool) => tool.toLowerCase().includes(query)) ||
        work.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className={styles.page}>
      <FilterBar
        onFilterChange={setActiveCategory}
        onSearchChange={setSearchQuery}
        totalCount={cgWorks.length}
        filteredCount={filteredWorks.length}
      />
      {filteredWorks.length > 0 ? (
        <MasonryGrid works={filteredWorks} />
      ) : (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>◈</div>
          <h3>没有找到匹配的作品</h3>
          <p>尝试调整筛选条件或搜索关键词</p>
        </div>
      )}
      <footer className={styles.footer}>
        <p>◈ CG Reference — 为谱造司收录计算机图形算法视觉参考</p>
        <p className={styles.footerSub}>
          收录 Processing · p5.js · GLSL · WebGL · Three.js 等创意编程案例
        </p>
      </footer>
    </div>
  );
}
