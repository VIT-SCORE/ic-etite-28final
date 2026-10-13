"use client";

import { useState } from "react";
import { Award, Globe, Building2, Cpu, Users } from "lucide-react";
import {
  chiefPatron,
  patrons,
  organizingChairs,
  technicalProgrammeChairs,
  executiveAdvisoryCommittee,
  publicationCommittee,
  sponsorshipCommittee,
  publicityAndMediaCommittee,
  registrationCommittee,
  boltHackathonCommittee,
  technextExpoCommittee,
  eventManagementCommittee,
  guestCareCommittee,
  conferenceCoordinatingCommittee,
} from "@/data/committees";
import {
  internationalAdvisoryData,
  nationalAdvisoryData,
  technicalCommitteeData,
} from "@/data/advisory";

interface TextMember {
  name: string;
  affiliation?: string;
}

interface CommitteeSection {
  title: string;
  members: TextMember[];
}

type TabType = "organizing" | "international" | "national" | "technical" | "student";

export default function CommitteesPage() {
  const [activeTab, setActiveTab] = useState<TabType>("organizing");

  // Organizing Committee: Executive Leadership Sections
  const executiveLeadershipLeft: CommitteeSection[] = [
    {
      title: "Chief Patron",
      members: [
        {
          name: chiefPatron.name,
          affiliation: chiefPatron.affiliation,
        },
      ],
    },
    {
      title: "Patrons",
      members: patrons.map((p) => ({
        name: p.name,
        affiliation: p.affiliation,
      })),
    },
    {
      title: "Organizing Chair",
      members: [
        {
          name: organizingChairs.organizingChair.name,
          affiliation: organizingChairs.organizingChair.affiliation,
        },
      ],
    },
    {
      title: "Organizing Co-chair",
      members: [
        {
          name: organizingChairs.organizingCoChair.name,
          affiliation: organizingChairs.organizingCoChair.affiliation,
        },
      ],
    },
    {
      title: "Conference Chair",
      members: [
        {
          name: organizingChairs.conferenceChair.name,
          affiliation: organizingChairs.conferenceChair.affiliation,
        },
      ],
    },
  ];

  const executiveLeadershipRight: CommitteeSection[] = [
    {
      title: "Publication Chair",
      members: [
        {
          name: organizingChairs.publicationChair.name,
          affiliation: organizingChairs.publicationChair.affiliation,
        },
      ],
    },
    {
      title: "Publication Co-chairs",
      members: organizingChairs.publicationCoChairs.map((p) => ({
        name: p.name,
        affiliation: p.affiliation,
      })),
    },
    {
      title: "Finance Chair",
      members: [
        {
          name: organizingChairs.financeChair.name,
          affiliation: organizingChairs.financeChair.affiliation,
        },
      ],
    },
    {
      title: "Finance Co-chair",
      members: [
        {
          name: organizingChairs.financeCoChair.name,
          affiliation: organizingChairs.financeCoChair.affiliation,
        },
      ],
    },
    {
      title: "Technical Programme Chairs",
      members: technicalProgrammeChairs.map((m) => ({
        name: m.name,
        affiliation: m.affiliation,
      })),
    },
  ];

  // Specific Functional Committees from Official Directory
  const functionalCommittees: CommitteeSection[] = [
    {
      title: "Executive Advisory Committee",
      members: executiveAdvisoryCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Publication Committee",
      members: publicationCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Sponsorship Committee",
      members: sponsorshipCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Publicity and Media Committee",
      members: publicityAndMediaCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Registration Committee",
      members: registrationCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "BOLT 3.0 Hackathon Committee",
      members: boltHackathonCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Technext’28 Expo Committee",
      members: technextExpoCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Event Management Committee",
      members: eventManagementCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Guest Care Committee",
      members: guestCareCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
    {
      title: "Conference Coordinating Committee",
      members: conferenceCoordinatingCommittee.map((m) => ({
        name: m.name,
        affiliation: `${m.role}, ${m.affiliation}`,
      })),
    },
  ];

  // Student Committee Members
  const studentLeads: TextMember[] = [
    { name: "Likhith Medarametla", affiliation: "SCORE, VIT Vellore" },
    { name: "Judson Daniel", affiliation: "SCORE, VIT Vellore" },
    { name: "M.J.V.Maheswara Reddy", affiliation: "SCORE, VIT Vellore" },
  ];

  // Split international advisory array into two balanced columns
  const intlHalf = Math.ceil(internationalAdvisoryData.length / 2);
  const intlCol1 = internationalAdvisoryData.slice(0, intlHalf);
  const intlCol2 = internationalAdvisoryData.slice(intlHalf);

  // Split national advisory array into two balanced columns
  const natHalf = Math.ceil(nationalAdvisoryData.length / 2);
  const natCol1 = nationalAdvisoryData.slice(0, natHalf);
  const natCol2 = nationalAdvisoryData.slice(natHalf);

  // Tab configurations
  const tabs = [
    { id: "organizing" as TabType, label: "Organizing Committee", icon: Award },
    { id: "international" as TabType, label: "International Advisory", icon: Globe },
    { id: "national" as TabType, label: "National Advisory", icon: Building2 },
    { id: "technical" as TabType, label: "Technical Committee", icon: Cpu },
    { id: "student" as TabType, label: "Student Committee", icon: Users },
  ];

  return (
    <main className="bg-white min-h-screen text-[#1A1A1A] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SWITCHER PILL */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full shadow-sm max-w-full overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#002147] text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? "text-[#FFB81C]" : "text-slate-400"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. TAB: ORGANIZING COMMITTEE */}
        {activeTab === "organizing" && (
          <div className="animate-in fade-in duration-200 space-y-16">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
                Organizing Committee
              </h1>

              {/* 2-Column Responsive Layout for Executive Leadership */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 sm:gap-y-10">
                {/* Left Column */}
                <div className="space-y-8 sm:space-y-10">
                  {executiveLeadershipLeft.map((section) => (
                    <section key={section.title} className="space-y-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                        {section.title}
                      </h2>
                      <div className="space-y-1.5 pt-1">
                        {section.members.map((member) => (
                          <div
                            key={member.name}
                            className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#222]"
                          >
                            <span className="font-bold text-black">{member.name}</span>
                            {member.affiliation ? `, ${member.affiliation}` : ""}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-8 sm:space-y-10">
                  {executiveLeadershipRight.map((section) => (
                    <section key={section.title} className="space-y-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                        {section.title}
                      </h2>
                      <div className="space-y-1.5 pt-1">
                        {section.members.map((member) => (
                          <div
                            key={member.name}
                            className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#222]"
                          >
                            <span className="font-bold text-black">{member.name}</span>
                            {member.affiliation ? `, ${member.affiliation}` : ""}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>

            {/* Functional & Departmental Committees */}
            <div className="pt-12 border-t border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004B87] tracking-tight mb-8">
                Committees &amp; Coordinators
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                {functionalCommittees.map((group) => (
                  <section key={group.title} className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#004B87] tracking-tight">
                      {group.title}
                    </h3>
                    <div className="space-y-1.5 pt-1">
                      {group.members.map((member) => (
                        <div
                          key={member.name}
                          className="text-[15px] sm:text-[15.5px] leading-relaxed text-[#222]"
                        >
                          <span className="font-bold text-black">{member.name}</span>
                          {member.affiliation ? `, ${member.affiliation}` : ""}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. TAB: INTERNATIONAL ADVISORY */}
        {activeTab === "international" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
              International Advisory Board
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-4">
              <div className="space-y-3">
                {intlCol1.map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.role && m.institution ? `, ${m.role}, ${m.institution}` : m.institution ? `, ${m.institution}` : ""}
                    {m.country ? `, ${m.country}` : ""}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {intlCol2.map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.role && m.institution ? `, ${m.role}, ${m.institution}` : m.institution ? `, ${m.institution}` : ""}
                    {m.country ? `, ${m.country}` : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. TAB: NATIONAL ADVISORY */}
        {activeTab === "national" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
              National Advisory Board
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-4">
              <div className="space-y-3">
                {natCol1.map((m) => (
                  <div key={`${m.name}-${m.institution}`} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.role ? `, ${m.role}` : ""}
                    {m.institution ? `, ${m.institution}` : ""}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {natCol2.map((m) => (
                  <div key={`${m.name}-${m.institution}`} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.role ? `, ${m.role}` : ""}
                    {m.institution ? `, ${m.institution}` : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. TAB: TECHNICAL COMMITTEE */}
        {activeTab === "technical" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-8 sm:mb-10">
              Technical Committee
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-4">
              <div className="space-y-3">
                {technicalCommitteeData.slice(0, Math.ceil(technicalCommitteeData.length / 2)).map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.role ? `, ${m.role}` : ""}
                    {m.institution ? `, ${m.institution}` : ""}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {technicalCommitteeData.slice(Math.ceil(technicalCommitteeData.length / 2)).map((m) => (
                  <div key={m.name} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold text-black">{m.name}</span>
                    {m.role ? `, ${m.role}` : ""}
                    {m.institution ? `, ${m.institution}` : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. TAB: STUDENT COMMITTEE */}
        {activeTab === "student" && (
          <div className="animate-in fade-in duration-200">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#004B87] tracking-tight mb-3">
              Student Committee &amp; IEEE ITS Chapter
            </h1>
            <p className="text-base text-slate-600 mb-8 sm:mb-10">
              Student leadership, engineering development team, and volunteer coordinators powering ic-ETITE&apos;28.
            </p>
            <div className="flex flex-col items-center gap-4">
              {studentLeads.map((m) => (
                <div key={m.name} className="text-[15px] leading-relaxed text-[#222] text-center">
                  <span className="font-bold text-black">{m.name}</span>
                  {`, ${m.affiliation}`}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
