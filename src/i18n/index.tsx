import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en';

export const translations = {
  en: {
    // App.tsx
    navToken: 'About Token',
    navTokenomics: 'Tokenomics',
    navRoadmap: 'Roadmap',
    navTeam: 'Team',
    ecosystem: 'Ecosystem',
    miniApp: 'Mini-App',
    runMiniApp: 'Launch Mini-App',
    utilities: 'ECOSYSTEM UTILITIES',
    vpnTitle: 'Decentralized VPN',
    vpnDesc: 'Cryptographic peer-to-peer VPN right on your device. No censors, no log servers, and no ISP throttling.',
    security: 'SECURITY',
    inDevelopment: 'in development',
    storageTitle: 'Encrypted Cloud',
    storageDesc: 'Reliable decentralized file storage based on IPFS peer hashes with hidden end-to-end distribution and no size limits.',
    aiTitle: 'Chatbot & API Assistant',
    aiDesc: 'Smart assistant right on board your Mini App. Can write a smart contract, do an express token audit on TON, or develop a media plan.',
    tokenomicsTitle: 'Tokenomics',
    pages: 'Pages',
    explorers: 'Explorers',
    allRightsReserved: 'All rights reserved.',
    
    // Tokenomics & Address
    ticker: 'TICKER',
    contractAddress: 'Contract Address',
    liquidityCollection: 'LIQUIDITY COLLECTION',
    launch: 'LAUNCH',
    copied: 'DONE',
    copy: 'Copy',
    listing: 'Listing on DeDust (DEX)',
    supply: 'Total Supply',
    liquidity: 'Liquidity (Pool & DEX)',
    liquidityDesc: 'Liquidity initialization on DeDust, STON.fi, and Raydium decentralized exchanges with locking.',
    airdrop: 'Community & Airdrops',
    airdropDesc: 'Rewards for active community members, mini-app builders, event quests, and referrals.',
    marketing: 'Marketing & Listings',
    marketingDesc: 'Funding for viral marketing campaigns, key influencers partnership, and future CEX listings.',
    devFund: 'Creators & Development',
    devFundDesc: 'Part reserved for the core creators team with linear lock-up and vesting over 18 months.',
    
    distribution: 'DISTRIBUTION',
    hoverForDetails: '* HOVER OVER SECTOR FOR DETAILS',
    tax: 'Tax',
    liquidityStatus: 'Liquidity',
    soon: 'SOON',
    
    // Roadmap
    roadmapTitle: 'Roadmap',
    phase: 'Phase',
    classified: 'CLASSIFIED',
    lockedDesc: 'Locked. This development stage is hidden for intrigue.',
    
    roadmapIdea: 'Idea Generation',
    roadmapIdeaDesc: 'Developed the core project idea and planned how it will work across different chains.',
    roadmapTeam: 'Team Assembly',
    roadmapTeamDesc: 'Assembled an experienced team with deep background in Web3.',
    roadmapSocials: 'Social Media Creation',
    roadmapSocialsDesc: 'Launched Telegram, Twitter and gathered our first community members.',
    roadmapWebsite: 'Website Creation',
    roadmapWebsiteDesc: 'Created this website with custom widgets and open-source code.',
    roadmapMiniApp: 'MiniApp Creation',
    roadmapMiniAppDesc: 'Developing a Telegram app with handy built-in features and tools.',
    roadmapSecret1: 'Classified Utility',
    roadmapSecret1Desc: 'Secret integration of hardware nodes and confidential networks. Complete anonymizer.',
    roadmapSecret2: 'Alpha Consensus Gateway',
    roadmapSecret2Desc: 'Completely new cross-chain mechanics of overflow liquidity without third-party validators.',
    roadmapSecret3: 'Global Memepad',
    roadmapSecret3Desc: 'Anonymous automated platform for launching local WhyNot tokens.',

    // Team
    teamTitle: 'Team',
    team1Role: 'CEO & Founder',
    team2Role: 'Core Developer',
    team3Role: 'UI/UX Visual Designer',

    buyToken: 'Buy Token',
    buyOnPrimary: 'Available soon on primary DEX exchanges',
    
    // Home / Hero
    heroTitle: 'Why Not?',
    tgAction: 'TELEGRAM',
    gitAction: 'GITHUB',
  },
  ru: {
    // App.tsx
    navToken: 'О токене',
    navTokenomics: 'Токеномика',
    navRoadmap: 'Roadmap',
    navTeam: 'Команда',
    ecosystem: 'Ecosystem',
    miniApp: 'Мини-Апп',
    runMiniApp: 'Запустить Мини-Апп',
    utilities: 'УТИЛИТЫ ЭКОСИСТЕМЫ',
    vpnTitle: 'Децентрализованный VPN',
    vpnDesc: 'Криптографический пиринговый VPN прямо на вашем устройстве. Никаких цензоров, серверов логов и замедления трафика со стороны провайдеров.',
    security: 'БЕЗОПАСНОСТЬ',
    inDevelopment: 'в разработке',
    storageTitle: 'Шифрованное Облако',
    storageDesc: 'Надежное децентрализованное хранилище файлов на базе пиринговых хэшей IPFS с возможностью скрытой сквозной раздачи без ограничения веса.',
    aiTitle: 'Чат-Бот и API Ассистент',
    aiDesc: 'Умный ассистент прямо на борту Вашего Mini App. Составит смарт-контракт, сделает экспресс-аудит токена на TON или разработает медиа-план.',
    tokenomicsTitle: 'Токеномика',
    pages: 'Страницы',
    explorers: 'Проводники',
    allRightsReserved: 'Все права защищены.',
    
    // Tokenomics & Address
    ticker: 'ТИКЕР',
    contractAddress: 'Contract Address',
    liquidityCollection: 'СБОР ЛИКВИДНОСТИ',
    launch: 'ЗАПУСК',
    copied: 'DONE',
    copy: 'Copy',
    listing: 'Листинг на DeDust (DEX)',
    supply: 'Общее предложение',
    liquidity: 'Ликвидация (Pool & DEX)',
    liquidityDesc: 'Инициализация ликвидности на децентрализованных площадках DeDust, STON.fi и Raydium с блокировкой.',
    airdrop: 'Комьюнити и Эйрдропы',
    airdropDesc: 'Награды активным участникам комьюнити, участникам мини-апа, квестов и реферальных программ.',
    marketing: 'Маркетинг и Листинги',
    marketingDesc: 'Финансирование вирусных маркетинговых активаций X/TG, интеграций с инфлюенсерами и CEX листингов.',
    devFund: 'Разработчики и Опционы',
    devFundDesc: 'Доля команды создателей с линейным клиффом и вестингом на 18 месяцев.',
    
    distribution: 'РАСПРЕДЕЛЕНИЕ',
    hoverForDetails: '* НАВЕДИТЕ НА СЕКТОР ДЛЯ ДЕТАЛЕЙ',
    tax: 'Налог',
    liquidityStatus: 'Ликвидность',
    soon: 'СКОРО',
    
    // Roadmap
    roadmapTitle: 'Roadmap',
    phase: 'Фаза',
    classified: 'CLASSIFIED',
    lockedDesc: 'Заблокировано. Данный этап развития скрыт для интриги.',
    
    roadmapIdea: 'Создание идеи',
    roadmapIdeaDesc: 'Придумали концепцию проекта и продумали, как всё будет работать на разных блокчейнах.',
    roadmapTeam: 'Сбор команды',
    roadmapTeamDesc: 'Собрали опытную команду с большим опытом в web3',
    roadmapSocials: 'Открытие соцсетей',
    roadmapSocialsDesc: 'Запустили официальные каналы и чаты, собрав первых активных участников.',
    roadmapWebsite: 'Запуск сайта',
    roadmapWebsiteDesc: 'Создали этот удобный сайт с полезными виджетами и открытым исходным кодом.',
    roadmapMiniApp: 'Выпуск MiniApp',
    roadmapMiniAppDesc: 'Разрабатываем крутое Telegram-приложение со встроенными функциями.',
    roadmapSecret1: 'Засекреченная утилита',
    roadmapSecret1Desc: 'Секретная интеграция аппаратных нод и конфиденциальных сетей. Полный анонимайзер.',
    roadmapSecret2: 'Альфа-Шлюз консенсуса',
    roadmapSecret2Desc: 'Абсолютно новая кросс-чейн механика переливных ликвидностей без третьих валидаторов.',
    roadmapSecret3: 'Глобальный мемпад',
    roadmapSecret3Desc: 'Анонимная автоматизированная площадка для запуска локальных токенов WhyNot.',

    // Team
    teamTitle: 'Команда',
    team1Role: 'CEO & Founder',
    team2Role: 'Core Developer',
    team3Role: 'UI/UX Visual Designer',

    buyToken: 'Купить токен',
    buyOnPrimary: 'Скоро будет доступно на основных DEX-биржах',
    
    heroTitle: 'Why Not?',
    tgAction: 'TELEGRAM',
    gitAction: 'GITHUB',
  }
};

type Translations = typeof translations.ru;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations['ru'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
