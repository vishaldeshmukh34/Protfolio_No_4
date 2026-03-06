import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FaCode, FaGraduationCap, FaLaptopCode, FaExternalLinkAlt, 
  FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt 
} from "react-icons/fa";
import profileImg from "../../assets/profile2.webp"; 

// --- Progress Circle Component ---
const SkillCircle = ({ percent, label, delay }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-110">
      <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
        <path className="stroke-slate-100" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <motion.path
          initial={{ strokeDasharray: "0, 100" }}
          whileInView={{ strokeDasharray: `${percent}, 100` }}
          transition={{ duration: 2, delay, ease: "circOut" }}
          className="stroke-indigo-600"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-black text-slate-900">{percent}%</span>
      </div>
    </div>
    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-indigo-600 transition-colors">{label}</span>
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
      className="bg-white p-6 rounded-[2rem] border-2 border-slate-50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
    >
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase mb-3 tracking-widest">
        <FaCalendarAlt size={10} /> {date}
      </span>
      <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tight">{title}</h4>
      <p className="text-indigo-600 font-black text-sm mb-3 flex items-center gap-2">
        {subtitle} • <span className="text-slate-400 font-bold flex items-center gap-1"><FaMapMarkerAlt size={10}/> {location}</span>
      </p>
      <p className="text-slate-500 text-sm font-bold leading-relaxed">{desc}</p>
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
      desc: "Advanced studies in software architecture, cloud computing, and complex system design."
    },
    {
      title: "Java Full Stack Specialist",
      subtitle: "Full Stack Development",
      date: "2025 - Present",
      location: "Pune, Maharashtra",
      desc: "Architecting responsive front-ends with React and scalable back-ends with Spring Boot and Node.js."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#fcfcfd] px-6 py-28 overflow-hidden">
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
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group perspective-1000"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-3xl opacity-60" />

              <motion.div 
                whileHover={{ rotateY: 2, rotateX: -2, scale: 1.01 }}
                className="relative z-10 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 border-[3px] border-white shadow-2xl"
              >
                <img 
                  src={profileImg} 
                  alt="Vishal" 
                  className="w-full aspect-[4/5] object-cover opacity-95 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-slate-900/30 backdrop-blur-md rounded-full border border-white/10">
                  <span className="flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[7px] font-black text-white uppercase tracking-widest">Available</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-[-45px] relative z-20 mx-10 bg-white/70 backdrop-blur-2xl p-4 rounded-[1.8rem] border border-white/50 shadow-xl"
              >
                <div className="grid grid-cols-3 gap-1">
                  <SkillCircle percent={92} label="React" delay={0.3} />
                  <SkillCircle percent={88} label="Node" delay={0.4} />
                  <SkillCircle percent={85} label="Java" delay={0.5} />
                </div>
              </motion.div>
            </motion.div>

            <div className="space-y-6 px-2">
              <div className="relative space-y-3">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                  Code is <span className="text-indigo-600">Art,</span><br />
                  Logic is <span className="italic text-slate-400 font-serif">Poetry.</span>
                </h3>
                <p className="text-slate-500 leading-relaxed text-xs md:text-sm font-black max-w-[280px]">
                  Bridging <span className="text-slate-950">complex backend logic</span> with <span className="text-indigo-600">minimalist frontend design.</span>
                </p>
              </div>

              {/* Advanced Ultra-Bold Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['MERN', 'Spring', 'Next.js'].map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-indigo-500/25 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-2.5 px-4 py-2.5 bg-white backdrop-blur-md rounded-xl border-2 border-slate-100 shadow-sm group-hover:border-indigo-500 group-hover:shadow-indigo-100 transition-all duration-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-20 group-hover:animate-ping group-hover:opacity-100"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900 group-hover:bg-indigo-600 transition-colors"></span>
                      </span>
                      <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Dynamic Timeline */}
          <div className="lg:col-span-7">
            <div className="relative">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-10 flex items-center gap-4">
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

              {/* Contact Bento Card */}
              <div className="w-full max-w-xl mx-auto md:mx-0">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="relative mt-6 bg-[#0d0f14]/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-2xl overflow-hidden border border-white/10 group"
                >
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-indigo-600 rounded-full blur-[80px]" />
                    <motion.div animate={{ x: [0, -30, 0], y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-purple-600 rounded-full blur-[80px]" />
                  </div>

                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-center lg:text-left space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400/80">Live & Available</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black tracking-tight leading-none">
                        Let's build <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent italic">together.</span>
                      </h4>
                      <p className="text-slate-400 text-[11px] md:text-xs font-black max-w-[220px] mx-auto lg:mx-0">
                        Turning complex ideas into seamless digital experiences.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full sm:w-auto min-w-[210px]">
                      <motion.a
                        href="mailto:vishaldeshmukh7972@gmail.com"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-950 rounded-xl font-black text-[10px] uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      >
                        Send Email <FaExternalLinkAlt size={11} className="opacity-60" />
                      </motion.a>

                      <button 
                        onClick={() => navigator.clipboard.writeText("vishaldeshmukh7972@gmail.com")}
                        className="group/pill flex items-center justify-between px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all"
                      >
                        <span className="text-[10px] font-mono font-black text-slate-400 group-hover/pill:text-indigo-300 pr-3 transition-colors">
                          vishal...gmail.com
                        </span>
                        <div className="p-1.5 bg-white/5 rounded-lg group-hover/pill:bg-indigo-500/20">
                          <FaCheckCircle className="text-indigo-400 opacity-50 group-hover/pill:opacity-100" size={13} />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;