import React from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  tech: string;
  image: string;
  link?: string;
};const projects: Project[] = [
  // —— Team / NFTS —— (Latest)
  {
    id: "dungeonmaster",
    title: "Dungeon Master (Team Project — NFTS)",
    description:
      "Collaborative puzzle dungeon: story development, environment & puzzle design, lighting, and 3D prop creation contributing to a cohesive gameplay loop.",
    role: "Game Designer • Environment/Puzzle • Lighting • 3D Props",
    tech: "Unity • C# • Level Design",
    image: "/assets/dungeon-master.png",
    link: "",
  },
  {
    id: "houseofsecrets",
    title: "The House of Secrets — GDD",
    description:
      "Narrative-driven puzzle horror: exploration, environmental interactions, escalating puzzles, and two alternate endings. PC target; Unity planned with VR post-launch.",
    role: "Game Designer (Narrative, Systems, Progression)",
    tech: "Unity • C# • FMOD (planned) • PC",
    image: "/assets/house-of-secrets.png",
    link: "",
  },

  // —— VR Museum & Learning —— 
  {
    id: "jubbah",
    title: "Jubbah Heritage Museum (VR)",
    description:
      "Virtual museum walkthrough in a glass structure—cultural artifacts, lighting, terrain, spatial audio, and teleport navigation for guided exploration.",
    role: "Designer & Developer",
    tech: "Unity • VR • Spatial Audio • C# (UI/Navigation)",
    image: "/assets/jubbah.png",
    link: "",
  },
  {
    id: "signlang",
    title: "Learning Sign Language (VR)",
    description:
      "Focused VR learning space designed to reduce distractions and support clear, accessible sign-language practice tailored to client goals.",
    role: "VR UX Designer",
    tech: "Unity • XR • Environment Design",
    image: "/assets/sign-language.png",
    link: "",
  },

  // —— Other VR ——
  {
    id: "mars",
    title: "Planet Mars VR",
    description:
      "Martian VR scene with custom terrain, imaginative rain/wind particle systems, and a C#-driven animated sky for atmospheric exploration.",
    role: "VR Developer & Technical Artist",
    tech: "Unity • XR • Particle Systems • C#",
    image: "/assets/mars.png",
    link: "",
  },
  {
    id: "beekeeper",
    title: "Beekeeper VR",
    description:
      "VR experience simulating a beekeeper’s workflow: field environment, hive interactions, ambient audio, and bee-cell logic for educational immersion.",
    role: "VR Developer & Environment Artist",
    tech: "Unity • XR • Physics • Audio",
    image: "/assets/beekeeper.png",
    link: "",
  },

  // —— First project —— (Oldest)
  {
    id: "zombie",
    title: "Dark Jungle Zombie",
    description:
      "Immersive zombie shooter in a hand-built jungle level. Implemented player shooting via Raycasts, enemy AI with baked NavMesh, and UI-driven health for player and zombies.",
    role: "Game Designer & Programmer",
    tech: "Unity • C# • NavMesh • UI",
    image: "/assets/zombie.png",
    link: "",
  },
];



export default function App() {
  return (
    <div className="min-h-screen italic text-slate-900 bg-[linear-gradient(135deg,#FFECC0_0%,#FFC29B_30%,#F39F9F_70%,#B95E82_100%)]">
      {/* Header */}
      <motion.header
        className="px-6 py-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-5xl font-extrabold text-[#B95E82] drop-shadow-sm">
          MARYAM AL BASHIR
        </h1>
        <p className="mt-3 text-lg text-slate-800">
          Game Designer • Environment Artist • VR/XR Developer
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="/assets/Maryam_Al_Bashir_CV.pdf"
            className="px-6 py-2 rounded-lg shadow bg-[#B95E82] text-white hover:opacity-90 transition"
            download
          >
            📄 Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/maryam-albashir-773001187"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-lg shadow bg-white/80 text-[#B95E82] hover:bg-white transition"
          >
            🔗 LinkedIn
          </a>
        </div>
      </motion.header>

      {/* About Me */}
      <motion.section
        className="max-w-4xl mx-auto bg-white/85 backdrop-blur p-8 rounded-2xl shadow mb-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#B95E82] mb-3">About Me</h2>
        <p className="leading-relaxed text-slate-800">
          I studied Metaverse and stepped into game development and virtual
          reality. I love building games from scratch—ideation to crafting
          environments, whether realistic or imaginative—bringing my creativity
          into interactive worlds. I specialize in 3D environment design and
          develop games and VR experiences using Unity.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="max-w-6xl mx-auto px-6 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#B95E82] mb-8">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border"
              style={{ borderColor: "#FFC29B" }}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#B95E82]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>
                <p className="mt-3 text-xs text-slate-600">Role: {p.role}</p>
                <p className="text-xs text-slate-600">Tech: {p.tech}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 px-4 py-2 rounded bg-[#FFECC0] text-[#B95E82] shadow hover:opacity-90 transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
      {/* More / Videos Section */}
<motion.section
  className="max-w-4xl mx-auto bg-white/85 p-8 rounded-2xl shadow mb-16 text-center"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-bold text-[#B95E82] mb-3">More</h2>
  <p className="text-slate-800 mb-4">
    🎥 If you’d like to see videos of my work, please visit the link below:
  </p>
  <a
    href="https://drive.google.com/drive/folders/10Myko6jzgaP2scM_QXs1kBjfSaSGBa1M"
    target="_blank"
    rel="noreferrer"
    className="inline-block px-6 py-2 rounded-lg bg-[#B95E82] text-white shadow hover:opacity-90 transition"
  >
    🎬 View My Videos
  </a>
</motion.section>

      {/* Skills */}
      <motion.section
        className="max-w-4xl mx-auto bg-white/85 p-8 rounded-2xl shadow mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-[#B95E82] mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Game Design",
            "3D Environment Design",
            "VR / XR Development",
            "Unity",
            "Maya",
            "Blender",
            "React",
            "TailwindCSS",
            "AI & ML",
            "SQL",
            "Blockchain basics",
            "Training & Mentorship",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm shadow"
              style={{
                background:
                  i % 3 === 0
                    ? "#FFECC0"
                    : i % 3 === 1
                    ? "#FFC29B"
                    : "#F39F9F",
                color: "#6b1841", // غامق قريب من #B95E82 لقراءة أوضح
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="max-w-4xl mx-auto bg-white/85 p-8 rounded-2xl shadow mb-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-[#B95E82] mb-3">Contact</h2>
        <p className="text-slate-800">📧 Email: maryam8370@gmail.com</p>
        <p className="text-slate-800">📱 Phone: +966 56 795 8218</p>
        <a
          href="https://www.linkedin.com/in/maryam-albashir-773001187"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block px-5 py-2 rounded-lg bg-[#B95E82] text-white shadow hover:opacity-90 transition"
        >
          🔗 LinkedIn Profile
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-slate-800">
        © {new Date().getFullYear()} MARYAM AL BASHIR — Designed with 💖
      </footer>
    </div>
  );
}

