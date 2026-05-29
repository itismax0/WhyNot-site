import React from 'react';
import { motion } from 'motion/react';
import { Github, Send } from 'lucide-react';
import { Creator } from '../types';
import { useLanguage } from '../i18n';

export const Creators: React.FC = () => {
  const { t } = useLanguage();
  const creators: (Creator & { avatarUrl: string })[] = [
    {
      name: 'Alexander Starov',
      role: t('team2Role'),
      telegram: 'big_mops',
      github: 'big-mops',
      avatarUrl: 'https://avatars.githubusercontent.com/u/102292209?v=4'
    },
    {
      name: 'Maxim',
      role: t('team1Role'),
      telegram: 'durovtongod',
      github: 'itismax0',
      avatarUrl: 'https://github.com/itismax0.png'
    },
    {
      name: 'Michael Davtyan',
      role: t('team3Role'),
      telegram: 'malz3n',
      github: 'malz3n',
      avatarUrl: 'https://avatars.githubusercontent.com/u/173052691?v=4'
    }
  ];

  return (
    <div className="w-full" id="creators-section-root">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-2xl sm:text-4xl tracking-widest uppercase text-white mb-2" id="creators-title"
        >
          {t('teamTitle')}
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-12 h-[1px] bg-neutral-800 mx-auto my-4 origin-center" 
        />
      </div>

      {/* Modern, perfectly balanced, symmetrical grid of minimal team cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4" id="creators-cards-grid">
        {creators.map((member, index) => {
          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="group relative bg-[#070707] border border-neutral-900 hover:border-neutral-800 rounded-xl p-5 sm:p-6 flex items-center justify-between transition-all duration-300"
              id={`creator-card-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Left Side: Avatar and Info stack */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-neutral-800 group-hover:border-neutral-700 transition-colors duration-300 bg-neutral-950 select-none pointer-events-none"
                  />
                  {/* Subtle active status indicator dot */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#070707] shadow-sm" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-display font-medium text-sm text-neutral-200 group-hover:text-white tracking-wide transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Right Side: Clean minimal social links row */}
              <div className="flex items-center gap-1.5 matches-uniform">
                <a
                  href={`https://t.me/${member.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-950 hover:bg-neutral-900 border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-white transition-all"
                  title="Telegram"
                  id={`creator-tg-link-${member.telegram}`}
                >
                  <Send size={11} className="w-3.5 h-3.5" />
                </a>

                {member.github && (
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-950 hover:bg-neutral-900 border border-neutral-900 hover:border-neutral-800 text-neutral-500 hover:text-white transition-all"
                    title="GitHub"
                    id={`creator-github-link-${member.github}`}
                  >
                    <Github size={11} className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
