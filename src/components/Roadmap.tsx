import React from 'react';
import { motion } from 'motion/react';
import { Check, Clock, Lock, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  status: 'completed' | 'ongoing' | 'locked';
}

export const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  const steps: TimelineItem[] = [
    {
      id: 'idea',
      title: t('roadmapIdea'),
      subtitle: `${t('phase')} 1`,
      description: t('roadmapIdeaDesc'),
      status: 'completed',
    },
    {
      id: 'team',
      title: t('roadmapTeam'),
      subtitle: `${t('phase')} 2`,
      description: t('roadmapTeamDesc'),
      status: 'completed',
    },
    {
      id: 'socials',
      title: t('roadmapSocials'),
      subtitle: `${t('phase')} 3`,
      description: t('roadmapSocialsDesc'),
      status: 'completed',
    },
    {
      id: 'website',
      title: t('roadmapWebsite'),
      subtitle: `${t('phase')} 4`,
      description: t('roadmapWebsiteDesc'),
      status: 'completed',
    },
    {
      id: 'miniapp',
      title: t('roadmapMiniApp'),
      subtitle: `${t('phase')} 5`,
      description: t('roadmapMiniAppDesc'),
      status: 'ongoing',
    },
    {
      id: 'mystery-1',
      title: t('roadmapSecret1'),
      subtitle: `${t('phase')} 6`,
      description: t('roadmapSecret1Desc'),
      status: 'locked',
    },
    {
      id: 'mystery-2',
      title: t('roadmapSecret2'),
      subtitle: `${t('phase')} 7`,
      description: t('roadmapSecret2Desc'),
      status: 'locked',
    },
    {
      id: 'mystery-3',
      title: t('roadmapSecret3'),
      subtitle: `${t('phase')} 8`,
      description: t('roadmapSecret3Desc'),
      status: 'locked',
    },
  ];

  return (
    <div className="w-full" id="roadmap-section-root">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-2xl sm:text-4xl tracking-widest uppercase text-white mb-2" id="roadmap-title"
        >
          {t('roadmapTitle')}
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-12 h-[1px] bg-[#333] mx-auto my-4 origin-center" 
        />
      </div>

      {/* Extreme Minimalist Timeline (Horizontal Scroll on Desktop, Stack on Mobile) */}
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none pb-8" id="roadmap-scroller">
        <div className="min-w-[1000px] lg:min-w-0 lg:w-full relative flex items-start justify-between py-6" id="roadmap-timeline-bar">
          
          {/* Background Connecting Timeline Line */}
          <div className="absolute top-[48px] left-[4%] right-[4%] h-[1px] bg-[#1a1a1a] z-0" id="timeline-line-bg">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '55%' }} // covers the line up to the 5th element (MiniApp)
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
              className="h-full bg-white" 
              id="timeline-line-progress"
            />
          </div>

          {/* Timeline Nodes */}
          {steps.map((step, index) => {
            const isCompleted = step.status === 'completed';
            const isOngoing = step.status === 'ongoing';
            const isLocked = step.status === 'locked';

            return (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center px-2 flex-1 group" 
                id={`timeline-node-${step.id}`}
              >
                {/* Visual Indicator Ball */}
                <div 
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border ${
                    isCompleted 
                      ? 'bg-white border-white text-black' 
                      : isOngoing 
                      ? 'bg-black border-white text-white shadow-sm shadow-white/30 animate-pulse' 
                      : 'bg-black border-[#222] text-[#333]'
                  }`}
                  id={`node-ball-${step.id}`}
                >
                  {isCompleted && <Check size={14} strokeWidth={3} />}
                  {isOngoing && <Clock size={14} className="animate-spin-slow" />}
                  {isLocked && <Lock size={12} />}
                </div>

                {/* Subtitle/Phase indicator */}
                <span className={`text-[9px] uppercase font-mono tracking-widest mt-4 font-semibold ${isLocked ? 'text-[#333]' : 'text-[#888]'}`}>
                  {step.subtitle}
                </span>

                {/* Node Text Info Wrapper */}
                <div className="mt-3 max-w-[160px] mx-auto space-y-1.5 transition-all duration-500">
                  <h3 className={`font-display text-xs uppercase tracking-wider font-semibold ${
                    isLocked ? 'text-[#444] line-through decoration-[#222]' : 'text-white'
                  }`}>
                    {isLocked ? '???' : step.title}
                  </h3>

                  {isLocked ? (
                    <div className="space-y-1">
                      {/* Blurred mock lines representing locked future details for mystery and intrigue */}
                      <p className="text-[10px] text-[#222] font-mono uppercase tracking-widest select-none bg-[#111] px-1.5 py-1 rounded inline-block">
                        {t('classified')}
                      </p>
                      <p className="text-[#333] text-[10px] leading-relaxed select-none blur-[3px]">
                        {t('lockedDesc')}
                      </p>
                    </div>
                  ) : (
                    <p className="text-[#666] text-[10px] leading-relaxed font-sans font-light">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* Minimalist interactive indicators */}
                {!isLocked && (
                  <div className={`mt-2 w-1.5 h-1.5 rounded-full transition-colors ${isCompleted ? 'bg-white/45' : 'bg-white animate-pulse'}`} />
                )}
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
};
