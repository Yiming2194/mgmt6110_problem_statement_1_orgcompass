import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Award, 
  Building2, 
  FileText, 
  Printer, 
  Share2, 
  ChevronRight, 
  Briefcase, 
  TrendingUp, 
  ShieldAlert, 
  Clock,
  Sparkles
} from 'lucide-react';
import { FrictionPoint, BusinessPriority, CompanyProfile } from '../types';
import { COMPANY_PROFILE } from '../data';

interface Screen2Props {
  rankedPoints: FrictionPoint[];
  priorities: BusinessPriority[];
  onBackToPriorities: () => void;
}

export const Screen2ExecutiveSummary: React.FC<Screen2Props> = ({
  rankedPoints,
  priorities,
  onBackToPriorities
}) => {
  const [isPrintMode, setIsPrintMode] = useState(false);

  // Calculate aggregated metrics
  const totalHeadcountImpacted = rankedPoints.reduce((acc, curr) => acc + curr.headcountAffected, 0);
  const distinctPriorities = Array.from(new Set(rankedPoints.map((p) => p.priorityCode)));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Top Navigation & Memo Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <button
          id="back-to-screen1-btn"
          onClick={onBackToPriorities}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Edit Focus Area Rankings</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            id="toggle-memo-mode-btn"
            onClick={() => setIsPrintMode(!isPrintMode)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
              isPrintMode
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{isPrintMode ? 'Standard Dashboard' : 'Compact Board Memo Mode'}</span>
          </button>

          <button
            id="print-memo-btn"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-all"
            title="Print or save as PDF"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Executive Decision Header */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-amber-500 text-slate-950">
                EXECUTIVE DECISION MEMORANDUM
              </span>
              <span className="text-xs text-slate-400">
                CEO Mandate • FY2026/27
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Talent & Organizational Actions Summary
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Strategic human capital and operating model interventions to unblock business priorities across {COMPANY_PROFILE.name}.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 flex flex-col justify-center min-w-[200px]">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Entity Scope
            </span>
            <span className="text-sm font-bold text-white mt-0.5">
              {COMPANY_PROFILE.name}
            </span>
            <span className="text-xs text-amber-400 mt-0.5 flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {COMPANY_PROFILE.totalHeadcount.toLocaleString()} Total Workforce
            </span>
          </div>
        </div>

        {/* 3 Executive High-Level Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5">
          <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
            <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              Prioritized Actions
            </span>
            <div className="text-xl sm:text-2xl font-black text-white mt-1">
              3 Strategic Interventions
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Aligned across {distinctPriorities.length} core business priorities
            </span>
          </div>

          <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
            <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              Workforce Mobilized
            </span>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
              {totalHeadcountImpacted} Personnel
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Directly upskilled, protected, or re-aligned
            </span>
          </div>

          <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
            <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Target Implementation
            </span>
            <div className="text-xl sm:text-2xl font-black text-blue-400 mt-1">
              30 to 90 Days
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 block">
              Phased rapid governance cadence
            </span>
          </div>
        </div>
      </div>

      {/* DETAILED CARDS FOR THE 3 SELECTED FOCUS AREAS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Recommended Actions for Selected Focus Areas</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            Ranked in order of executive priority
          </span>
        </div>

        {rankedPoints.map((item, index) => {
          const rankNum = index + 1;
          const action = item.recommendedAction;

          return (
            <article
              key={item.id}
              id={`action-detail-rank-${rankNum}`}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header Ribbon */}
              <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow">
                    #{rankNum}
                  </span>
                  <div>
                    <span className="text-xs font-bold tracking-wide uppercase text-amber-300">
                      Focus Area Rank #{rankNum} • {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {item.location}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {item.priorityCode}
                  </span>
                </div>
              </div>

              {/* Action Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Friction Context & Risk Banner */}
                <div className="bg-red-50/70 rounded-xl p-3.5 border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-red-900 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
                      Friction Diagnosis:
                    </span>
                    <p className="text-xs text-red-800 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <span className="text-[11px] font-semibold text-red-700 block">
                      Headcount Affected:
                    </span>
                    <span className="text-xs font-bold text-red-900">
                      {item.headcountAffected} personnel
                    </span>
                  </div>
                </div>

                {/* Main Recommended Action Box */}
                <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        {action.actionCategory}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {action.implementationHorizon}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      {action.title}
                    </h4>
                  </div>

                  {/* Key Action Deliverables */}
                  <div>
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                      Key Execution Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                      {action.keyDeliverables.map((deliverable, dIdx) => (
                        <li
                          key={dIdx}
                          className="bg-white rounded-xl p-3 border border-slate-200 text-xs text-slate-700 flex items-start gap-2 shadow-2xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategic Alignment & KPI Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white rounded-xl p-3 border border-slate-200">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                        Accountable Lead:
                      </span>
                      <span className="text-xs font-bold text-slate-900 mt-1 block">
                        {action.leadOwner}
                      </span>
                    </div>

                    <div className="bg-white rounded-xl p-3 border border-slate-200">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                        Target Measurable KPI:
                      </span>
                      <span className="text-xs font-bold text-emerald-800 mt-1 block">
                        {action.targetKpi}
                      </span>
                    </div>

                    <div className="bg-white rounded-xl p-3 border border-slate-200 sm:col-span-2 lg:col-span-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                        Resource Allocation:
                      </span>
                      <span className="text-xs font-bold text-slate-800 mt-1 block">
                        {action.budgetOrResource}
                      </span>
                    </div>
                  </div>

                  {/* Alignment Rationale */}
                  <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80">
                    <span className="text-xs font-bold text-amber-950 flex items-center gap-1 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
                      Strategic Alignment to Business Priority:
                    </span>
                    <p className="text-xs text-amber-900 leading-relaxed font-medium">
                      {action.strategicAlignment}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* SYNTHESIS COMPARISON TABLE (High-density review for Board & CEO) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm overflow-hidden">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
          Executive Action Matrix at a Glance
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Direct alignment between selected organizational friction and business priority outcomes.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-3 rounded-tl-lg font-bold">Rank & Priority</th>
                <th className="p-3 font-bold">Focus Area Friction</th>
                <th className="p-3 font-bold">Talent / Org Action</th>
                <th className="p-3 font-bold">Lead Owner</th>
                <th className="p-3 font-bold">Timeline</th>
                <th className="p-3 rounded-tr-lg font-bold">Success KPI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rankedPoints.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                  <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                    <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 mr-1.5 font-black">
                      #{idx + 1}
                    </span>
                    {item.priorityCode}
                  </td>
                  <td className="p-3 font-semibold text-slate-800 max-w-[200px]">
                    {item.title}
                    <span className="block text-[11px] font-normal text-slate-500">
                      {item.location}
                    </span>
                  </td>
                  <td className="p-3 font-medium text-slate-900 max-w-[220px]">
                    {item.recommendedAction.title}
                    <span className="block text-[10px] text-amber-700 font-bold uppercase">
                      {item.recommendedAction.actionCategory}
                    </span>
                  </td>
                  <td className="p-3 text-slate-700 font-medium whitespace-nowrap">
                    {item.recommendedAction.leadOwner}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-900">
                      {item.recommendedAction.implementationHorizon.split(' ')[0]}
                    </span>
                  </td>
                  <td className="p-3 text-slate-700 font-medium max-w-[220px]">
                    {item.recommendedAction.targetKpi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Back Button */}
      <div className="flex justify-center pt-4">
        <button
          id="bottom-back-to-screen1-btn"
          onClick={onBackToPriorities}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 px-6 py-3 rounded-xl shadow-md transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Screen 1 to Adjust Friction Priorities</span>
        </button>
      </div>
    </div>
  );
};
