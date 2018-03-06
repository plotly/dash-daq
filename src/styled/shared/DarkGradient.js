import React from 'react';

const darkGradientDefs = (
  <defs>
    <linearGradient id="l" x1="15.78%" x2="85.732%" y1="15.214%" y2="86.348%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".55"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
    </linearGradient>
    <radialGradient id="m" cx="14.944%" cy="13.839%" r="100.544%" fx="14.944%" fy="13.839%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".5"/>
      <stop offset="100%" stopColor="#000000" stopOpacity=".5"/>
    </radialGradient>
    <filter id="n" width="101.7%" height="101.7%" x="-.8%" y="-.8%" filterUnits="objectBoundingBox">
      <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation=".5"/>
      <feOffset dx=".25" dy=".25" in="shadowBlurInner1" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.204294218 0 0 0 0 0.204294218 0 0 0 0 0.204294218 0 0 0 0.39526721 0"/>
    </filter>
    <filter id="r" width="550%" height="218.8%" x="-225%" y="-56.2%" filterUnits="objectBoundingBox">
      <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feColorMatrix in="shadowOffsetOuter1" result="shadowMatrixOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0"/>
      <feOffset in="SourceAlpha" result="shadowOffsetOuter2"/>
      <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="1.5"/>
      <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 0.529411765 0 0 0 0 0.807843137 0 0 0 0 0.921568627 0 0 0 0.4512851 0"/>
      <feMerge>
        <feMergeNode in="shadowMatrixOuter1"/>
        <feMergeNode in="shadowMatrixOuter2"/>
      </feMerge>
    </filter>
    <filter id="t" width="425%" height="187.5%" x="-162.5%" y="-40.6%" filterUnits="objectBoundingBox">
      <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
    </filter>
    <linearGradient id="p" x1="0%" x2="0%" y1="100%" y2="100%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".5"/>
      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
    </linearGradient>
    <radialGradient id="q" cy="0%" r="100%" fx="0%" fy="0%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".5"/>
      <stop offset="100%" stopColor="#000000" stopOpacity=".5"/>
    </radialGradient>
    <filter id="a" width="100.4%" height="100.5%" x="-.1%" y="-.1%" filterUnits="objectBoundingBox">
      <feMorphology in="SourceAlpha" operator="dilate" radius=".05" result="shadowSpreadOuter1"/>
      <feOffset dx=".1" dy=".1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
      <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11291327 0"/>
    </filter>
    <filter id="d" width="102.5%" height="102.8%" x="-1.1%" y="-1.3%" filterUnits="objectBoundingBox">
      <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation=".25"/>
      <feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" result="shadowMatrixInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feGaussianBlur in="SourceAlpha" result="shadowBlurInner2" stdDeviation="1"/>
      <feOffset in="shadowBlurInner2" result="shadowOffsetInner2"/>
      <feComposite in="shadowOffsetInner2" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner2"/>
      <feColorMatrix in="shadowInnerInner2" result="shadowMatrixInner2" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feMerge>
        <feMergeNode in="shadowMatrixInner1"/>
        <feMergeNode in="shadowMatrixInner2"/>
      </feMerge>
    </filter>
    <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".5"/>
      <stop offset="100%" stopColor="#323a3e" stopOpacity=".2"/>
    </linearGradient>
    <filter id="e" width="171%" height="117.7%" x="-35.5%" y="-8.8%" filterUnits="objectBoundingBox">
      <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
      <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.529411765 0 0 0 0 0.807843137 0 0 0 0 0.921568627 0 0 0 0.5 0"/>
    </filter>
    <radialGradient id="g" cx="90.826%" cy="1.233%" r="154.848%" fx="90.826%" fy="1.233%" gradientTransform="scale(1 .24903) rotate(72.947 .883 .03)">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".7"/>
      <stop offset="100%" stopColor="#000000"/>
    </radialGradient>
  </defs>
);

export default darkGradientDefs;
