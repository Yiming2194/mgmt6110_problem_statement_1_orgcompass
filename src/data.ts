import { BusinessPriority, FrictionPoint, CompanyProfile } from './types';

export const COMPANY_PROFILE: CompanyProfile = {
  name: 'LionPort Logistics SG Pte. Ltd.',
  industry: 'Contract Logistics & Multi-Modal Freight Operations',
  headquarters: 'Singapore (Jurong Logistics Hub)',
  totalHeadcount: 1240,
  sites: [
    'Changi Airfreight Centre (Cold-Chain Hub)',
    'Tuas Port Mega-Yard (Container & Yard Logistics)',
    'Jurong Central Distribution Hub (Automated Sorting)',
    'Woodlands Inland Freight Clearance Gate'
  ],
  ceoName: 'Executive Office'
};

export const BUSINESS_PRIORITIES: BusinessPriority[] = [
  {
    id: 'p1',
    code: 'PRIORITY 1',
    title: 'Scale Changi Cold-Chain & Biomedical Cargo Hub Capacity',
    target: '+45% Throughput in GDP-Compliant Pharmaceutical & Vaccine Freight by Q4',
    timeline: 'Q3 - Q4 2026',
    metric: '99.98% zero-temperature deviation rate across 18,000 m³ capacity',
    context: 'Capturing high-yield APAC biopharma air shipments routed via Singapore Changi Airport.',
    strategicWeight: '38% of Annual Growth Target'
  },
  {
    id: 'p2',
    code: 'PRIORITY 2',
    title: 'Tuas Mega-Yard AGV Fleet & Automated Stacking Conversion',
    target: 'Transition 70% of Yard Operations to Autonomous Guided Vehicles (AGVs) & Automated Cranes',
    timeline: 'Within 6 Months',
    metric: 'Turnaround time reduced from 42 mins to 19 mins per 40ft container',
    context: 'Mitigating Singapore blue-collar port labor constraints and lowering operating costs per TEU.',
    strategicWeight: '35% of Efficiency Savings'
  },
  {
    id: 'p3',
    code: 'PRIORITY 3',
    title: 'Regional Cross-Border Green Freight & Digital Customs Corridors (SG-MY-ID)',
    target: 'Sub-90 Minute Cross-Border Customs Clearance & 30% Electric Heavy Fleet',
    timeline: 'Over Next 9 Months',
    metric: 'Daily cross-border volume to 450 trailers with full ESG carbon accounting',
    context: 'Winning multi-national e-commerce and electronics manufacturing distribution contracts.',
    strategicWeight: '27% of Market Expansion'
  }
];

export const FRICTION_POINTS: FrictionPoint[] = [
  {
    id: 'fp-01',
    priorityId: 'p1',
    priorityCode: 'PRIORITY 1',
    priorityTitle: 'Scale Changi Cold-Chain & Biomedical Cargo Hub',
    category: 'Capability Gap',
    title: 'Pharma GDP & Cryogenic Handling Specialist Shortage',
    location: 'Changi Airfreight Centre',
    department: 'Cold-Chain Air Freight Operations',
    headcountAffected: 140,
    severity: 'Critical',
    description: 'Only 18% of the frontline 140 airfreight staff possess accredited GDP (Good Distribution Practice) and ultra-low -80°C handling certifications needed for high-value biologic consignments.',
    businessImpact: 'High risk of product spoilage audits, client contract disqualification, and SLA penalty claims exceeding S$1.4M.',
    recommendedAction: {
      title: 'Accelerated Biopharma Logistics Apprenticeship & In-House GDP Academy',
      actionCategory: 'Talent & Skills Academy',
      leadOwner: 'VP of Airfreight & Chief People Officer',
      implementationHorizon: '60 Days (Near-term)',
      keyDeliverables: [
        'Partner with Singapore SkillsFuture & IATA for 4-week fast-track certification',
        'Upskill 90 warehouse operators into Certified Biopharma Cold Specialists',
        'Establish tiered shift allowances (+12%) tied to certified handling retention'
      ],
      targetKpi: '85% of shift staff GDP-certified by Q4; zero handling temperature breach SLA incidents',
      budgetOrResource: 'S$210,000 subsidized grant co-investment + 4 dedicated trainer roster hours/week',
      strategicAlignment: 'Directly enables the +45% cold-chain throughput goal by removing compliance audit disqualification risk.'
    }
  },
  {
    id: 'fp-02',
    priorityId: 'p1',
    priorityCode: 'PRIORITY 1',
    priorityTitle: 'Scale Changi Cold-Chain & Biomedical Cargo Hub',
    category: 'Succession Risk',
    title: 'Lead Cryogenic Quality & Compliance Director Single-Point Dependency',
    location: 'Changi Airfreight Centre',
    department: 'Quality Assurance & Regulatory Affairs',
    headcountAffected: 28,
    severity: 'Critical',
    description: 'The sole veteran Director holding global pharmaceutical regulatory sign-off has no designated successor or shadow deputy, with high industry headhunting pressure.',
    businessImpact: 'A sudden departure would freeze pharmaceutical certification renewals and halt new international carrier audit approvals for 4 to 6 months.',
    recommendedAction: {
      title: 'Executive Retention & Dual-Track Regulatory Shadowing Scheme',
      actionCategory: 'Leadership Succession & Retention',
      leadOwner: 'Chief Executive Officer & Chief People Officer',
      implementationHorizon: '30 Days (Immediate)',
      keyDeliverables: [
        'Approve 24-month retention & strategic milestone equity/bonus package for incumbent',
        'Appoint Senior QA Manager as Co-Deputy with immediate statutory sign-off authority transfer',
        'Implement structured 6-month external leadership coaching program'
      ],
      targetKpi: 'Designated successor formally qualified to sign off GDP audits by Day 75; retention lock signed',
      budgetOrResource: 'S$160,000 retention provision & executive leadership development allocation',
      strategicAlignment: 'Guarantees uninterrupted regulatory licensing required to open Changi Phase 2 cold rooms.'
    }
  },
  {
    id: 'fp-03',
    priorityId: 'p1',
    priorityCode: 'PRIORITY 1',
    priorityTitle: 'Scale Changi Cold-Chain & Biomedical Cargo Hub',
    category: 'Organizational Bottleneck',
    title: 'Fragmented Commercial Booking vs Cold-Room Ops Triage Protocols',
    location: 'Changi Airfreight Centre & Jurong HQ',
    department: 'Commercial Sales & Air Terminal Ops',
    headcountAffected: 85,
    severity: 'High',
    description: 'Commercial teams book priority pharma space without automated validation of available validated thermal pallet positions, forcing manual email approvals and 4-hour booking delays.',
    businessImpact: 'Consignments miss flight cut-offs; customer satisfaction for urgent bio-sample routes dropped by 18%.',
    recommendedAction: {
      title: 'Unified Cross-Functional Flight Allocation Rapid-Response Cell',
      actionCategory: 'Agile Frontline Squads',
      leadOwner: 'Commercial Director & VP Air Logistics Operations',
      implementationHorizon: '30 Days (Immediate)',
      keyDeliverables: [
        'Colocate commercial freight planners with terminal warehouse shift controllers',
        'Establish rule-based dynamic pallet reservation matrix replacing manual approvals',
        'Institute twice-daily 15-minute operational capacity triage huddles'
      ],
      targetKpi: 'Booking confirmation cycle reduced from 240 mins to under 15 mins; zero booking overruns',
      budgetOrResource: 'Operational seating realignment and daily triage protocol handbook',
      strategicAlignment: 'Ensures commercial volume acceleration matches actual floor capacity without bottlenecking flights.'
    }
  },
  {
    id: 'fp-04',
    priorityId: 'p1',
    priorityCode: 'PRIORITY 1',
    priorityTitle: 'Scale Changi Cold-Chain & Biomedical Cargo Hub',
    category: 'Capability Gap',
    title: 'IoT Real-Time Telemetry & Exception Response Skills Gap',
    location: 'Changi Airfreight Centre',
    department: 'Cargo Control Tower & IT Dispatch',
    headcountAffected: 45,
    severity: 'High',
    description: 'Frontline controllers lack the analytical data literacy to interpret live sensor alerts and proactively re-route thermal containers before temperature excursion alarms trigger.',
    businessImpact: 'Reactive response leads to unnecessary dry ice emergency replenishments and 12 near-miss temperature breaches last quarter.',
    recommendedAction: {
      title: 'Control Tower Analytics & IoT Alert Rapid Response Upskilling',
      actionCategory: 'Talent & Skills Academy',
      leadOwner: 'Head of Logistics Technology & Dispatch Director',
      implementationHorizon: '60 Days (Near-term)',
      keyDeliverables: [
        'Deploy simulation-based training on live telemetry exception workflows',
        'Standardize step-by-step SOP cards on thermal container battery & coolant failure triage',
        'Certify all 45 control tower dispatchers in automated telemetry dashboards'
      ],
      targetKpi: 'Proactive intervention time cut by 65%; zero critical temperature excursions',
      budgetOrResource: 'S$85,000 vendor platform certification module',
      strategicAlignment: 'Enables high-margin clinical trial cargo which requires real-time autonomous telemetry audit trails.'
    }
  },
  {
    id: 'fp-05',
    priorityId: 'p2',
    priorityCode: 'PRIORITY 2',
    priorityTitle: 'Tuas Mega-Yard AGV Fleet & Automated Stacking',
    category: 'Capability Gap',
    title: 'Mechatronics & AGV Predictive Fleet Maintenance Competency Deficit',
    location: 'Tuas Port Mega-Yard',
    department: 'Yard Automation & Engineering Services',
    headcountAffected: 110,
    severity: 'Critical',
    description: 'Existing diesel equipment technicians lack skills in industrial robotics, CAN bus diagnostics, LiDAR sensors, and automated battery swap systems required by 60 incoming autonomous AGVs.',
    businessImpact: 'High reliance on expensive German/Japanese OEM overseas engineers; fleet downtime could reach 32% if breakdown response takes >4 hours.',
    recommendedAction: {
      title: 'Automation & Mechatronics Dual-Track Conversion Fellowship',
      actionCategory: 'Talent & Skills Academy',
      leadOwner: 'VP Technical Fleet & Head of Tuas Operations',
      implementationHorizon: '60 Days (Near-term)',
      keyDeliverables: [
        'Establish Tuas Yard Mechatronics Lab in partnership with Singapore Polytechnic / ITE',
        'Transition 45 diesel mechanics into certified Autonomous Port Fleet Technicians',
        'Create tier-level retention stipends (+15%) for robotics diagnosis mastery'
      ],
      targetKpi: 'Autonomous yard vehicle availability >98.2%; internal first-fix rate elevated from 35% to 88%',
      budgetOrResource: 'S$280,000 tech lab equipment + SkillsFuture Enterprise Level training co-funding',
      strategicAlignment: 'Crucial for achieving the 19-minute container turnaround target by keeping AGV fleet continuously operational.'
    }
  },
  {
    id: 'fp-06',
    priorityId: 'p2',
    priorityCode: 'PRIORITY 2',
    priorityTitle: 'Tuas Mega-Yard AGV Fleet & Automated Stacking',
    category: 'Succession Risk',
    title: 'Senior Port Automation Systems Architect Single-Point Vulnerability',
    location: 'Tuas Port Mega-Yard',
    department: 'Operational Technology & Yard Automation',
    headcountAffected: 32,
    severity: 'Critical',
    description: 'The Chief Systems Architect who integrated the proprietary Terminal Operating System (TOS) with the AGV fleet scheduler plans to retire in 8 months, with no trained internal counterpart.',
    businessImpact: 'System glitches or edge cases during live ship-to-shore vessel loading could paralyze yard operations for days without architectural oversight.',
    recommendedAction: {
      title: 'Strategic Architecture Succession Bridge & Knowledge Retention Squad',
      actionCategory: 'Leadership Succession & Retention',
      leadOwner: 'Chief Operating Officer & Head of Engineering',
      implementationHorizon: '30 Days (Immediate)',
      keyDeliverables: [
        'Pair 2 high-potential Lead Software Engineers in a 100% dedicated apprentice rotation',
        'Codify architecture documentation, failover protocols, and proprietary APIs into digital runbooks',
        'Retain outgoing architect on a 12-month post-retirement advisory retainer contract'
      ],
      targetKpi: 'Successor independently leads full yard failover drill without intervention by Day 70',
      budgetOrResource: 'S$175,000 apprenticeship backfill and advisory retainer commitment',
      strategicAlignment: 'Protects the core technical backbone of the Tuas autonomous operations from crippling disruption.'
    }
  },
  {
    id: 'fp-07',
    priorityId: 'p2',
    priorityCode: 'PRIORITY 2',
    priorityTitle: 'Tuas Mega-Yard AGV Fleet & Automated Stacking',
    category: 'Organizational Bottleneck',
    title: 'Shift Resistance & Cultural Friction Among 320+ Prime Mover Drivers',
    location: 'Tuas Port Mega-Yard',
    department: 'Container Yard Operations & Labor Union Liaison',
    headcountAffected: 320,
    severity: 'Critical',
    description: 'Frontline prime mover drivers fear immediate redundancy from the AGVs, causing low morale, unofficial work-to-rule slowdowns, and resistance to tablet-based digital dispatch tools.',
    businessImpact: 'Daily container moves dropped by 14% during transition trials; potential threat of organized union dispute at Singapore port terminal.',
    recommendedAction: {
      title: 'Just Transition & Remote Console Operator Redeployment Program',
      actionCategory: 'Operating Model & Governance',
      leadOwner: 'Chief Executive Officer & Head of Labor Relations / Union Exco',
      implementationHorizon: '30 Days (Immediate)',
      keyDeliverables: [
        'Sign joint tripartite pledge with National Transport Workers Union guaranteeing no forced retrenchments',
        'Reskill 120 senior drivers into Air-Conditioned Remote Crane / AGV Tele-Operation Pilots',
        'Introduce safe productivity-sharing bonus linked to overall yard turnaround speed'
      ],
      targetKpi: '100% participation in reskilling; yard throughput restored and absenteeism reduced by 40%',
      budgetOrResource: 'S$350,000 career transition fund & union joint consultation committee',
      strategicAlignment: 'Aligns frontline human workforce with autonomous operations, turning resistance into adoption.'
    }
  },
  {
    id: 'fp-08',
    priorityId: 'p2',
    priorityCode: 'PRIORITY 2',
    priorityTitle: 'Tuas Mega-Yard AGV Fleet & Automated Stacking',
    category: 'Organizational Bottleneck',
    title: 'IT vs Operational Technology (OT) Maintenance Escalation Silo',
    location: 'Tuas Mega-Yard & Jurong Tech Centre',
    department: 'Enterprise IT & Yard Physical Maintenance',
    headcountAffected: 65,
    severity: 'High',
    description: 'When an autonomous vehicle stalls, yard technicians and central enterprise IT dispute whether it is a physical sensor fault or an enterprise network latency issue, causing 90-minute triage stalls.',
    businessImpact: 'Accumulated vehicle queue bottlenecks at berth gates, triggering vessel demurrage penalties of S$45,000 per delayed berthing window.',
    recommendedAction: {
      title: 'Integrated IT-OT Joint Incident Command Pod',
      actionCategory: 'Agile Frontline Squads',
      leadOwner: 'Head of IT Infrastructure & Tuas Terminal Manager',
      implementationHorizon: '30 Days (Immediate)',
      keyDeliverables: [
        'Unify IT and physical maintenance shift rosters under a single on-site Incident Commander',
        'Implement unified telemetry diagnostic tablet with automated triage diagnostics',
        'Enforce a mandatory 10-minute on-scene root cause classification SLA'
      ],
      targetKpi: 'Average AGV incident clearance time slashed from 92 minutes to under 18 minutes',
      budgetOrResource: 'S$40,000 tooling integration and co-located control desk setup',
      strategicAlignment: 'Removes operational handoff latency, directly supporting the 19-minute container turnaround target.'
    }
  },
  {
    id: 'fp-09',
    priorityId: 'p3',
    priorityCode: 'PRIORITY 3',
    priorityTitle: 'Regional Cross-Border Green Freight & Digital Corridors',
    category: 'Capability Gap',
    title: 'ASEAN Digital Customs Carnet & Green Haulage Compliance Deficit',
    location: 'Woodlands Inland Freight Gate',
    department: 'Cross-Border Haulage & Regulatory Compliance',
    headcountAffected: 95,
    severity: 'High',
    description: 'Cross-border drivers and clearance clerks still rely heavily on paper physical manifests for Singapore-Malaysia border clearance, lacking training in newly mandated ASEAN e-Carnet systems.',
    businessImpact: 'Frequent customs inspection secondary line detentions at Johor/Woodlands checkpoints averaging 3.5 hours per truck, burning driver hours of service.',
    recommendedAction: {
      title: 'Cross-Border Digital Border Fast-Track Driver & Clerk Academy',
      actionCategory: 'Talent & Skills Academy',
      leadOwner: 'Head of Regional Customs & Cross-Border Logistics Director',
      implementationHorizon: '60 Days (Near-term)',
      keyDeliverables: [
        'Roll out simplified mobile app training for digital e-seal manifests and QR customs filing',
        'Bilingual (English/Malay) micro-learning modules for 95 long-haul drivers',
        'Appoint 8 roving customs compliance champions at Woodlands and Tuas checkpoints'
      ],
      targetKpi: '95% digital customs filing compliance; border clearance turnaround under 50 minutes',
      budgetOrResource: 'S$65,000 mobile digital device rollout and customs training modules',
      strategicAlignment: 'Essential to hit the target sub-90 minute total cross-border transit time.'
    }
  },
  {
    id: 'fp-10',
    priorityId: 'p3',
    priorityCode: 'PRIORITY 3',
    priorityTitle: 'Regional Cross-Border Green Freight & Digital Corridors',
    category: 'Succession Risk',
    title: 'Woodlands Cross-Border Regional Fleet GM Key-Person Vulnerability',
    location: 'Woodlands Inland Freight Gate',
    department: 'Cross-Border Fleet Command',
    headcountAffected: 18,
    severity: 'High',
    description: 'The Regional Fleet General Manager commands all personal relationships with Malaysian transport authorities and inter-agency border task forces, with no deputy possessing comparable cross-border negotiation standing.',
    businessImpact: 'Unplanned absence or competitor poaching threatens regulatory permits and bilateral cross-border operating quotas worth S$14M in recurring annual revenue.',
    recommendedAction: {
      title: 'Cross-Border Regulatory Alliance Taskforce & Co-General Manager Track',
      actionCategory: 'Leadership Succession & Retention',
      leadOwner: 'Chief Operating Officer & Head of Regional Strategy',
      implementationHorizon: '60 Days (Near-term)',
      keyDeliverables: [
        'Appoint Senior Cross-Border Operations Lead as Co-GM, shadowing all bilateral government dialogues',
        'Institutionalize bilateral agency protocols into formal corporate steering agreements',
        'Establish long-term retention incentive tied to 3-year cross-border network EBITDA'
      ],
      targetKpi: 'Secondary lead independently negotiates monthly cross-border checkpoint slots within 90 days',
      budgetOrResource: 'S$120,000 retention and bilateral liaison operating budget',
      strategicAlignment: 'Safeguards the franchise license and continuous operating permissions across the SG-MY freight lane.'
    }
  },
  {
    id: 'fp-11',
    priorityId: 'p3',
    priorityCode: 'PRIORITY 3',
    priorityTitle: 'Regional Cross-Border Green Freight & Digital Corridors',
    category: 'Organizational Bottleneck',
    title: 'Dual-Handover Disconnect Between Tuas Sea-Freight & Inland Haulage',
    location: 'Tuas Port & Jurong Distribution Hub',
    department: 'Intermodal Transfer & Haulage Scheduling',
    headcountAffected: 130,
    severity: 'High',
    description: 'Sea freight container discharge and overland cross-border transport operate under disconnected scheduling systems with siloed P&L incentives, causing import containers to sit idle in yards for 36 hours before intermodal transfer.',
    businessImpact: 'Excessive detention & demurrage costs, missed express e-commerce delivery windows for regional clients, and yard congestion.',
    recommendedAction: {
      title: 'End-to-End Intermodal Dispatch Operations Unit & Shared P&L Metrics',
      actionCategory: 'Operating Model & Governance',
      leadOwner: 'Chief Commercial Officer & VP Intermodal Operations',
      implementationHorizon: '30 Days (Immediate)',
      keyDeliverables: [
        'Merge sea-freight release desk and cross-border transport dispatch into a single Intermodal Cell',
        'Align performance incentives on door-to-door transit speed rather than isolated terminal dwell',
        'Implement automated intermodal handover alerts triggering pre-customs clearance'
      ],
      targetKpi: 'Intermodal yard dwell time cut from 36 hours to under 6 hours; S$420,000 annual demurrage savings',
      budgetOrResource: 'Organizational KPI restructuring and unified dispatch workspace',
      strategicAlignment: 'Unlocks rapid e-commerce customer promises and maximizes cross-border daily truck turns.'
    }
  },
  {
    id: 'fp-12',
    priorityId: 'p3',
    priorityCode: 'PRIORITY 3',
    priorityTitle: 'Regional Cross-Border Green Freight & Digital Corridors',
    category: 'Capability Gap',
    title: 'Electric Heavy Goods Vehicle (e-HGV) Fleet Operation & High-Voltage Depot Safety',
    location: 'Jurong & Tuas Depots',
    department: 'Green Fleet Management & Depot Maintenance',
    headcountAffected: 75,
    severity: 'High',
    description: 'With 40 electric prime movers arriving for Singapore-Malaysia eco-corridor runs, depot technicians and driver crews lack high-voltage battery safety, fast-charging thermal management, and regenerative braking route optimization skills.',
    businessImpact: 'Risk of catastrophic high-voltage workplace safety breaches, unoptimized battery depletion mid-transit, and Singapore MOM / LTA audit stoppage.',
    recommendedAction: {
      title: 'Green Fleet High-Voltage Certification & Eco-Driving Telematics Program',
      actionCategory: 'Talent & Skills Academy',
      leadOwner: 'Head of Fleet Sustainability & Safety Director',
      implementationHorizon: '60 Days (Near-term)',
      keyDeliverables: [
        'Partner with Singapore EV Centre of Excellence for certified high-voltage safety technician training',
        'Install smart telematics coaching in all electric trucks rewarding regenerative braking & range conservation',
        'Establish depot emergency isolation and thermal runaway containment protocols'
      ],
      targetKpi: '100% of depot technicians certified in high-voltage safety; vehicle battery range extended by 18%',
      budgetOrResource: 'S$150,000 EV safety equipment and telematics certification',
      strategicAlignment: 'Achieves the 30% electric heavy fleet target while maintaining zero-incident workplace safety standards.'
    }
  }
];
