import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coins, Percent, Lock, ShieldCheck, TrendingUp } from 'lucide-react';
import { TokenomicsItem } from '../types';
import { useLanguage } from '../i18n';

export const Tokenomics: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { t } = useLanguage();

  const allocations: TokenomicsItem[] = [
    {
      name: t('liquidity'),
      percentage: 40,
      tokens: '400,000,000',
      color: '#ffffff', // Pure white
      description: t('liquidityDesc')
    },
    {
      name: t('airdrop'),
      percentage: 25,
      tokens: '250,000,000',
      color: '#e5e5e5', // Soft silver
      description: t('airdropDesc')
    },
    {
      name: t('utilities'),
      percentage: 15,
      tokens: '150,000,000',
      color: '#a3a3a3', // Neutral gray
      description: t('storageDesc')
    },
    {
      name: t('marketing'),
      percentage: 10,
      tokens: '100,000,000',
      color: '#737373', // Dark-mid zinc
      description: t('marketingDesc')
    },
    {
      name: t('devFund'),
      percentage: 10,
      tokens: '100,000,000',
      color: '#404040', // Charcoal
      description: t('devFundDesc')
    }
  ];

  let cumulativePercentage = 0;

  return (
    <div className="w-full" id="tokenomics-section-wrapper">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-display font-light text-2xl sm:text-4xl tracking-widest uppercase text-white mb-2" id="tokenomics-title">
          {t('tokenomicsTitle')}
        </h2>
        <div className="w-12 h-[1px] bg-[#333] mx-auto my-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-4 relative group" id="tokenomics-body-grid">
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-[2px] bg-[#000000]/25 rounded-3xl m-[-20px]">
          <span className="font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 bg-neutral-900/80 rounded border border-neutral-800 text-white shadow-xl">
            {t('soon')}
          </span>
        </div>
        
        {/* Left column: Metrics summary */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-4 opacity-30 select-none pointer-events-none" id="tokenomics-left-side">
          <div className="bg-[#070707] border border-neutral-900 rounded-xl p-6 flex flex-col justify-between" id="metric-supply-card">
            <div>
              <span className="text-[9px] uppercase font-mono tracking-wider text-[#333] block mb-1">{t('supply')}</span>
              <div className="text-3xl font-display font-light text-neutral-700 tracking-widest">
                ●,●●●,●●●,●●●
              </div>
            </div>
            <span className="text-[9px] font-mono text-neutral-800 uppercase tracking-widest mt-4 block">$WHYNOT • MULTICHAIN</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#070707] border border-neutral-900 rounded-xl p-5 flex flex-col justify-between h-28" id="metric-tax-card">
              <div className="flex justify-between items-start">
                <Percent size={14} className="text-neutral-800" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-mono text-[#333] block mb-1">{t('tax')}</span>
                <span className="text-xs uppercase font-semibold text-neutral-700 tracking-widest leading-none">●%</span>
              </div>
            </div>

            <div className="bg-[#070707] border border-neutral-900 rounded-xl p-5 flex flex-col justify-between h-28" id="metric-lp-card">
              <div className="flex justify-between items-start">
                <Lock size={14} className="text-neutral-800" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-mono text-[#333] block mb-1">{t('liquidityStatus')}</span>
                <span className="text-xs uppercase font-semibold text-neutral-700 tracking-widest leading-none">●●●●●●</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center column: Interactive SVG Donut chart */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative opacity-30 select-none pointer-events-none" id="tokenomics-donut-wrapper">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Donut SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {allocations.map((item, index) => {
                const radius = 35;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (item.percentage / 100) * circumference;
                const strokeDasharray = `${circumference} ${circumference}`;
                
                const rotation = (cumulativePercentage / 100) * 360;
                cumulativePercentage += item.percentage;

                const isItemActive = activeItem === index;

                return (
                  <motion.circle
                    key={item.name}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    stroke={item.color}
                    strokeWidth={isItemActive ? 10 : 6}
                    strokeDasharray={strokeDasharray}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.08, ease: 'easeOut' }}
                    style={{
                      transformOrigin: '50% 50%',
                      transform: `rotate(${rotation}deg)`,
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                    className="transition-all duration-300 ease-out hover:stroke-[11px]"
                  />
                );
              })}
            </svg>

            {/* Inner Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 select-none pointer-events-none">
              <AnimatePresence mode="wait">
                {activeItem !== null ? (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-1"
                  >
                    <span 
                      className="text-2xl sm:text-3xl font-display font-light text-white"
                    >
                      ●●%
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#888] block max-w-[150px] font-mono truncate">
                      ●●●●●●●●
                    </span>
                    <span className="text-[9px] font-mono text-[#555] block">
                      ●●●,●●●,●●● WN
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-1 flex flex-col items-center justify-center"
                  >
                    <span className="text-lg font-display font-light uppercase tracking-widest text-white">WhyNot</span>
                    <span className="text-[9px] font-mono text-[#444] uppercase tracking-widest block">{t('distribution')}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="text-[9px] text-[#444] font-mono uppercase tracking-widest mt-2 text-center select-none">
            {t('hoverForDetails')}
          </div>
        </div>

        {/* Right column: Distribution details with highlight cards */}
        <div className="lg:col-span-4 space-y-3 opacity-30 select-none pointer-events-none" id="tokenomics-right-side">
          {allocations.map((item, index) => {
            const isItemActive = activeItem === index;
            return (
              <div
                key={item.name}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                className={`flex gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  isItemActive
                    ? 'border-white bg-[#111] scale-[1.01]'
                    : 'border-[#1c1c1c] bg-[#0c0c0c] hover:border-[#222]'
                }`}
                id={`distribution-card-${index}`}
              >
                <div 
                  className="w-[3px] rounded-full self-stretch"
                  style={{ backgroundColor: item.color }}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-display font-medium text-white text-xs uppercase tracking-wider truncate pr-2">
                      ●●●●●●●●
                    </h4>
                    <span 
                      className="font-mono text-xs font-bold flex-shrink-0 text-white"
                    >
                      ●●%
                    </span>
                  </div>
                  <p className="text-[#333] text-[11px] leading-relaxed line-clamp-2 font-mono">
                    ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 text-[9px] font-mono text-[#444] uppercase tracking-wider">
                    <Coins size={9} />
                    <span>●●●,●●●,●●● WN</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
