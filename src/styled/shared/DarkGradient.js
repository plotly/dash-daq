import React from 'react';

export const UnstyledDarkHandle = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="10" height="22">
    <g fill="none">
      <g filter="url(#filter0_di)">
        <path className="dark-handle-custom-fill" fill="#101010" d="M4.886 1H3.114a2 2 0 0 0-1.997 2.11l.778 14A2 2 0 0 0 3.892 19h.216a2 2 0 0 0 1.997-1.89l.778-14A2 2 0 0 0 4.886 1z"/>
        <path style={{mixBlendMode: 'overlay'}} fill="url(#paint0_linear)" d="M3.886 0H2.114A2 2 0 0 0 .117 2.11l.778 14A2 2 0 0 0 2.892 18h.216a2 2 0 0 0 1.997-1.89l.778-14A2 2 0 0 0 3.886 0z" transform="translate(1 1)"/>
        <path style={{mixBlendMode: 'overlay'}} fill="url(#paint1_radial)" d="M3.886 0H2.114A2 2 0 0 0 .117 2.11l.778 14A2 2 0 0 0 2.892 18h.216a2 2 0 0 0 1.997-1.89l.778-14A2 2 0 0 0 3.886 0z" transform="translate(1 1)"/>
      </g>
      <g fillRule="evenodd" clipRule="evenodd">
        <path className="dark-handle-custom-fill" fill="#101010" d="M3.114 1h1.772a2 2 0 0 1 1.997 2.11l-.778 14A2 2 0 0 1 4.108 19h-.216a2 2 0 0 1-1.997-1.89l-.778-14A2 2 0 0 1 3.114 1zm.333 1h1.105A2 2 0 0 1 6.55 4.11l-.673 12.115a1.88 1.88 0 0 1-3.752 0L1.45 4.11A2 2 0 0 1 3.447 2z"/>
        <path style={{mixBlendMode: 'overlay'}} fill="url(#paint2_linear)" d="M2 0h1.772a2 2 0 0 1 1.997 2.11l-.778 14A2 2 0 0 1 2.994 18h-.216A2 2 0 0 1 .78 16.11l-.778-14A2 2 0 0 1 2 0zm.333 1h1.105a2 2 0 0 1 1.997 2.11l-.673 12.115a1.88 1.88 0 0 1-3.753 0L.337 3.11A2 2 0 0 1 2.333 1z" transform="translate(1.114 1)"/>
        <path fill="url(#paint3_radial)" fillOpacity=".4" d="M2 0h1.772a2 2 0 0 1 1.997 2.11l-.778 14A2 2 0 0 1 2.994 18h-.216A2 2 0 0 1 .78 16.11l-.778-14A2 2 0 0 1 2 0zm.333 1h1.105a2 2 0 0 1 1.997 2.11l-.673 12.115a1.88 1.88 0 0 1-3.753 0L.337 3.11A2 2 0 0 1 2.333 1z" transform="translate(1.114 1)"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_di" width="9.772" height="22" x=".114" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
        <feOffset dx="1" dy="1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>
        <feOffset dx=".25" dy=".25"/>
        <feGaussianBlur stdDeviation=".5"/>
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
        <feColorMatrix values="0 0 0 0 0.204294 0 0 0 0 0.204294 0 0 0 0 0.204294 0 0 0 0.395267 0"/>
        <feBlend in2="shape" result="effect2_innerShadow"/>
      </filter>
      <linearGradient id="paint0_linear" x2="1" gradientTransform="matrix(4.19709 12.8041 -4.26804 12.5913 .947 2.739)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity=".55"/>
        <stop offset="1" stopOpacity=".01"/>
      </linearGradient>
      <radialGradient id="paint1_radial" cx=".5" cy=".5" r=".5" gradientTransform="matrix(8.55956 25.5096 -8.50319 25.6787 .868 -23.103)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity=".5"/>
        <stop offset="1" stopOpacity=".5"/>
      </radialGradient>
      <linearGradient id="paint2_linear" x2="1" gradientTransform="matrix(0 18 -5.77167 0 2.886 0)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity=".5"/>
        <stop offset="1" stopOpacity=".01"/>
      </linearGradient>
      <radialGradient id="paint3_radial" cx=".5" cy=".5" r=".5" gradientTransform="matrix(0 36 -11.5433 0 8.658 -18)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity=".5"/>
        <stop offset="1" stopOpacity=".5"/>
      </radialGradient>
    </defs>
  </svg>
);

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

export const darkLEDDefs = (
  <defs>
    <filter id="darkLED-a" width="111.8%" height="107.8%" x="-2.9%" y="-2%" filterUnits="objectBoundingBox">
      <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/>
      <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feMerge>
        <feMergeNode in="shadowMatrixOuter1"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <radialGradient id="darkLED-c" cx="0%" cy="0%" r="141.421%" fx="0%" fy="0%" gradientTransform="matrix(.22147 .22147 -.0503 .97517 0 0)">
      <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
      <stop offset="100%" stopOpacity=".6"/>
    </radialGradient>
    <linearGradient id="darkLED-d" x1="0%" y1="0%" y2="100%">
      <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
      <stop offset="100%" stopOpacity="0"/>
    </linearGradient>
    <path id="darkLED-b" d="M5.71 5.181L3.308 2.778 5.71.375h16.357l2.403 2.403-2.403 2.403z"/>
    <filter id="darkLED-e" width="101.2%" height="105.2%" x="-.6%" y="-2.6%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <radialGradient id="darkLED-g" cx="0%" cy="0%" r="141.421%" fx="0%" fy="0%" gradientTransform="matrix(.22147 .22147 -.97517 .0503 0 0)">
      <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
      <stop offset="100%" stopOpacity=".6"/>
    </radialGradient>
    <path id="darkLED-f" d="M22.597 5.71L25 3.308l2.403 2.402v16.357L25 24.47l-2.403-2.403z"/>
    <filter id="darkLED-h" width="105.2%" height="101.2%" x="-2.6%" y="-.6%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <radialGradient id="darkLED-j" cx="0%" cy="0%" r="141.421%" fx="0%" fy="0%" gradientTransform="scale(1 .22711) rotate(77.204)">
      <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
      <stop offset="100%" stopOpacity=".6"/>
    </radialGradient>
    <path id="darkLED-i" d="M22.597 27.933L25 25.53l2.403 2.403v16.356L25 46.692l-2.403-2.403z"/>
    <filter id="darkLED-k" width="105.2%" height="101.2%" x="-2.6%" y="-.6%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <path id="darkLED-l" d="M22.067 44.819l2.403 2.403-2.403 2.403H5.71l-2.402-2.403 2.402-2.403z"/>
    <filter id="darkLED-m" width="101.2%" height="105.2%" x="-.6%" y="-2.6%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <path id="darkLED-n" d="M5.181 44.289l-2.403 2.403-2.403-2.403V27.933l2.403-2.403 2.403 2.403z"/>
    <filter id="darkLED-o" width="105.2%" height="101.2%" x="-2.6%" y="-.6%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <path id="darkLED-p" d="M5.181 22.067L2.778 24.47.375 22.067V5.71l2.403-2.402L5.181 5.71z"/>
    <filter id="darkLED-q" width="105.2%" height="101.2%" x="-2.6%" y="-.6%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <path id="darkLED-r" d="M5.71 27.403L3.308 25l2.402-2.403h16.357L24.47 25l-2.403 2.403z"/>
    <filter id="darkLED-s" width="101.2%" height="105.2%" x="-.6%" y="-2.6%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <radialGradient id="darkLED-u" cx="0%" cy="0%" r="141.421%" fx="0%" fy="0%">
      <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
      <stop offset="100%" stopOpacity=".6"/>
    </radialGradient>
    <path id="darkLED-t" d="M31 50.625a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25z"/>
    <path id="darkLED-y" d="M35,40.625 C33.5502525,40.625 32.375,39.4497475 32.375,38 C32.375,36.5502525 33.5502525,35.375 35,35.375 C36.4497475,35.375 37.625,36.5502525 37.625,38 C37.625,39.4497475 36.4497475,40.625 35,40.625 Z"/>
    <filter id="darkLED-v" width="104.8%" height="104.8%" x="-2.4%" y="-2.4%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
    <path id="darkLED-w" d="M35,13.625 C33.5502525,13.625 32.375,12.4497475 32.375,11 C32.375,9.55025253 33.5502525,8.375 35,8.375 C36.4497475,8.375 37.625,9.55025253 37.625,11 C37.625,12.4497475 36.4497475,13.625 35,13.625 Z"/>
    <filter id="darkLED-x" width="104.8%" height="104.8%" x="-2.4%" y="-2.4%" filterUnits="objectBoundingBox">
      <feOffset dx=".25" dy=".25" in="SourceAlpha" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
      <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"/>
    </filter>
  </defs>
);

const A = (
  <g>
    <use className="darkLED-fill" xlinkHref="#darkLED-b"/>
    <use fill="url(#darkLED-c)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-b"/>
    <use fill="url(#darkLED-d)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-b"/>
    <use fill="#000" filter="url(#darkLED-e)" xlinkHref="#darkLED-b"/>
  </g>
);

const B = (
  <g>
    <use className="darkLED-fill" xlinkHref="#darkLED-f"/>
    <use fill="url(#darkLED-g)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-f"/>
    <use fill="url(#darkLED-d)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-f"/>
    <use fill="#000" filter="url(#darkLED-h)" xlinkHref="#darkLED-f"/>
  </g>
);

const C = (
  <g>
    <use className="darkLED-fill" xlinkHref="#darkLED-i"/>
    <use fill="url(#darkLED-j)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-i"/>
    <use fill="url(#darkLED-d)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-i"/>
    <use fill="#000" filter="url(#darkLED-k)" xlinkHref="#darkLED-i"/>
  </g>
);

const D = (
  <g>
    <use className="darkLED-fill" xlinkHref="#darkLED-l"/>
    <use fill="url(#darkLED-c)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-l"/>
    <use fill="url(#darkLED-d)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-l"/>
    <use fill="#000" filter="url(#darkLED-m)" xlinkHref="#darkLED-l"/>
  </g>
);

const E = (
  <g>
    <use className="darkLED-fill" xlinkHref="#darkLED-n"/>
    <use fill="url(#darkLED-j)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-n"/>
    <use fill="url(#darkLED-d)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-n"/>
    <use fill="#000" filter="url(#darkLED-o)" xlinkHref="#darkLED-n"/>
  </g>
);

const F = (
  <g>
    <use className="darkLED-fill" xlinkHref="#darkLED-p"/>
    <use fill="url(#darkLED-g)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-p"/>
    <use fill="url(#darkLED-d)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-p"/>
    <use fill="#000" filter="url(#darkLED-q)" xlinkHref="#darkLED-p"/>
  </g>
);

const G = (
  <g>
    <use className="darkLED-fill" xlinkHref="#darkLED-r"/>
    <use fill="url(#darkLED-c)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-r"/>
    <use fill="url(#darkLED-d)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-r"/>
    <use fill="#000" filter="url(#darkLED-s)" xlinkHref="#darkLED-r"/>
  </g>
);

// See the following link for segment mappings:
// https://en.wikipedia.org/wiki/Seven-segment_display#/media/File:7_segment_display_labeled.svg
export const DARK_SEGMENTS = { A, B, C, D, E, F, G };

export const darkDecimal = (
  <g fill="none" fillRule="evenodd" filter="url(#darkLED-a)">
    <g fillRule="nonzero">
      <use className="darkLED-fill" fillRule="evenodd" xlinkHref="#darkLED-t"/>
      <use fill="url(#darkLED-u)" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-t"/>
      <use fill="url(#darkLED-d)" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-t"/>
      <use fill="#000" filter="url(#darkLED-v)" xlinkHref="#darkLED-t"/>
    </g>
  </g>
);

export const darkColon = (
  <g>
    <g fillRule="nonzero">
      <use className="darkLED-fill" fillRule="evenodd" xlinkHref="#darkLED-y"/>
      <use fill="url(#darkLED-u)" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-y"/>
      <use fill="url(#darkLED-d)" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-y"/>
      <use fill="black" filter="url(#darkLED-v)" xlinkHref="#darkLED-y"/>
    </g>
    <g fillRule="nonzero">
      <use className="darkLED-fill" fillRule="evenodd" xlinkHref="#darkLED-w"/>
      <use fill="url(#darkLED-u)" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-w"/>
      <use fill="url(#darkLED-d)" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#darkLED-w"/>
      <use fill="black" filter="url(#darkLED-x)" xlinkHref="#darkLED-w"/>
    </g>
  </g>
)

export default darkGradientDefs;
