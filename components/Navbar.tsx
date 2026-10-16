"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink, Zap } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  alignRight?: boolean;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpandedDropdown(null);
  }, [pathname]);

  const isActive = (item: NavItem) => {
    if (pathname === "/") {
      return item.href === "/";
    }
    if (item.href !== "/" && !item.href.startsWith("#") && (pathname === item.href || pathname.startsWith(item.href + "/"))) return true;
    if (item.dropdownItems?.some((sub) => !sub.external && sub.href !== "/" && (pathname === sub.href || pathname.startsWith(sub.href + "/")))) return true;
    return false;
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileExpandedDropdown((prev) => (prev === label ? null : label));
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      label: "Conference",
      href: "/call-for-papers",
      hasDropdown: true,
      alignRight: false,
      dropdownItems: [
        { label: "Call for Papers", href: "/call-for-papers" },
        { label: "Research Tracks", href: "/tracks" },
        { label: "Keynote Speakers", href: "/keynote-speakers" },
        { label: "Submit Paper", href: "/call-for-papers#submit" },
        { label: "Important Dates", href: "/important-dates" },
        { label: "Registration", href: "/registration" },
      ],
    },
    {
      label: "Committees",
      href: "/committees",
      hasDropdown: false,
    },
    {
      label: "Visa",
      href: "/visa",
      hasDropdown: false,
    },

    {
      label: "Previous ic-ETITE",
      href: "/ic-ETITE24",
      hasDropdown: true,
      alignRight: true,
      dropdownItems: [
        { label: "ic-ETITE'24", href: "/ic-ETITE24" },
        { label: "ic-ETITE'20", href: "/ic-ETITE20" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      hasDropdown: false,
    },
    {
      label: "More",
      href: "/venue",
      hasDropdown: true,
      alignRight: true,
      dropdownItems: [
        { label: "Advisory Board", href: "/advisory" },
        { label: "Conference Venue", href: "/venue" },
        { label: "Hotels & Accommodation", href: "/hotels" },
        { label: "Visa & Travel Information", href: "/visa" },
        { label: "Web Development Team", href: "/team" },
        {
          label: "IEEE ITS Chapter Portal ↗",
          href: "https://ieee-its-1-tzbd.vercel.app/",
          external: true,
        },
      ],
    },
  ];

  return (
    <header
      id="site-nav"
      className="sticky top-0 z-50 w-full bg-[#002147] shadow-xl border-b border-white/15 py-2 sm:py-2.5"
    >
      <nav
        className="w-full max-w-[1800px] mx-auto px-2 sm:px-3 xl:px-4 2xl:px-6 flex items-center justify-between gap-1 xl:gap-2 2xl:gap-4"
        aria-label="Conference Primary Navigation"
      >
        {/* LEFT: ic-ETITE '28 Logo & IEEE ITS Emblem */}
        <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-2.5 shrink-0">
          <Link
            href="/"
            title="ic-ETITE'28 International Conference"
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="relative h-7 sm:h-8 xl:h-8 2xl:h-9 w-28 sm:w-32 xl:w-32 2xl:w-36">
              <Image
                src="/logos/ic-etite28-cropped-transparent.png"
                alt="ic-ETITE'28 Conference Logo"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-contain object-left drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]"
                priority
              />
            </div>
          </Link>

          {/* IEEE Information Theory Society Round Emblem */}
          <a
            href="https://ieee-its-1-tzbd.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="IEEE Information Theory Society"
            className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="relative h-7 sm:h-8 xl:h-8 2xl:h-9 w-7 sm:w-8 xl:w-8 2xl:w-9 rounded-full overflow-hidden border border-white/20 shadow-xs bg-[#00142E]">
              <Image
                src="/logos/ieee-its-circle-logo.png"
                alt="IEEE Information Theory Society Emblem"
                fill
                sizes="(max-width: 640px) 28px, 36px"
                className="object-contain rounded-full"
                priority
              />
            </div>
          </a>
        </div>

        {/* DESKTOP NAVIGATION ITEMS */}
        <div className="hidden xl:flex items-center justify-center flex-1 min-w-0 mx-2 xl:mx-3 2xl:mx-4">
          <ul className="flex items-center gap-0.5 xl:gap-1 2xl:gap-2 text-[13.5px] xl:text-[14px] 2xl:text-[15px] font-semibold text-white flex-nowrap whitespace-nowrap">
            {navItems.map((item) => {
              const active = isActive(item);
              const isOpen = activeDropdown === item.label;

              return (
                <li
                  key={item.label}
                  className="relative group py-1 shrink-0"
                  onMouseEnter={() => {
                    if (item.hasDropdown) handleMouseEnter(item.label);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                  }}
                >
                  <Link
                    href={item.href}
                    className={`relative inline-flex items-center gap-0.5 xl:gap-1 py-1.5 px-2 xl:px-2.5 2xl:px-3 rounded-full transition-all whitespace-nowrap shrink-0 ${
                      active
                        ? "bg-white/25 text-[#FFB81C] font-bold border border-white/35 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 opacity-80 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu with viewport-safe bounds */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div
                      className={`absolute top-full ${
                        item.alignRight ? "right-0" : "left-0"
                      } w-max max-w-[calc(100vw-32px)] min-w-[240px] sm:min-w-[270px] py-2 bg-[#001833] border border-white/20 rounded-2xl shadow-2xl transition-all duration-200 z-50 mt-1 ${
                        isOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.dropdownItems.map((subItem) => (
                        <div key={subItem.label}>
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-2.5 text-[14px] 2xl:text-[15px] text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              <span>{subItem.label}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#FFB81C]" />
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2.5 text-[14px] 2xl:text-[15px] text-white/90 hover:text-[#FFB81C] hover:bg-white/10 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT: TechNext '28 & BOLT 3.0 Tags (Desktop Only) + Official VIT Logo */}
        <div className="flex items-center gap-1.5 xl:gap-2 2xl:gap-3 shrink-0 ml-1.5 xl:ml-2.5 2xl:ml-4">
          {/* TechNext '28 Tag (Desktop) */}
          <Link
            href="/technext"
            className="hidden xl:flex items-center justify-center h-8 2xl:h-9 w-24 2xl:w-28 rounded-full bg-white/10 hover:bg-white/20 border border-[#84E320]/80 shadow-[0_0_12px_rgba(132,227,32,0.28)] transition-all hover:scale-105 shrink-0"
            title="TechNext '28 National Industrial Expo"
          >
            <div className="relative h-3.5 2xl:h-4 w-16 2xl:w-20">
              <Image
                src="/logos/technext-logo.png"
                alt="TechNext '28"
                fill
                sizes="100px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* BOLT 3.0 Hackathon Tag (Desktop) */}
          <Link
            href="/hackathon"
            className="hidden xl:flex items-center justify-center gap-1.5 h-8 2xl:h-9 px-3 xl:px-3.5 2xl:px-4 rounded-full bg-[#00142E] hover:bg-[#00244D] border border-[#CCFF00] shadow-[0_0_12px_rgba(204,255,0,0.28)] transition-all hover:scale-105 shrink-0"
            title="Register for BOLT 3.0 National Flagship Hackathon"
          >
            <Zap className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-[#CCFF00] fill-[#CCFF00] animate-pulse shrink-0" />
            <span className="text-[11px] xl:text-[11.5px] 2xl:text-[12px] font-black tracking-wide text-[#CCFF00] whitespace-nowrap">
              BOLT 3.0
            </span>
          </Link>

          {/* VIT Logo - PROPORTIONAL & VISIBLE */}
          <Link
            href="/"
            title="Vellore Institute of Technology"
            className="flex items-center shrink-0 hover:opacity-95 transition-opacity"
          >
            <div className="relative h-7 sm:h-8 xl:h-8 2xl:h-9 w-20 sm:w-24 xl:w-28 2xl:w-32">
              <Image
                src="/logos/vit-header-logo.webp"
                alt="VIT Vellore Institute of Technology"
                fill
                sizes="(max-width: 640px) 80px, 128px"
                className="object-contain object-right"
                priority
              />
            </div>
          </Link>

          {/* MOBILE / TABLET MENU TRIGGER BUTTON (< xl) */}
          <button
            id="menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 active:scale-95 flex items-center justify-center ml-1"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#FFB81C]" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </nav>

      {/* MOBILE & TABLET DRAWER NAVIGATION (< xl) */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[52px] sm:top-[57px] bottom-0 bg-[#00142E] border-t border-white/15 text-white shadow-2xl z-40 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="container-x py-6 space-y-6 pb-20">
            {/* Co-located Events Highlights in Mobile Drawer */}
            <div className="space-y-2.5">
              {/* BOLT 3.0 Card */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#00142E] to-[#002244] border border-[#CCFF00]/50 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#CCFF00]/15 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-[#CCFF00] fill-[#CCFF00]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-black text-[#CCFF00] tracking-wide">BOLT 3.0 Hackathon</p>
                    <p className="text-[10px] text-white/70">National Flagship 24h Sprint</p>
                  </div>
                </div>
                <Link
                  href="/hackathon"
                  onClick={() => setMobileOpen(false)}
                  className="px-2.5 py-1 rounded-lg bg-[#CCFF00] text-[#001C3D] font-bold text-[11px] tracking-wider uppercase hover:bg-white transition-colors shrink-0"
                >
                  Explore
                </Link>
              </div>

              {/* TechNext '28 Card */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#001733] to-[#002244] border border-[#84E320]/50 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-5 w-16">
                    <Image
                      src="/logos/technext-logo.png"
                      alt="TechNext '28"
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-black text-[#84E320] tracking-wide">TechNext &apos;28 Expo</p>
                    <p className="text-[10px] text-white/70">Industrial Expo &amp; Stalls</p>
                  </div>
                </div>
                <Link
                  href="/technext"
                  onClick={() => setMobileOpen(false)}
                  className="px-2.5 py-1 rounded-lg bg-[#84E320] text-[#0B0324] font-bold text-[11px] tracking-wider uppercase hover:bg-white transition-colors shrink-0"
                >
                  Explore
                </Link>
              </div>
            </div>

            {/* Navigation List with Accordions */}
            <ul className="flex flex-col gap-1 text-base font-semibold">
              {navItems.map((item) => {
                const active = isActive(item);
                const isExpanded = mobileExpandedDropdown === item.label;

                return (
                  <li key={item.label} className="border-b border-white/5 pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!item.hasDropdown) setMobileOpen(false);
                        }}
                        className={`flex-1 py-3 px-3 rounded-xl transition-colors ${
                          active
                            ? "bg-white/15 text-[#FFB81C] font-bold"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {/* Dropdown Expand Toggle for Mobile */}
                      {item.hasDropdown && (
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="p-3 text-white/60 hover:text-[#FFB81C] transition-colors"
                          aria-label={`Toggle ${item.label} sub-menu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-[#FFB81C]" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Expandable Sub-items */}
                    {item.hasDropdown && item.dropdownItems && isExpanded && (
                      <div className="ml-4 pl-3 border-l-2 border-[#FFB81C]/40 py-2 space-y-2 animate-in fade-in-50 duration-150">
                        {item.dropdownItems.map((sub) => (
                          <div key={sub.label}>
                            {sub.external ? (
                              <a
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
                              >
                                <span>{sub.label}</span>
                                <ExternalLink className="w-3.5 h-3.5 text-[#FFB81C]" />
                              </a>
                            ) : (
                              <Link
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 px-3 rounded-lg text-sm font-medium text-white/80 hover:text-[#FFB81C] hover:bg-white/10"
                              >
                                • {sub.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
              <a
                href="https://ieee-its-1-tzbd.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
              >
                <span className="font-semibold">IEEE ITS Student Chapter Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#72EFDD]" />
              </a>

              <Link
                href="/call-for-papers#submit"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
              >
                <span className="font-semibold">Submit on CMT</span>
                <span className="text-[#FFB81C] font-bold text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
