import React from 'react';
import { Target, TrendingUp, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BusinessPriority } from '../types';

interface BusinessPrioritiesCardProps {
  priorities: BusinessPriority[];
  selectedPriorityFilter: string | null;
  onSelectPriorityFilter: (priorityId: string | null) => void;
}

export const BusinessPrioritiesCard: React.FC<BusinessPrioritiesCardProps> = ({
  priorities,
  selectedPriorityFilter,
  onSelectPriorityFilter
}) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-100 text-amber-900">
              <Target className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Top 3 Business Priorities
            </h2>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            Mandated strategic deliverables for Singapore logistics operations (FY2026/27).
          </p>
        </div>

        {selectedPriorityFilter && (
          <button
            id="clear-priority-filter-btn"
            onClick={() => onSelectPriorityFilter(null)}
            className="self-start sm:self-auto text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors"
          >
            Clear Filter (Show All 12 Friction Points)
          </button>
        )}
      </div>

      {/* 3 Priorities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {priorities.map((priority, index) => {
          const isFilterActive = selectedPriorityFilter === priority.id;
          return (
            <div
              key={priority.id}
              id={`priority-card-${priority.id}`}
              onClick={() => onSelectPriorityFilter(isFilterActive ? null : priority.id)}
              className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border-2 relative flex flex-col justify-between ${
                isFilterActive
                  ? 'border-amber-500 bg-amber-50/70 shadow-md ring-2 ring-amber-400/30'
                  : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-slate-100/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-900 text-amber-300">
                    Priority {index + 1}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {priority.timeline}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {priority.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                  {priority.context}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-1.5">
                  <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-800">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Target: {priority.target}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Metric: {priority.metric}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-500">
                  {priority.strategicWeight}
                </span>
                <span className={`inline-flex items-center gap-1 font-medium ${
                  isFilterActive ? 'text-amber-800 font-bold' : 'text-slate-500'
                }`}>
                  {isFilterActive ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      Filtering friction points
                    </>
                  ) : (
                    'Tap to view friction points'
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
