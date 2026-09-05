import React from 'react';
import { Compass, Users, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { COMPANY_PROFILE } from '../data';

interface HeaderProps {
  currentScreen: 1 | 2;
  onNavigate: (screen: 1 | 2) => void;
  selectedCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, selectedCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Brand & Entity Context */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black tracking-tight shrink-0 shadow-sm">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">OrgCompass</span>
                <span className="text-[11px] font-semibold bg-slate-800 text-amber-400 px-2 py-0.5 rounded border border-slate-700">
                  CEO Suite
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 truncate">
                <span>{COMPANY_PROFILE.name}</span>
                <span className="text-slate-600">•</span>
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-400" />
                  {COMPANY_PROFILE.totalHeadcount.toLocaleString()} SG staff
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  Singapore Multi-Hub
                </span>
              </p>
            </div>
          </div>

          {/* Screen Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              id="nav-screen-1-btn"
              onClick={() => onNavigate(1)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                currentScreen === 1
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>1. Priorities & Friction</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                currentScreen === 1 ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-amber-400'
              }`}>
                {selectedCount}/3
              </span>
            </button>

            <button
              id="nav-screen-2-btn"
              onClick={() => onNavigate(2)}
              disabled={selectedCount < 3}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                currentScreen === 2
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : selectedCount === 3
                  ? 'text-slate-200 bg-slate-800 hover:bg-slate-700'
                  : 'text-slate-500 bg-slate-900 cursor-not-allowed border border-slate-800'
              }`}
              title={selectedCount < 3 ? 'Rank top 3 friction points in Screen 1 first' : 'View Executive Summary'}
            >
              <span>2. Executive Summary</span>
              {currentScreen === 1 ? (
                <ArrowRight className="w-3.5 h-3.5" />
              ) : (
                <ArrowLeft className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
