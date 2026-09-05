import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  Award, 
  UserCheck, 
  GitFork, 
  Filter, 
  CheckCircle2, 
  Info,
  SlidersHorizontal
} from 'lucide-react';
import { BusinessPriority, FrictionPoint, FrictionCategory } from '../types';
import { BusinessPrioritiesCard } from './BusinessPrioritiesCard';
import { FrictionPointCard } from './FrictionPointCard';

interface Screen1Props {
  priorities: BusinessPriority[];
  frictionPoints: FrictionPoint[];
  rankedIds: [string | null, string | null, string | null];
  onAssignRank: (frictionId: string, rankPosition: 1 | 2 | 3) => void;
  onRemoveRank: (frictionId: string) => void;
  onResetRanks: () => void;
  onApplyDefaultTopThree: () => void;
  onProceedToSummary: () => void;
}

export const Screen1PrioritiesAndFriction: React.FC<Screen1Props> = ({
  priorities,
  frictionPoints,
  rankedIds,
  onAssignRank,
  onRemoveRank,
  onResetRanks,
  onApplyDefaultTopThree,
  onProceedToSummary
}) => {
  const [selectedPriorityFilter, setSelectedPriorityFilter] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<FrictionCategory | 'ALL'>('ALL');

  // Count how many ranks are filled
  const rankedCount = rankedIds.filter(Boolean).length;
  const isComplete = rankedCount === 3;

  // Filtered friction points
  const filteredPoints = frictionPoints.filter((fp) => {
    if (selectedPriorityFilter && fp.priorityId !== selectedPriorityFilter) {
      return false;
    }
    if (selectedCategoryFilter !== 'ALL' && fp.category !== selectedCategoryFilter) {
      return false;
    }
    return true;
  });

  // Helper to find rank for a friction point
  const getRankForId = (id: string): number | null => {
    const idx = rankedIds.indexOf(id);
    return idx !== -1 ? (idx + 1) : null;
  };

  // Get ranked friction items
  const rankedItems = rankedIds.map((id) => (id ? frictionPoints.find((fp) => fp.id === id) || null : null));

  return (
    <div className="pb-32 space-y-6">
      {/* Introduction Guidance for the CEO */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Executive Decision Workflow</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Identify & Rank Top 3 Organizational Friction Points
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Review capability gaps, succession risks, and organizational bottlenecks across your 1,240-strong Singapore operations. Tap <strong className="text-amber-300">Rank #1</strong>, <strong className="text-amber-300">Rank #2</strong>, and <strong className="text-amber-300">Rank #3</strong> on any friction point to synthesize your executive intervention strategy.
            </p>
          </div>

          {/* Preset & Reset Quick Action */}
          <div className="flex flex-row md:flex-col items-center sm:items-end gap-2 shrink-0">
            <button
              id="apply-recommended-preset-btn"
              onClick={onApplyDefaultTopThree}
              className="w-full sm:w-auto px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Load Board Recommendation</span>
            </button>

            {rankedCount > 0 && (
              <button
                id="reset-rankings-btn"
                onClick={onResetRanks}
                className="w-full sm:w-auto px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-1 transition-all"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Selection</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 1: Top 3 Business Priorities */}
      <BusinessPrioritiesCard
        priorities={priorities}
        selectedPriorityFilter={selectedPriorityFilter}
        onSelectPriorityFilter={setSelectedPriorityFilter}
      />

      {/* SECTION 2: Friction Points Catalog Header & Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-amber-600" />
              <span>Friction Points by Operational Category</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {filteredPoints.length} of {frictionPoints.length} items
              </span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select one item for Rank #1, Rank #2, and Rank #3 focus areas.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              id="filter-cat-all"
              onClick={() => setSelectedCategoryFilter('ALL')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors min-h-[38px] ${
                selectedCategoryFilter === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Types ({frictionPoints.length})
            </button>
            <button
              id="filter-cat-gaps"
              onClick={() => setSelectedCategoryFilter('Capability Gap')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors min-h-[38px] flex items-center gap-1 ${
                selectedCategoryFilter === 'Capability Gap'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Capability Gaps (5)
            </button>
            <button
              id="filter-cat-succession"
              onClick={() => setSelectedCategoryFilter('Succession Risk')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors min-h-[38px] flex items-center gap-1 ${
                selectedCategoryFilter === 'Succession Risk'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Succession Risks (3)
            </button>
            <button
              id="filter-cat-bottleneck"
              onClick={() => setSelectedCategoryFilter('Organizational Bottleneck')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors min-h-[38px] flex items-center gap-1 ${
                selectedCategoryFilter === 'Organizational Bottleneck'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              <GitFork className="w-3.5 h-3.5" />
              Bottlenecks (4)
            </button>
          </div>
        </div>

        {/* Friction Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPoints.map((friction) => {
            const currentRank = getRankForId(friction.id);
            return (
              <FrictionPointCard
                key={friction.id}
                friction={friction}
                currentRank={currentRank}
                rankedList={rankedIds.map((id) => id || '')}
                onAssignRank={onAssignRank}
                onRemoveRank={onRemoveRank}
              />
            );
          })}
        </div>
      </div>

      {/* STICKY BOTTOM BAR FOR MOBILE & DESKTOP (CEO Decision Tray) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl px-4 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Status and selected preview */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
              isComplete ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-amber-400'
            }`}>
              {rankedCount}/3
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {isComplete
                    ? 'Top 3 Focus Areas Ranked'
                    : `Select ${3 - rankedCount} More Friction Point${3 - rankedCount === 1 ? '' : 's'}`}
                </span>
                {isComplete && (
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Executive Summary
                  </span>
                )}
              </div>

              {/* Badges preview */}
              <div className="flex items-center gap-2 mt-1">
                {[0, 1, 2].map((idx) => {
                  const item = rankedItems[idx];
                  return (
                    <span
                      key={idx}
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded truncate max-w-[120px] sm:max-w-[180px] ${
                        item
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-slate-800 text-slate-500 border border-slate-700'
                      }`}
                      title={item ? `#${idx + 1}: ${item.title}` : `Slot #${idx + 1} Empty`}
                    >
                      #{idx + 1}: {item ? item.title.split(' ')[0] + '...' : 'Unassigned'}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              id="proceed-to-summary-btn"
              onClick={onProceedToSummary}
              disabled={!isComplete}
              className={`w-full sm:w-auto min-h-[48px] px-5 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg ${
                isComplete
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 cursor-pointer ring-2 ring-amber-300'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              <span>View Executive Summary & Actions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
