import React from 'react';
import { 
  AlertTriangle, 
  UserCheck, 
  GitFork, 
  MapPin, 
  Users, 
  Award, 
  Check, 
  X,
  ChevronRight
} from 'lucide-react';
import { FrictionPoint } from '../types';

interface FrictionPointCardProps {
  friction: FrictionPoint;
  currentRank: number | null; // 1, 2, 3 or null
  rankedList: string[]; // array of 3 ids: [id1, id2, id3]
  onAssignRank: (frictionId: string, rankPosition: 1 | 2 | 3) => void;
  onRemoveRank: (frictionId: string) => void;
}

export const FrictionPointCard: React.FC<FrictionPointCardProps> = ({
  friction,
  currentRank,
  rankedList,
  onAssignRank,
  onRemoveRank
}) => {
  const isRanked = currentRank !== null;

  // Visual cues based on Category
  const getCategoryTheme = (category: FrictionPoint['category']) => {
    switch (category) {
      case 'Capability Gap':
        return {
          badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
          icon: <Award className="w-4 h-4 text-blue-700 shrink-0" />,
          accentBorder: 'border-l-4 border-l-blue-600'
        };
      case 'Succession Risk':
        return {
          badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
          icon: <UserCheck className="w-4 h-4 text-purple-700 shrink-0" />,
          accentBorder: 'border-l-4 border-l-purple-600'
        };
      case 'Organizational Bottleneck':
        return {
          badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
          icon: <GitFork className="w-4 h-4 text-amber-700 shrink-0" />,
          accentBorder: 'border-l-4 border-l-amber-600'
        };
    }
  };

  const theme = getCategoryTheme(friction.category);

  return (
    <div
      id={`friction-point-${friction.id}`}
      className={`rounded-2xl border transition-all duration-200 bg-white p-4 sm:p-5 flex flex-col justify-between relative shadow-sm ${theme.accentBorder} ${
        isRanked
          ? 'ring-2 ring-amber-500 bg-amber-50/30 border-amber-300 shadow-md'
          : 'border-slate-200 hover:border-slate-300 hover:shadow'
      }`}
    >
      {/* Top Meta Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${theme.badgeBg}`}>
              {theme.icon}
              <span>{friction.category}</span>
            </span>

            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
              {friction.priorityCode}
            </span>
          </div>

          {/* Ranking Badge if selected */}
          {isRanked && (
            <div className="flex items-center gap-1.5 bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-full text-xs shadow-sm">
              <span>RANK #{currentRank} FOCUS</span>
              <button
                id={`remove-rank-${friction.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveRank(friction.id);
                }}
                className="w-5 h-5 rounded-full bg-slate-950/20 hover:bg-slate-950/40 flex items-center justify-center transition-colors ml-1"
                title="Remove ranking"
                aria-label={`Remove rank for ${friction.title}`}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
          {friction.title}
        </h4>

        {/* Singapore Site & Department */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-slate-600 font-medium">
          <span className="inline-flex items-center gap-1 text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            {friction.location}
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1 text-slate-700">
            <Users className="w-3.5 h-3.5 text-slate-500" />
            {friction.headcountAffected} staff impacted
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-normal">
            {friction.department}
          </span>
        </div>

        {/* Description & Impact */}
        <div className="mt-3 space-y-2">
          <p className="text-sm text-slate-700 leading-relaxed">
            {friction.description}
          </p>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <div className="flex items-center gap-1 font-bold text-red-700">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>Executive Business Risk:</span>
            </div>
            <p className="text-slate-600 leading-normal pl-4.5">
              {friction.businessImpact}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Ranking Controls for CEO */}
      <div className="mt-5 pt-3.5 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <span className="text-xs font-semibold text-slate-500">
            {isRanked ? 'Update Rank Priority:' : 'Rank for Executive Action:'}
          </span>

          <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto">
            {([1, 2, 3] as const).map((rankPos) => {
              const isThisPosActive = currentRank === rankPos;
              const isOccupied = rankedList[rankPos - 1] && rankedList[rankPos - 1] !== friction.id;

              return (
                <button
                  key={rankPos}
                  id={`btn-rank-${rankPos}-${friction.id}`}
                  onClick={() => onAssignRank(friction.id, rankPos)}
                  className={`min-h-[44px] px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                    isThisPosActive
                      ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                  title={isOccupied ? `Replace current #${rankPos}` : `Rank as #${rankPos}`}
                >
                  {isThisPosActive ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>#{rankPos}</span>
                    </>
                  ) : (
                    <span>Rank #{rankPos}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
