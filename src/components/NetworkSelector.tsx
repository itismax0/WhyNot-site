import React, { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';

export const NetworkSelector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ton' | 'sol'>('ton');
  const [copied, setCopied] = useState<string | null>(null);
  const { t } = useLanguage();

  const contractAddresses = {
    ton: 'EQ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●777',
    sol: 'Why●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●9p',
  };

  const explorers = {
    ton: '#',
    sol: '#',
  };

  const handleCopy = (chain: 'ton' | 'sol') => {
    navigator.clipboard.writeText(contractAddresses[chain]);
    setCopied(chain);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto" id="network-contract-card">
      <div className="bg-[#070707] border border-neutral-900 rounded-xl p-5 flex flex-col gap-4 relative overflow-hidden group">
        <div className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-[2px] bg-[#000000]/25">
          <span className="font-mono text-xs tracking-[0.2em] uppercase px-4 py-2 bg-neutral-900/80 rounded border border-neutral-800 text-white shadow-xl">
            {t('soon')}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 opacity-30 select-none pointer-events-none">
          <div className="flex items-center gap-1 bg-[#050505] p-1 rounded-full border border-[#1a1a1a]">
            <button
              onClick={() => setActiveTab('ton')}
              className={`px-5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer relative ${
                activeTab === 'ton'
                  ? 'text-black font-bold z-10'
                  : 'text-[#666] hover:text-white'
              }`}
              id="tab-ton"
            >
              {activeTab === 'ton' && (
                <motion.div
                  layoutId="tab-highlight"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              TON
            </button>
            <button
              onClick={() => setActiveTab('sol')}
              className={`px-5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer relative ${
                activeTab === 'sol'
                  ? 'text-black font-bold z-10'
                  : 'text-[#666] hover:text-white'
              }`}
              id="tab-sol"
            >
              {activeTab === 'sol' && (
                <motion.div
                  layoutId="tab-highlight"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              Solana
            </button>
          </div>
          <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest">
            {t('ticker')}: <span className="text-neutral-400 font-bold">$WHYNOT</span>
          </span>
        </div>

        {/* Address and actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-neutral-950 p-3 rounded-lg border border-neutral-900/40">
          <div className="flex-1 w-full text-center sm:text-left min-w-0 pr-0 sm:pr-2">
            <span className="text-[9px] font-mono text-neutral-600 block uppercase tracking-wider mb-0.5">
              {t('contractAddress')}
            </span>
            <div className="h-4 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 7 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -7 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="font-mono text-[10px] text-neutral-400 truncate select-all absolute inset-x-0"
                >
                  {contractAddresses[activeTab]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0 justify-center">
              <button
                 onClick={() => handleCopy(activeTab)}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-[#121212] hover:bg-[#1a1a1a] text-[9px] text-neutral-300 hover:text-white font-mono uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto border border-neutral-800"
                id="btn-copy-address"
              >
                {copied === activeTab ? (
                  <span className="text-emerald-500 font-medium">{t('copied')}</span>
                ) : (
                  <>
                    <Copy size={9} />
                    <span>{t('copy')}</span>
                  </>
                )}
              </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="p-1.5 rounded bg-[#121212] hover:bg-[#1a1a1a] text-neutral-500 hover:text-neutral-300 border border-neutral-800 transition-colors cursor-not-allowed"
              id="btn-link-explorer"
            >
              <ExternalLink size={9} />
            </button>
          </div>
        </div>

        {/* Minimalist Progress Bar for DEX Listing */}
        <div className="mt-2 border-t border-neutral-900/30 pt-4 flex flex-col gap-2" id="dex-listing-progress">
          <div className="flex justify-between items-center text-[9px] font-mono tracking-wider">
            <span className="text-neutral-500 uppercase">{t('listing')}</span>
            <span className="text-neutral-300 font-medium font-bold">85%</span>
          </div>
          <div className="w-full h-1 bg-neutral-950 rounded-full overflow-hidden border border-neutral-900/40">
            <motion.div 
              className="h-full bg-neutral-400 rounded-full" 
              initial={{ width: 0 }}
              whileInView={{ width: '85%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </div>
          <div className="flex justify-between items-center text-[8px] font-mono text-neutral-600 uppercase tracking-widest">
            <span>{t('liquidityCollection')}</span>
            <span>{t('launch')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
