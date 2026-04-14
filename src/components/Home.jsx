const Home = () => {
  return (
    <>
   
   <section className="hero" id="home">
    <h1 className="anim-fade-up">Welcome to my<br/><span className="gradient-text">Creative Space</span></h1>
    <p className="hero-subtitle anim-fade-up anim-delay-1" id="heroTagline">Creative Developer &amp; Designer</p>
    <div className="cta-buttons anim-fade-up anim-delay-2">
     <a href="/Projects" className="btn btn-primary"> View Work</a> 
     <a href="/Contact" className="btn btn-secondary"> Get In Touch</a>
    </div>
    <div className="scroll-indicator anim-fade-up anim-delay-3">
     <span>Scroll to explore</span>
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="12 5 12 19"></polyline> <polyline points="19 12 12 19 5 12"></polyline>
     </svg>
    </div>
   </section>
   <div className="tech-marquee">
    <div className="marquee-track">
     <span className="marquee-item">REACT ✦ NEXT.JS ✦ TYPESCRIPT ✦ TAILWIND ✦ FIGMA ✦ FRAMER ✦ THREE.JS ✦ NODE.JS ✦</span> <span className="marquee-item">REACT ✦ NEXT.JS ✦ TYPESCRIPT ✦ TAILWIND ✦ FIGMA ✦ FRAMER ✦ THREE.JS ✦ NODE.JS ✦</span>
    </div>
   </div>
    </>
  );
};

export default Home;