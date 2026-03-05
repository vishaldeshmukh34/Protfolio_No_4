import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FaCode, FaGraduationCap, FaLaptopCode, FaExternalLinkAlt, 
  FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt 
} from "react-icons/fa";
import profileImg from "../../assets/profile2.webp"; 

// --- Progress Circle Component ---
const SkillCircle = ({ percent, label, delay }) => (
  <div className="flex flex-col items-center gap-3 group">
    <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
      <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
        <path className="stroke-slate-100" strokeWidth="2.5" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <motion.path
          initial={{ strokeDasharray: "0, 100" }}
          whileInView={{ strokeDasharray: `${percent}, 100` }}
          transition={{ duration: 2, delay, ease: "circOut" }}
          className="stroke-indigo-600"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-black text-slate-900">{percent}%</span>
      </div>
    </div>
    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-indigo-600 transition-colors">{label}</span>
  </div>
);

// --- Timeline Item Component ---
const TimelineItem = ({ title, subtitle, date, location, desc, isLast }) => (
  <div className="relative pl-10 pb-12 group">
    {!isLast && <div className="absolute left-[11px] top-2 w-[2px] h-full bg-slate-100 group-hover:bg-indigo-100 transition-colors" />}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 z-10 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
    >
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase mb-3">
        <FaCalendarAlt size={10} /> {date}
      </span>
      <h4 className="text-xl font-black text-slate-900 mb-1">{title}</h4>
      <p className="text-indigo-600 font-bold text-sm mb-3 flex items-center gap-2">
        {subtitle} • <span className="text-slate-400 font-medium flex items-center gap-1"><FaMapMarkerAlt size={10}/> {location}</span>
      </p>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  </div>
);

function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const experience = [
    {
      title: "BCA Graduate",
      subtitle: "Dr. Babasaheb Ambedkar Marathwada University",
      date: "2022 - 2025",
      location: "Chhatrapati Sambhajinagar",
      desc: "Specialized in computer applications, foundation of Java, and software engineering principles."
    },
    {
      title: "Master of Computer Applications",
      subtitle: "Dr. Babasaheb Ambedkar Marathwada University",
      date: "2025 - 2027",
      location: "Chhatrapati Sambhajinagar",
      desc: "Specialized in computer applications, foundation of Java, and software engineering principles."
    },
    {
      title: "Java Full Stack Specialist",
      subtitle: "Full Stack Development",
      date: "2025 - Present",
      location: "Pune, Maharashtra",
      desc: "Architecting responsive front-ends with React and scalable back-ends with Node.js and MongoDB."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#fcfcfd] px-6 py-28 overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50" style={{ scaleX }} />

      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">Evolution</motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-6 tracking-tighter">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Story</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left: Identity & Skillset */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[3rem] blur-2xl opacity-10" />
              <img src={profileImg} alt="Vishal" className="relative w-full aspect-square object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" />
              
              {/* Skill Bento */}
              <div className="mt-10 grid grid-cols-3 gap-4 bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-xl">
                <SkillCircle percent={92} label="React" delay={0.2} />
                <SkillCircle percent={88} label="MySql" delay={0.4} />
                <SkillCircle percent={85} label="Java" delay={0.6} />
              </div>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-3xl font-black text-slate-900">Engineering with <span className="text-indigo-600 underline decoration-indigo-100 underline-offset-8">Passion</span></h3>
              <p className="text-slate-500 leading-relaxed text-lg italic">"I don't just write code; I build digital ecosystems that solve human problems."</p>
              <div className="flex flex-wrap gap-2">
                {['MERN', 'Spring Boot', 'UI/UX', 'MySql'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Dynamic Timeline */}
          <div className="lg:col-span-7">
            <div className="relative">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-10 flex items-center gap-4">
                <FaGraduationCap className="text-indigo-600" size={20} /> Academic & Professional Path
              </h3>
              
              <div className="mt-4">
                {experience.map((item, index) => (
                  <TimelineItem 
                    key={index}
                    {...item}
                    isLast={index === experience.length - 1}
                  />
                ))}
              </div>

              {/* Contact Quick-Action Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="mt-8 bg-gradient-to-br from-indigo-600 to-purple-700 p-10 rounded-[3rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h4 className="text-2xl font-black mb-2">Have a project in mind?</h4>
                <p className="text-indigo-100 text-sm mb-6 max-w-xs">Let's combine your vision with my technical expertise to build something world-class.</p>
                <button className="flex items-center gap-3 px-6 py-3 bg-white text-indigo-600 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
                  Get in Touch <FaExternalLinkAlt size={12} />
                </button>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;