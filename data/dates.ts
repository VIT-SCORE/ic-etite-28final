export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  description: string;
  status: "upcoming" | "active" | "passed";
  isKeyMilestone?: boolean;
}

export const importantDatesData: ImportantDate[] = [
  {
    id: "paper-submission",
    title: "Full Paper Submission",
    date: "05 October 2027",
    isoDate: "2027-10-05",
    description: "Deadline for electronic submission of complete, original research manuscripts via Microsoft (CMT).",
    status: "upcoming",
    isKeyMilestone: true,
  },
  {
    id: "acceptance-notification",
    title: "Notification of Acceptance",
    date: "04 November 2027",
    isoDate: "2027-11-04",
    description: "Formal editorial peer-review decision letters transmitted to corresponding authors.",
    status: "upcoming",
    isKeyMilestone: false,
  },
  {
    id: "camera-ready",
    title: "Camera Ready Paper Submission with Registration",
    date: "12 December 2027",
    isoDate: "2027-12-12",
    description: "Final PDF eXpress certified manuscript submission and completion of mandatory author registration.",
    status: "upcoming",
    isKeyMilestone: false,
  },
  {
    id: "conference-dates",
    title: "ic-ETITE’28 Conference Days",
    date: "10–11 February 2028",
    isoDate: "2028-02-10",
    description: "Keynote addresses, technical paper presentation tracks, plenary sessions, and colloquia at VIT Vellore.",
    status: "upcoming",
    isKeyMilestone: true,
  },
];
