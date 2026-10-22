"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award, Cpu, Globe2, ArrowRight } from "lucide-react";

export default function AboutAndThemesSection() {
  return (
    <section id="about" className="border-b border-[#E2E8F0] bg-white scroll-mt-20">
      <div className="container-x py-16 md:py-24 space-y-20 md:space-y-28">
        {/* =========================================================================
            1. ABOUT IC-ETITE'28
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-4 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4DB] border border-[#F5A623]/50 text-xs font-bold text-[#002147] uppercase tracking-wider w-fit">
              <span>Organized by SCORE · VIT, Vellore, India</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#E05A00] font-serif">
              About ic-ETITE’28
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              Third International Conference on Emerging Trends in Information Technology and
              Engineering (ic-ETITE’28) will be held at Vellore Institute of
              Technology (VIT), Vellore, India, on 10–11 February 2028.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              The conference aims to provide an international platform for researchers, academicians,
              engineers, industry professionals, and students to present and exchange innovative research in
              Information Technology, Computer Engineering, Communication Engineering, Electronics
              Engineering, and related emerging areas. ic-ETITE’28 seeks to foster knowledge sharing,
              interdisciplinary collaboration, industry–academia interaction, and future research partnerships
              among participants from around the world.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              Original and unpublished research papers addressing emerging challenges, innovative
              technologies, and recent developments are invited from researchers worldwide. The conference
              is committed to promoting research excellence and facilitating the dissemination of knowledge
              that contributes to the advancement of science, technology, and education.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#002147] text-white text-sm font-semibold hover:bg-[#003366] transition-colors shadow-sm hover:shadow group"
              >
                <span>Read More About Conference</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Image Column: Framed Photo that Fills the Height */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/004A3218.webp"
                  alt="Dignitaries releasing conference proceedings on dais at ic-ETITE International Conference"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. THEME OF THE CONFERENCE
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column (Left on Desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/004A3344.webp"
                  alt="Auditorium Gathering with ic-ETITE Conference Banner at VIT Vellore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Column (Right on Desktop) */}
          <div className="lg:col-span-6 space-y-4 text-left order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#E05A00] font-serif">
              Theme of the Conference
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              ic-ETITE’28 emphasizes the importance of advancing research and innovation in Information
              Technology and Engineering. The conference aims to provide a global platform for researchers,
              academicians, engineers, industry professionals, and students to showcase their innovations,
              exchange knowledge, and explore emerging developments in science and technology.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              The conference is committed to promoting research, innovation, and technological development in
              Information Technology and Engineering. It seeks to foster international collaboration,
              encourage interdisciplinary research, and facilitate global research networks that support future
              joint initiatives and academic partnerships.
            </p>
          </div>
        </div>

        {/* =========================================================================
            3. ABOUT VIT (Vellore Institute of Technology)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch pt-8 border-t border-slate-200">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-4 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002147]/5 border border-[#002147]/15 text-xs font-bold text-[#002147] uppercase tracking-wider w-fit">
              <Award className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Host University · Established 1984</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#002147] font-serif">
              About VIT
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              Vellore Institute of Technology (VIT) was established in 1984 as Vellore Engineering College
              and was granted university status by the Government of India in 2001 under Section 3 of the
              University Grants Commission (UGC) Act, 1956. Founded by <strong>Dr. G. Viswanathan</strong>, VIT is
              committed to providing quality higher education and fostering excellence in teaching, research,
              and innovation.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              The University promotes a vibrant and cosmopolitan academic environment,
              attracting students and faculty from across India and around the world. VIT places strong
              emphasis on research, innovation, international collaboration, and industry engagement. Its
              extensive academic and research collaborations with universities and institutions worldwide
              facilitate student and faculty exchanges, joint research, and global academic partnerships. With
              a strong focus on academic excellence and a professional approach to governance, VIT
              continues to advance its vision of <em>“Transforming life through excellence in education and
              research.”</em> The University remains committed to preparing students and researchers to address
              emerging global challenges and contribute meaningfully to society.
            </p>
            <div className="pt-2">
              <a
                href="https://vit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-5"
              >
                <span>Visit Official vit.ac.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/vit-sjt.webp"
                  alt="VIT Vellore Silver Jubilee Tower (SJT)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. ABOUT SCORE
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column (Left on Desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/frame_1.webp"
                  alt="Silver Jubilee Tower (SJT) & Computing Laboratories at SCORE VIT Vellore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text Column (Right on Desktop) */}
          <div className="lg:col-span-6 space-y-4 text-left order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B87]/5 border border-[#004B87]/15 text-xs font-bold text-[#004B87] uppercase tracking-wider w-fit">
              <Cpu className="w-3.5 h-3.5" />
              <span>Organizing School</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#002147] font-serif">
              About SCORE
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              The <strong>School of Computer Science Engineering and Information Systems (SCORE)</strong> at Vellore
              Institute of Technology (VIT), Vellore, is a vibrant academic and research community
              committed to excellence in Computer Science, Information Technology, Artificial Intelligence,
              Data Engineering, Cyber Security, Software Engineering, and Computer Applications.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              The School offers a diverse range of undergraduate, postgraduate, research, and doctoral
              programmes, including B.Tech. in Information Technology, B.Tech. in Computer Science and
              Engineering (Artificial Intelligence and Data Engineering), B.Tech. in Computer Science and
              Engineering (Cyber Security), BCA, B.Sc. in Computer Science, M.Tech. in Computer Science
              and Engineering (Cybersecurity), M.Tech. in Software Engineering, MCA, M.Sc. in Artificial
              Intelligence and Machine Learning, M.Tech. by Research, and Ph.D. programmes, equipping
              students with strong technical knowledge, practical skills, and the ability to address real-world
              challenges.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              SCORE fosters a research-driven and innovation-oriented environment through
              interdisciplinary research, industry collaboration, consultancy, and engagement with leading
              academic and research organisations. Supported by state-of-the-art infrastructure, industry-
              supported laboratories, Centres of Excellence, and a strong community of students, faculty
              members, researchers, visiting professors, and industry professionals, the School promotes
              excellence in teaching, learning, research, and innovation.
            </p>
            <div className="pt-2">
              <a
                href="https://vit.ac.in/schools/school-of-computer-science-engineering-and-information-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-5"
              >
                <span>Visit SCORE Official School Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. ABOUT IEEE INFORMATION THEORY SOCIETY, VIT
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-4 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-xs font-bold text-[#004B87] uppercase tracking-wider w-fit">
              <Globe2 className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>Technical Student Body · VIT Vellore Chapter</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#002147] font-serif">
              About ITS
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              The <strong>IEEE Information Theory Society at VIT</strong> is a student chapter dedicated to
              exploring the latest advancements in information theory and applying them to address
              contemporary technological challenges. The chapter provides a nurturing platform for students
              to foster innovative ideas, develop technical expertise, and engage in meaningful research and
              projects.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.85] text-slate-700 font-normal text-justify">
              Through technical events, workshops, seminars, and collaborative initiatives, the
              chapter promotes knowledge sharing and practical learning while connecting students with
              partners and collaborators from academia and industry. By encouraging curiosity, creativity,
              and continuous learning, the IEEE Information Theory Society at VIT strives to empower
              students to develop innovative solutions, address emerging challenges, and contribute
              meaningfully to the advancement of information and communication technologies.
            </p>
            <div className="pt-2">
              <a
                href="https://ieee-its-1-tzbd.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-5"
              >
                <span>Visit IEEE ITS Chapter Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="p-2.5 bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/ieee-its-group.webp"
                  alt="IEEE Information Theory Society Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
