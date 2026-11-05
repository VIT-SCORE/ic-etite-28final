import Image from "next/image";
import Link from "next/link";

const ui = {
  section: "bg-white border-b border-[#E2E8F0] scroll-mt-20",
  container: "container-x py-10 md:py-14",
  rows: "divide-y divide-slate-200/80 space-y-10 md:space-y-14",
  row: "flow-root pt-10 md:pt-14 first:pt-0",
  eyebrow:
    "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider w-fit",
  heading:
    "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-serif",
  body:
    "text-[16px] sm:text-[17px] md:text-[18px] leading-[1.85] text-slate-700 font-normal text-justify",
  caption: "text-xs text-slate-600 font-medium mt-2 px-1 text-center",
  standardButton:
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors shadow-sm hover:shadow",
  compactPrimary: "btn-primary inline-flex items-center gap-2 text-xs py-2.5 px-5",
  compactSecondary: "btn-outline inline-flex items-center gap-2 text-xs py-2.5 px-5",
  imageCard:
    "p-2.5 bg-slate-50/80 border border-slate-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow",
  image:
    "relative w-full aspect-[16/10] sm:aspect-[3/2] rounded-xl overflow-hidden border border-slate-200 bg-slate-100",
};

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  size?: "standard" | "compact";
  tone?: "navy" | "blue";
};

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: { src: string; alt: string; caption: string };
  ctas: Cta[];
};

const sections: Section[] = [
  {
    id: "about-conference",
    eyebrow: "Organized by SCORE · VIT, Vellore, India",
    title: "About ic-ETITE’28",
    paragraphs: [
      "Third International Conference on Emerging Trends in Information Technology and Engineering (ic-ETITE’28) will be held at Vellore Institute of Technology (VIT), Vellore, India, on 10–11 February 2028.",
      "The conference aims to provide an international platform for researchers, academicians, engineers, industry professionals, and students to present and exchange innovative research in Information Technology, Computer Engineering, Communication Engineering, Electronics Engineering, and related emerging areas. ic-ETITE’28 seeks to foster knowledge sharing, interdisciplinary collaboration, industry–academia interaction, and future research partnerships among participants from around the world.",
      "Original and unpublished research papers addressing emerging challenges, innovative technologies, and recent developments are invited from researchers worldwide. The conference is committed to promoting research excellence and facilitating the dissemination of knowledge that contributes to the advancement of science, technology, and education.",
    ],
    image: {
      src: "/images/004A3218.webp",
      alt: "Dignitaries releasing conference proceedings on dais at ic-ETITE International Conference",
      caption: "Dignitaries and guests of honour on the Anna Auditorium dais at ic-ETITE",
    },
    ctas: [
      {
        label: "Read More About Conference",
        href: "/about",
        variant: "primary",
        size: "standard",
      },
    ],
  },
  {
    id: "theme",
    eyebrow: "Scientific Vision & Scope",
    title: "Theme of the Conference",
    paragraphs: [
      "ic-ETITE’28 emphasizes the importance of advancing research and innovation in Information Technology and Engineering. The conference aims to provide a global platform for researchers, academicians, engineers, industry professionals, and students to showcase their innovations, exchange knowledge, and explore emerging developments in science and technology.",
      "The conference is committed to promoting research, innovation, and technological development in Information Technology and Engineering. It seeks to foster international collaboration, encourage interdisciplinary research, and facilitate global research networks that support future joint initiatives and academic partnerships.",
    ],
    image: {
      src: "/images/004A3344.webp",
      alt: "Auditorium Gathering with ic-ETITE Conference Banner at VIT Vellore",
      caption: "Plenary delegates and academic researchers assembled at Anna Auditorium, VIT",
    },
    ctas: [
      {
        label: "Explore Research Tracks",
        href: "/tracks",
        variant: "primary",
        size: "standard",
        tone: "blue",
      },
    ],
  },
  {
    id: "about-vit",
    eyebrow: "Host University · Established 1984",
    title: "About VIT",
    paragraphs: [
      "Vellore Institute of Technology (VIT) was established in 1984 as Vellore Engineering College and was granted university status by the Government of India in 2001 under Section 3 of the University Grants Commission (UGC) Act, 1956. Founded by Dr. G. Viswanathan, VIT is committed to providing quality higher education and fostering excellence in teaching, research, and innovation.",
      "The University promotes a vibrant and cosmopolitan academic environment, attracting students and faculty from across India and around the world. VIT places strong emphasis on research, innovation, international collaboration, and industry engagement. Its extensive academic and research collaborations with universities and institutions worldwide facilitate student and faculty exchanges, joint research, and global academic partnerships. With a strong focus on academic excellence and a professional approach to governance, VIT continues to advance its vision of “Transforming life through excellence in education and research.” The University remains committed to preparing students and researchers to address emerging global challenges and contribute meaningfully to society.",
    ],
    image: {
      src: "/images/frame_1.webp",
      alt: "Main entrance to VIT Vellore campus",
      caption: "Vellore Institute of Technology (VIT), Vellore Main Campus Entrance",
    },
    ctas: [
      {
        label: "Visit Official vit.ac.in",
        href: "https://vit.ac.in/",
        variant: "primary",
        external: true,
        size: "compact",
      },
      {
        label: "Campus Map & Travel Guide",
        href: "/venue",
        variant: "secondary",
        size: "compact",
      },
    ],
  },
  {
    id: "about-score",
    eyebrow: "Organizing School",
    title: "About SCORE",
    paragraphs: [
      "The School of Computer Science Engineering and Information Systems (SCORE) at Vellore Institute of Technology (VIT), Vellore, is a vibrant academic and research community committed to excellence in Computer Science, Information Technology, Artificial Intelligence, Data Engineering, Cyber Security, Software Engineering, and Computer Applications.",
      "The School offers a diverse range of undergraduate, postgraduate, research, and doctoral programmes, including B.Tech. in Information Technology, B.Tech. in Computer Science and Engineering (Artificial Intelligence and Data Engineering), B.Tech. in Computer Science and Engineering (Cyber Security), BCA, B.Sc. in Computer Science, M.Tech. in Computer Science and Engineering (Cybersecurity), M.Tech. in Software Engineering, MCA, M.Sc. in Artificial Intelligence and Machine Learning, M.Tech. by Research, and Ph.D. programmes, equipping students with strong technical knowledge, practical skills, and the ability to address real-world challenges.",
      "SCORE fosters a research-driven and innovation-oriented environment through interdisciplinary research, industry collaboration, consultancy, and engagement with leading academic and research organisations. Supported by state-of-the-art infrastructure, industry-supported laboratories, Centres of Excellence, and a strong community of students, faculty members, researchers, visiting professors, and industry professionals, the School promotes excellence in teaching, learning, research, and innovation.",
    ],
    image: {
      src: "/images/vit-sjt.webp",
      alt: "Silver Jubilee Tower (SJT) at VIT Vellore",
      caption: "Silver Jubilee Tower (SJT), home to computing research & labs at VIT Vellore",
    },
    ctas: [
      {
        label: "Visit SCORE Official School Portal",
        href: "https://vit.ac.in/schools/school-of-computer-science-engineering-and-information-systems",
        variant: "primary",
        external: true,
        size: "compact",
      },
    ],
  },
  {
    id: "about-its",
    eyebrow: "Technical Student Body · VIT Vellore Chapter",
    title: "About ITS",
    paragraphs: [
      "The IEEE Information Theory Society at VIT is a student chapter dedicated to exploring the latest advancements in information theory and applying them to address contemporary technological challenges. The chapter provides a nurturing platform for students to foster innovative ideas, develop technical expertise, and engage in meaningful research and projects.",
      "Through technical events, workshops, seminars, and collaborative initiatives, the chapter promotes knowledge sharing and practical learning while connecting students with partners and collaborators from academia and industry. By encouraging curiosity, creativity, and continuous learning, the IEEE Information Theory Society at VIT strives to empower students to develop innovative solutions, address emerging challenges, and contribute meaningfully to the advancement of information and communication technologies.",
    ],
    image: {
      src: "/images/vit-its.jpg",
      alt: "IEEE Information Theory Society Team at VIT Vellore",
      caption: "IEEE Information Theory Society Student Chapter Executive Team",
    },
    ctas: [
      {
        label: "Visit IEEE ITS Chapter Official Website",
        href: "https://ieee-its-1-tzbd.vercel.app/",
        variant: "primary",
        external: true,
        size: "compact",
      },
      {
        label: "Explore BOLT 3.0 Hackathon",
        href: "/hackathon",
        variant: "secondary",
        size: "compact",
      },
    ],
  },
];

const eyebrowStyles = [
  "bg-[#FFF4DB] border-[#F5A623]/50 text-[#002147]",
  "bg-orange-50 border-orange-200 text-[#DE6D1B]",
  "bg-[#002147]/5 border-[#002147]/15 text-[#002147]",
  "bg-[#004B87]/5 border-[#004B87]/15 text-[#004B87]",
  "bg-[#00B4D8]/10 border-[#00B4D8]/30 text-[#004B87]",
];

function CtaButton({
  label,
  href,
  variant = "primary",
  external,
  size = "compact",
  tone = "navy",
}: Cta) {
  const className =
    size === "standard"
      ? `${ui.standardButton} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623] ${
          tone === "blue"
            ? "bg-[#004B87] hover:bg-[#003366]"
            : "bg-[#002147] hover:bg-[#003366]"
        }`
      : variant === "primary"
        ? `${ui.compactPrimary} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623]`
        : `${ui.compactSecondary} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623]`;

  return external ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function AboutSections() {
  return (
    <section id="about" className={ui.section}>
      <div className={ui.container}>
        <div className={ui.rows}>
          {sections.map((section, index) => {
            const imageOnLeft = index % 2 === 1;

            return (
              <article
                key={section.id}
                id={section.id}
                className={ui.row}
                aria-labelledby={`${section.id}-title`}
              >
                <div
                  className={`mb-6 w-full sm:w-[480px] md:mb-5 md:w-[540px] lg:w-[600px] xl:w-[640px] ${
                    imageOnLeft
                      ? "md:float-left md:mr-8"
                      : "md:float-right md:ml-8"
                  }`}
                >
                  <div className={ui.imageCard}>
                    <div className={ui.image}>
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 640px"
                        className="object-cover object-center hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <p className={ui.caption}>{section.image.caption}</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <p
                    className={`${ui.eyebrow} ${eyebrowStyles[index]}`}
                  >
                    {section.eyebrow}
                  </p>
                  <h2
                    id={`${section.id}-title`}
                    className={`${ui.heading} ${
                      index < 2 ? "text-[#E05A00]" : "text-[#002147]"
                    }`}
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className={ui.body}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="clear-both pt-4 flex flex-wrap gap-3">
                  {section.ctas.map((cta) => (
                    <CtaButton key={cta.label} {...cta} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
