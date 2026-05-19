export const config = {
  "number": 50,
  "slug": "impact-proof-kit",
  "title": "Impact Proof Kit",
  "category": "Student Agency Operations",
  "tagline": "A lightweight system for collecting proof that Volta\u2019s work improved business and student outcomes.",
  "persona": "Volta leadership, chapters, sponsors, and grant writers.",
  "gap": "Impact claims need evidence across client, student, and community dimensions.",
  "niche": "Evidence infrastructure for student-powered social enterprise.",
  "metric": "projects with complete impact proof packets",
  "modules": [
    "Proof request templates",
    "Outcome taxonomy",
    "Sponsor report outline",
    "Student growth evidence"
  ],
  "theme": {
    "accent": "#f97316",
    "accent2": "#fdba74",
    "emoji": "\ud83c\udf93",
    "metricLabel": "Operating readiness",
    "workflow": [
      "Set roles and artifacts",
      "Run rubric review",
      "Resolve blockers",
      "Export operating packet"
    ],
    "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "proof-request-templates",
      "label": "Proof request templates",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify proof request templates with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "outcome-taxonomy",
      "label": "Outcome taxonomy",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify outcome taxonomy with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "sponsor-report-outline",
      "label": "Sponsor report outline",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify sponsor report outline with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "student-growth-evidence",
      "label": "Student growth evidence",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify student growth evidence with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Impact Proof Kit and capture baseline evidence.",
      "Complete the proof request templates workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Volta Cyprus Chapter",
    "chapter": "Cyprus",
    "studentLead": "Volta Student Lead",
    "notes": "Internal chapter operations project for student-led delivery excellence. Impact Proof Kit sample.",
    "evidencePrefix": "Impact Proof Kit",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
