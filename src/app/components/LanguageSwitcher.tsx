// components/LanguageSwitcher.tsx
"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";


export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ];

  return (
    <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-full border border-border/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            px-3 py-1 rounded-full text-xs font-medium transition-all duration-300
            ${language === lang.code 
              ? 'bg-background shadow-sm text-primary scale-105' 
              : 'text-muted-foreground hover:text-primary hover:bg-background/50'}
          `}
        >
          <span className="mr-1 sm:hidden">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};