import { Link } from "react-router-dom";
import ProfilePhoto from "../../Components/ProfilePhoto";

export default function Home({ mousePos }) {
  return (
    <section className="home-section relative min-h-screen flex items-center justify-center bg-black px-4 md:px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/10 blur-3xl rounded-full -top-40 -right-40 animate-pulse" />
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 blur-3xl rounded-full bottom-[-100px] left-[-80px] animate-pulse" />
      </div>

      <div className="relative z-10 home-content w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="space-y-6 text-center md:text-left">

          {/* BADGE */}
          <div className="home-badge flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            OPEN FOR OPPORTUNITIES
          </div>

          {/* NAME */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black leading-tight home-title">
            Shah <span className="text-cyan-400">Mansoor</span>
          </h1>

          {/* ROLE */}
          <p className="text-lg md:text-xl text-pink-400 font-medium">
            Front-End Developer
          </p>

          {/* DESCRIPTION */}
          <p className="home-desc max-w-md mx-auto md:mx-0 text-gray-400">
            I build modern, responsive, and high-performance web applications.
            Currently learning full-stack development 🚀
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <Link to="/projects" className="home-btn home-btn-primary group">
              View Projects →
            </Link>

            <Link to="/contact" className="home-btn home-btn-secondary group">
              Contact Me ✉️
            </Link>
          </div>

          {/* STATS */}
          <div className="home-stats flex justify-center md:justify-start gap-6 flex-wrap">

            <div>
              <p className="text-xl md:text-2xl font-bold text-cyan-400">1+</p>
              <p className="text-xs text-gray-500">Years of Experience</p>
            </div>

            <div>
              <p className="text-xl md:text-2xl font-bold text-cyan-400">6+</p>
              <p className="text-xs text-gray-500">Projects Completed</p>
            </div>

            <div>
              <p className="text-xl md:text-2xl font-bold text-cyan-400">10+</p>
              <p className="text-xs text-gray-500">Technologies Learned</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <div className="scale-90 sm:scale-100 md:scale-110">
            <ProfilePhoto mousePos={mousePos} />
          </div>
        </div>

      </div>
    </section>
  );
}