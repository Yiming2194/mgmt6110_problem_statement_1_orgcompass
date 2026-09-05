export type FrictionCategory = 'Capability Gap' | 'Succession Risk' | 'Organizational Bottleneck';

export interface BusinessPriority {
  id: string;
  code: string;
  title: string;
  target: string;
  timeline: string;
  metric: string;
  context: string;
  strategicWeight: string;
}

export interface RecommendedAction {
  title: string;
  actionCategory: 'Talent & Skills Academy' | 'Leadership Succession & Retention' | 'Operating Model & Governance' | 'Agile Frontline Squads';
  leadOwner: string;
  implementationHorizon: '30 Days (Immediate)' | '60 Days (Near-term)' | '90 Days (Quarterly Milestone)';
  keyDeliverables: string[];
  targetKpi: string;
  budgetOrResource: string;
  strategicAlignment: string;
}

export interface FrictionPoint {
  id: string;
  priorityId: string;
  priorityCode: string;
  priorityTitle: string;
  category: FrictionCategory;
  title: string;
  location: string;
  department: string;
  headcountAffected: number;
  severity: 'Critical' | 'High';
  description: string;
  businessImpact: string;
  recommendedAction: RecommendedAction;
}

export interface CompanyProfile {
  name: string;
  industry: string;
  headquarters: string;
  totalHeadcount: number;
  sites: string[];
  ceoName: string;
}
