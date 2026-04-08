import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CG Reference — 计算机图形算法瀑布流参考',
  description:
    '收录粒子系统、分形、噪声、细胞自动机、混沌吸引子、物理模拟、Shader/GLSL、光线追踪、L-System、波纹干涉等计算机图形算法的视觉效果参考。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
