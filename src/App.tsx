import React, { useState } from 'react';
import { Header } from './components/Header';
import { Screen1PrioritiesAndFriction } from './components/Screen1PrioritiesAndFriction';
import { Screen2ExecutiveSummary } from './components/Screen2ExecutiveSummary';
import { BUSINESS_PRIORITIES, FRICTION_POINTS, COMPANY_PROFILE } from './data';
import { FrictionPoint } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<1 | 2>(1);

  // Pre-selected top 3 friction points for initial phone review, fully customizable by user
  const [rankedIds, setRankedIds] = useState<[string | null, string | null, string | null]>([
    'fp-01', // Changi GDP Cold-Chain Specialist Shortage
    'fp-05', // Tuas Yard AGV Mechatronics Competency Deficit
    'fp-07'  // Tuas Container Driver Shift Resistance & Automation Transition
  ]);

  // Handle assigning a specific friction point to Rank 1, 2, or 3
  const handleAssignRank = (frictionId: string, rankPosition: 1 | 2 | 3) => {
    setRankedIds((prev) => {
      const next: [string | null, string | null, string | null] = [prev[0], prev[1], prev[2]];
      const targetIndex = rankPosition - 1;

      // If this friction point is already ranked at another position, clear its previous position
      const existingIndex = next.indexOf(frictionId);
      if (existingIndex !== -1 && existingIndex !== targetIndex) {
        next[existingIndex] = null;
      }

      // Assign to target index
      next[targetIndex] = frictionId;
      return next;
    });
  };

  // Remove rank for a friction point
  const handleRemoveRank = (frictionId: string) => {
    setRankedIds((prev) => {
      const next: [string | null, string | null, string | null] = [prev[0], prev[1], prev[2]];
      const existingIndex = next.indexOf(frictionId);
      if (existingIndex !== -1) {
        next[existingIndex] = null;
      }
      return next;
    });
  };

  // Reset all 3 ranks
  const handleResetRanks = () => {
    setRankedIds([null, null, null]);
  };

  // Apply default top 3 recommendation
  const handleApplyDefaultTopThree = () => {
    setRankedIds(['fp-01', 'fp-05', 'fp-07']);
  };

  // Navigation between screens without page reload
  const handleNavigate = (screen: 1 | 2) => {
    if (screen === 2 && rankedIds.filter(Boolean).length < 3) {
      return;
    }
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retrieve ranked FrictionPoint objects in order
  const rankedPoints: FrictionPoint[] = rankedIds
    .map((id) => (id ? FRICTION_POINTS.find((fp) => fp.id === id) || null : null))
    .filter((fp): fp is FrictionPoint => fp !== null);

  const selectedCount = rankedIds.filter(Boolean).length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col selection:bg-amber-200 selection:text-slate-900">
      {/* Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        selectedCount={selectedCount}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 sm:px-6">
        {currentScreen === 1 ? (
          <Screen1PrioritiesAndFriction
            priorities={BUSINESS_PRIORITIES}
            frictionPoints={FRICTION_POINTS}
            rankedIds={rankedIds}
            onAssignRank={handleAssignRank}
            onRemoveRank={handleRemoveRank}
            onResetRanks={handleResetRanks}
            onApplyDefaultTopThree={handleApplyDefaultTopThree}
            onProceedToSummary={() => handleNavigate(2)}
          />
        ) : (
          <Screen2ExecutiveSummary
            rankedPoints={rankedPoints}
            priorities={BUSINESS_PRIORITIES}
            onBackToPriorities={() => handleNavigate(1)}
          />
        )}
      </main>

      {/* Academic Context & Guardrail Notice Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-300">
              OrgCompass • Strategic Talent & Organization Alignment Engine
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Simulated entity: {COMPANY_PROFILE.name} ({COMPANY_PROFILE.totalHeadcount} Singapore staff)
            </p>
          </div>

          <div className="text-[11px] text-slate-400 space-y-0.5 sm:text-right">
            <p>Singapore Management University (SMU) • MGMT 6110 Human-AI Collaboration</p>
            <p>Individual Problem Set 1 • Invented simulation data only (Zero external APIs / No database)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
