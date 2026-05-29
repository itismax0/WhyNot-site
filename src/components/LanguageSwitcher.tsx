import React from 'react';
import { useLanguage } from '../i18n';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex bg-[#0a0a0a]/50 border border-neutral-900 rounded-full p-[3px] transition-all duration-300">
      <button
        onClick={() => setLanguage('ru')}
        className={`px-2.5 py-0.5 text-[9px] font-mono tracking-[0.05em] rounded-full transition-all duration-300 ${
          language === 'ru' ? 'bg-neutral-800/70 text-white border border-neutral-700/50 shadow-sm shadow-black/20' : 'text-neutral-500 hover:text-white'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-0.5 text-[9px] font-mono tracking-[0.05em] rounded-full transition-all duration-300 ${
          language === 'en' ? 'bg-neutral-800/70 text-white border border-neutral-700/50 shadow-sm shadow-black/20' : 'text-neutral-500 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
