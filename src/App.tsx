import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Github, 
  ArrowUpRight, 
  Menu, 
  X as CloseIcon, 
  ExternalLink
} from 'lucide-react';

import Logo from './components/Logo';
import { NetworkSelector } from './components/NetworkSelector';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { Creators } from './components/Creators';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useLanguage } from './i18n';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const socialLinks = {
    twitter: 'https://x.com/whyonton?s=21',
    telegram: 'https://t.me/whyonton',
    github: 'https://github.com/itismax0/WhyNot-telegram-mini-app'
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden text-[#e0e0e0] selection:bg-white/20 selection:text-white font-sans" id="main-app-container">
      {/* Absolute Decorative Background Elements - Strict Minimalism: No glow blobs */}
      <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none overflow-hidden" id="bg-glows-container" />

      {/* Header Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-black/95 border-b border-[#111] backdrop-blur-md" id="app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <Logo size={24} animated={true} />
            <div className="flex flex-col">
              <span className="font-display font-light text-lg tracking-[0.2em] uppercase text-white leading-none">WhyNot</span>
              <span className="text-[8px] uppercase tracking-[0.16em] text-[#555] font-mono mt-1 leading-none">Ecosystem</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-widest text-[#555]" id="desktop-nav">
            <a href="#about" className="hover:text-white transition-colors">{t('navToken')}</a>
            <a href="#tokenomics" className="hover:text-white transition-colors">{t('navTokenomics')}</a>
            <a href="#roadmap" className="hover:text-white transition-colors">{t('navRoadmap')}</a>
            <a href="#creators" className="hover:text-white transition-colors">{t('navTeam')}</a>
          </nav>

          {/* Social icons CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5" id="desktop-social-nav">
            <LanguageSwitcher />
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#0a0a0a]/50 border border-neutral-900 hover:border-neutral-700 rounded-full text-[9px] font-mono uppercase tracking-[0.12em] text-neutral-400 hover:text-white hover:bg-neutral-900/30 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              title="Telegram Channel"
              id="top-tg-btn"
            >
              <Send size={9} className="text-neutral-500 group-hover:text-neutral-200" />
              <span>TG</span>
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#0a0a0a]/50 border border-neutral-900 hover:border-neutral-700 rounded-full text-[9px] font-mono uppercase tracking-[0.12em] text-neutral-400 hover:text-white hover:bg-neutral-900/30 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              title="Twitter (X)"
              id="top-x-btn"
            >
              <svg viewBox="0 0 24 24" className="w-[9px] h-[9px] fill-current text-neutral-500 group-hover:text-neutral-200">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X</span>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#0a0a0a]/50 border border-neutral-900 hover:border-neutral-700 rounded-full text-[9px] font-mono uppercase tracking-[0.12em] text-neutral-400 hover:text-white hover:bg-neutral-900/30 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              title="Mini App Github"
              id="top-git-btn"
            >
              <Github size={9} className="text-neutral-500 group-hover:text-neutral-200" />
              <span>Git</span>
            </a>
            
            <a 
              href={socialLinks.telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1.5 px-4.5 py-2 bg-white text-black font-semibold text-[9px] font-mono uppercase tracking-[0.15em] flex items-center gap-1.5 rounded-full cursor-pointer hover:bg-neutral-200 active:scale-95 shadow-md shadow-white/5 transition-all duration-300"
              id="top-launch-mini-app-btn"
            >
              <span>{t('miniApp')}</span>
              <ArrowUpRight size={10} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-[#0c0c0c] border border-[#1c1c1c] text-[#888] hover:text-white transition-colors"
            id="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <CloseIcon size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-[#1c1c1c] overflow-hidden"
            id="mobile-drawer-menu"
          >
            <div className="px-5 py-6 space-y-4 flex flex-col">
              <div className="flex justify-end mb-2">
                <LanguageSwitcher />
              </div>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-mono uppercase tracking-widest text-[#888] hover:text-white">{t('navToken')}</a>
              <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-mono uppercase tracking-widest text-[#888] hover:text-white">{t('navTokenomics')}</a>
              <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-mono uppercase tracking-widest text-[#888] hover:text-white">{t('navRoadmap')}</a>
              <a href="#creators" onClick={() => setMobileMenuOpen(false)} className="text-[10px] font-mono uppercase tracking-widest text-[#888] hover:text-white">{t('navTeam')}</a>
              
              <div className="h-px bg-[#111] w-full" />
              
              <div className="flex gap-2">
                <a href={socialLinks.telegram} className="flex-1 text-center py-2 bg-[#0c0c0c] border border-[#1c1c1c] rounded text-[9px] font-mono uppercase tracking-widest text-[#888]" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a href={socialLinks.twitter} className="flex-1 text-center py-2 bg-[#0c0c0c] border border-[#1c1c1c] rounded text-[9px] font-mono uppercase tracking-widest text-[#888]" target="_blank" rel="noopener noreferrer">Twitter X</a>
                <a href={socialLinks.github} className="flex-1 text-center py-2 bg-[#0c0c0c] border border-[#1c1c1c] rounded text-[9px] font-mono uppercase tracking-widest text-[#888]" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <a
                href={socialLinks.telegram}
                className="w-full text-center py-3 bg-white text-black font-semibold rounded text-[10px] font-mono uppercase tracking-widest"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('runMiniApp')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 space-y-24 sm:space-y-40" id="main-content-flow">
        
        {/* Hero Landing Section */}
        <section className="relative flex flex-col items-center justify-center text-center pt-8 sm:pt-16 pb-16 space-y-12" id="hero-section">
          
          {/* Main Visual Wordmark */}
          <div className="max-w-4xl mx-auto flex flex-col items-center" id="hero-main-wordmark-wrapper">
            {/* Giant Centered Headline wordmark */}
            <div className="relative" id="title-glow-stack">
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extralight text-6xl sm:text-8xl md:text-9xl tracking-[0.2em] text-white uppercase leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 pl-[0.2em]" 
                id="hero-giant-title"
              >
                {t('heroTitle')}
              </motion.h1>
              {/* Subtle elegant backdrop blur line */}
              <div className="absolute -inset-x-12 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Clean minimalist logo in action */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center py-4"
            id="hero-logo-center"
          >
            <div className="absolute -inset-4 bg-white/[0.02] rounded-full blur-xl pointer-events-none" />
            <div className="relative p-5 rounded-full bg-black border border-neutral-800/60 shadow-2xl hover:border-neutral-700 transition-colors duration-500">
              <Logo size={120} animated={true} />
            </div>
          </motion.div>

          {/* Compact visual Action Area & Address Selector */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl px-4 space-y-8 flex flex-col items-center"
            id="hero-actions-center-block"
          >
            {/* Quick Hero Call To Actions */}
            <div className="flex flex-wrap gap-4 items-center justify-center w-full">
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8.5 py-4 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-widest flex items-center gap-2.5 cursor-pointer hover:bg-neutral-200 active:scale-95 transition-all shadow-lg"
                id="hero-join-tg-btn"
              >
                <Send size={12} />
                <span>{t('tgAction')}</span>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#0c0c0c] border border-[#1c1c1c] hover:border-white text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all cursor-pointer active:scale-95"
                id="hero-github-btn"
              >
                <Github size={12} className="text-[#888]" />
                <span>{t('gitAction')}</span>
              </a>
            </div>

            {/* Network / Copy Address Selector Widget centered perfectly */}
            <div className="w-full max-w-xl" id="network-widget-wrap">
              <NetworkSelector />
            </div>
          </motion.div>
        </section>

        {/* Feature Highlights Grid Section */}
        <section className="space-y-12" id="about">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-2xl sm:text-4xl tracking-widest uppercase text-white mb-2"
            >
              {t('utilities')}
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-12 h-[1px] bg-[#333] mx-auto opacity-60 origin-center" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" id="custom-features-grid">
            
            {/* Unique Utility #1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative overflow-hidden bg-[#070707]/60 backdrop-blur-md border border-neutral-900 rounded-2xl p-8 flex flex-col justify-between h-full group" 
              id="feature-card-vpn"
            >
              <div className="blur-[5px] select-none pointer-events-none opacity-[0.22] flex flex-col justify-between h-full w-full transition-all duration-500">
                <div>
                  <div className="w-11 h-11 rounded bg-[#050505]/60 border border-neutral-900/60 flex items-center justify-center mb-6">
                    <span className="text-white font-semibold font-mono text-xs tracking-widest">VPN</span>
                  </div>
                  <h3 className="font-display text-sm uppercase tracking-widest text-white mb-3">{t('vpnTitle')}</h3>
                  <p className="text-[#666] text-xs leading-relaxed font-sans font-light">
                    {t('vpnDesc')}
                  </p>
                </div>
                <div className="mt-8 text-[9px] font-mono text-[#444] uppercase tracking-widest flex items-center justify-between">
                  <span>{t('security')}</span>
                  <span className="text-white font-bold">100% FREE</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400 bg-[#070707]/90 border border-neutral-850 px-4 py-1.5 rounded-full backdrop-blur-md shadow-xl">
                  {t('inDevelopment')}
                </span>
              </div>
            </motion.div>

            {/* Unique Utility #2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative overflow-hidden bg-[#070707]/60 backdrop-blur-md border border-neutral-900/40 rounded-2xl p-8 flex flex-col justify-between h-full group" 
              id="feature-card-storage"
            >
              <div className="blur-[5px] select-none pointer-events-none opacity-[0.22] flex flex-col justify-between h-full w-full transition-all duration-500">
                <div>
                  <div className="w-11 h-11 rounded bg-[#050505]/60 border border-neutral-900/60 flex items-center justify-center mb-6">
                    <span className="text-[#aaa] font-semibold font-mono text-xs tracking-widest">CLS</span>
                  </div>
                  <h3 className="font-display text-sm uppercase tracking-widest text-white mb-3">{t('storageTitle')}</h3>
                  <p className="text-[#666] text-xs leading-relaxed font-sans font-light">
                    {t('storageDesc')}
                  </p>
                </div>
                <div className="mt-8 text-[9px] font-mono text-[#444] uppercase tracking-widest flex items-center justify-between">
                  <span>AES-256</span>
                  <span className="text-white font-bold">UNLIMITED</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400 bg-[#070707]/90 border border-neutral-850 px-4 py-1.5 rounded-full backdrop-blur-md shadow-xl">
                  {t('inDevelopment')}
                </span>
              </div>
            </motion.div>

            {/* Unique Utility #3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative overflow-hidden bg-[#070707]/60 backdrop-blur-md border border-neutral-900/40 rounded-2xl p-8 flex flex-col justify-between h-full group" 
              id="feature-card-ai"
            >
              <div className="blur-[5px] select-none pointer-events-none opacity-[0.22] flex flex-col justify-between h-full w-full transition-all duration-500">
                <div>
                  <div className="w-11 h-11 rounded bg-[#050505]/60 border border-neutral-900/60 flex items-center justify-center mb-6">
                    <span className="text-[#666] font-semibold font-mono text-xs tracking-widest">AI</span>
                  </div>
                  <h3 className="font-display text-sm uppercase tracking-widest text-white mb-3">{t('aiTitle')}</h3>
                  <p className="text-[#666] text-xs leading-relaxed font-sans font-light">
                    {t('aiDesc')}
                  </p>
                </div>
                <div className="mt-8 text-[9px] font-mono text-[#444] uppercase tracking-widest flex items-center justify-between">
                  <span>GEMINI CORE</span>
                  <span className="text-white font-bold">API KEY</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400 bg-[#070707]/90 border border-neutral-850 px-4 py-1.5 rounded-full backdrop-blur-md shadow-xl">
                  {t('inDevelopment')}
                </span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="scroll-mt-24" id="tokenomics">
          <Tokenomics />
        </section>

        {/* Ecosystem Roadmap Section */}
        <section className="scroll-mt-24" id="roadmap">
          <Roadmap />
        </section>

        {/* Creators / Team Section */}
        <section className="scroll-mt-24" id="creators">
          <Creators />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#111] bg-black py-16 mt-24" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Branding widget */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <Logo size={24} animated={false} />
                <span className="font-display font-light text-lg tracking-[0.2em] uppercase text-white leading-none">WhyNot</span>
              </div>
            </div>

            {/* Quick Links Map */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-mono text-[10px] text-[#444] uppercase tracking-widest font-bold">{t('pages')}</h4>
              <ul className="space-y-2 text-xs text-[#666] font-sans font-light">
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-white transition-colors"
                  >
                    {t('navToken')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#tokenomics" 
                    onClick={(e) => { e.preventDefault(); document.getElementById('tokenomics')?.scrollIntoView({ behavior: 'smooth' }); }} 
                    className="hover:text-white transition-colors"
                  >
                    {t('navTokenomics')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#roadmap" 
                    onClick={(e) => { e.preventDefault(); document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' }); }} 
                    className="hover:text-white transition-colors"
                  >
                    {t('navRoadmap')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#creators" 
                    onClick={(e) => { e.preventDefault(); document.getElementById('creators')?.scrollIntoView({ behavior: 'smooth' }); }} 
                    className="hover:text-white transition-colors"
                  >
                    {t('navTeam')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Placeholders explorer and links */}
            <div className="md:col-span-3 space-y-3 relative overflow-hidden group min-h-[120px]">
              <div className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-[2px] bg-[#000000]/25 rounded-xl">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 bg-neutral-900/80 rounded border border-neutral-800 text-white shadow-xl">
                  {t('soon')}
                </span>
              </div>
              <div className="opacity-30 select-none pointer-events-none space-y-3">
                <h4 className="font-mono text-[10px] text-[#444] uppercase tracking-widest font-bold">{t('explorers')}</h4>
                <div className="flex flex-col gap-2">
                  <div
                    className="flex items-center justify-between p-2 rounded bg-[#0c0c0c] border border-[#1c1c1c] text-[#444] text-xs font-mono"
                    id="footer-tonviewer-address"
                  >
                    <span>EQ●●●●●●...777</span>
                    <div className="flex items-center gap-1 text-[9px] text-[#333]">
                      <span>tonviewer</span>
                      <ExternalLink size={8} />
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2 rounded bg-[#0c0c0c] border border-[#1c1c1c] text-[#444] text-xs font-mono"
                    id="footer-solscan-address"
                  >
                    <span>Why●●●●●●...9p</span>
                    <div className="flex items-center gap-1 text-[9px] text-[#333]">
                      <span>solscan</span>
                      <ExternalLink size={8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright plate */}
          <div className="border-t border-[#111] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#444] font-mono uppercase tracking-widest" id="footer-bottom-compliance">
            <div>
              <span>© 2026 WhyNot ($WHYNOT) Ecosystem. {t('allRightsReserved')}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a>
              <span>•</span>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter (X)</a>
              <span>•</span>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
