"use client"

import { useEffect, useRef, useState } from "react"

const Home = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const animateElement = (element, delay = 0) => {
      if (element) {
        element.style.opacity = "0"
        element.style.transform = "translateY(50px)"
        element.style.transition = "all 1.5s ease-out"

        setTimeout(() => {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }, delay)
      }
    }

    animateElement(titleRef.current, 200)
    animateElement(subtitleRef.current, 400)
    animateElement(buttonRef.current, 600)
  }, [])

  const handleButtonHover = (e) => {
    e.target.style.transform = "scale(1.08)"
    e.target.style.boxShadow = "0 20px 45px rgba(0,0,0,0.35), 0 8px 20px rgba(255, 165, 0, 0.5)"
  }

  const handleButtonLeave = (e) => {
    e.target.style.transform = "scale(1)"
    e.target.style.boxShadow = "0 15px 35px rgba(0,0,0,0.25), 0 5px 15px rgba(255, 165, 0, 0.4)"
  }

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }

        @keyframes rainbow-flow {
          0% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
          100% { transform: translateY(0px) rotate(12deg); }
        }

        @keyframes rainbow-flow-right {
          0% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-12deg); }
          100% { transform: translateY(0px) rotate(-12deg); }
        }

        @keyframes mandala-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes mandala-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }

        .mandala-pattern {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 3px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: mandala-rotate 8s linear infinite, mandala-pulse 4s ease-in-out infinite;
        }

        .mandala-pattern::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
        }

        .mandala-pattern::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 15px;
          height: 15px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }

        .mandala-dots {
          position: absolute;
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 
            0 15px 0 rgba(255, 255, 255, 0.9),
            0 30px 0 rgba(255, 255, 255, 0.9),
            0 45px 0 rgba(255, 255, 255, 0.9),
            15px 7px 0 rgba(255, 255, 255, 0.9),
            -15px 7px 0 rgba(255, 255, 255, 0.9),
            15px 37px 0 rgba(255, 255, 255, 0.9),
            -15px 37px 0 rgba(255, 255, 255, 0.9);
        }
      `}</style>

      <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 font-sans">
        <nav className="relative z-20 flex items-center justify-between px-4 md:px-12 py-4 md:py-6 bg-transparent">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 md:space-x-8">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Home
            </a>
            <a
              href="#"
              className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform"
            >
              About
            </a>
            <a
              href="#"
              className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Showcase
            </a>
            <a
              href="#"
              className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Team
            </a>
            <a
              href="#"
              className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 hover:scale-105 transform"
            >
              FAQ
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></div>
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-black text-lg md:text-xl tracking-wider shadow-lg hover:shadow-xl transition-shadow duration-300">
              CULTFEST
            </div>
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
            Join Us
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm z-30 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              <a
                href="#"
                className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
              >
                Roadmap
              </a>
              <a
                href="#"
                className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
              >
                Showcase
              </a>
              <a
                href="#"
                className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
              >
                Team
              </a>
              <a
                href="#"
                className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
              >
                FAQ
              </a>
            </div>
          </div>
        )}

        <div className="hidden md:block absolute left-0 top-0 h-full w-40 md:w-56 overflow-hidden">
          <div className="absolute -left-20 top-0 h-full w-80">
            <div
              className="h-full w-20 bg-gradient-to-b from-pink-400 to-pink-500 transform rotate-12 absolute left-0 rounded-r-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow 4s ease-in-out infinite" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "15%", left: "50%", transform: "translateX(-50%)", animationDelay: "0s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "45%", left: "50%", transform: "translateX(-50%)", animationDelay: "2s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "75%", left: "50%", transform: "translateX(-50%)", animationDelay: "4s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
            <div
              className="h-full w-20 bg-gradient-to-b from-yellow-400 to-yellow-500 transform rotate-12 absolute left-16 rounded-r-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow 4s ease-in-out infinite 0.5s" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "25%", left: "50%", transform: "translateX(-50%)", animationDelay: "1s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "65%", left: "50%", transform: "translateX(-50%)", animationDelay: "3s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
            <div
              className="h-full w-20 bg-gradient-to-b from-orange-400 to-orange-500 transform rotate-12 absolute left-32 rounded-r-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow 4s ease-in-out infinite 1s" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "20%", left: "50%", transform: "translateX(-50%)", animationDelay: "1.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "55%", left: "50%", transform: "translateX(-50%)", animationDelay: "3.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "85%", left: "50%", transform: "translateX(-50%)", animationDelay: "5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
            <div
              className="h-full w-20 bg-gradient-to-b from-red-400 to-red-500 transform rotate-12 absolute left-48 rounded-r-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow 4s ease-in-out infinite 1.5s" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "30%", left: "50%", transform: "translateX(-50%)", animationDelay: "2.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "70%", left: "50%", transform: "translateX(-50%)", animationDelay: "4.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-0 top-0 h-full w-40 md:w-56 overflow-hidden">
          <div className="absolute -right-20 top-0 h-full w-80">
            <div
              className="h-full w-20 bg-gradient-to-b from-pink-400 to-pink-500 transform -rotate-12 absolute right-0 rounded-l-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow-right 4s ease-in-out infinite" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "15%", left: "50%", transform: "translateX(-50%)", animationDelay: "0.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "45%", left: "50%", transform: "translateX(-50%)", animationDelay: "2.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "75%", left: "50%", transform: "translateX(-50%)", animationDelay: "4.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
            <div
              className="h-full w-20 bg-gradient-to-b from-yellow-400 to-yellow-500 transform -rotate-12 absolute right-16 rounded-l-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow-right 4s ease-in-out infinite 0.5s" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "25%", left: "50%", transform: "translateX(-50%)", animationDelay: "1.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "65%", left: "50%", transform: "translateX(-50%)", animationDelay: "3.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
            <div
              className="h-full w-20 bg-gradient-to-b from-orange-400 to-orange-500 transform -rotate-12 absolute right-32 rounded-l-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow-right 4s ease-in-out infinite 1s" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "20%", left: "50%", transform: "translateX(-50%)", animationDelay: "2s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "55%", left: "50%", transform: "translateX(-50%)", animationDelay: "4s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "85%", left: "50%", transform: "translateX(-50%)", animationDelay: "5.5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
            <div
              className="h-full w-20 bg-gradient-to-b from-red-400 to-red-500 transform -rotate-12 absolute right-48 rounded-l-3xl shadow-lg relative"
              style={{ animation: "rainbow-flow-right 4s ease-in-out infinite 1.5s" }}
            >
              <div
                className="mandala-pattern"
                style={{ top: "30%", left: "50%", transform: "translateX(-50%)", animationDelay: "3s" }}
              >
                <div className="mandala-dots"></div>
              </div>
              <div
                className="mandala-pattern"
                style={{ top: "70%", left: "50%", transform: "translateX(-50%)", animationDelay: "5s" }}
              >
                <div className="mandala-dots"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute left-0 top-0 h-full w-32 md:w-48 overflow-hidden">
          <div className="absolute -left-16 top-0 h-full w-64">
            <div className="h-full w-16 bg-pink-400 transform rotate-12 absolute left-0"></div>
            <div className="h-full w-16 bg-yellow-400 transform rotate-12 absolute left-12"></div>
            <div className="h-full w-16 bg-orange-400 transform rotate-12 absolute left-24"></div>
            <div className="h-full w-16 bg-red-400 transform rotate-12 absolute left-36"></div>
          </div>
        </div>

        <div className="hidden md:block absolute right-0 top-0 h-full w-32 md:w-48 overflow-hidden">
          <div className="absolute -right-16 top-0 h-full w-64">
            <div className="h-full w-16 bg-pink-400 transform -rotate-12 absolute right-0"></div>
            <div className="h-full w-16 bg-yellow-400 transform -rotate-12 absolute right-12"></div>
            <div className="h-full w-16 bg-orange-400 transform -rotate-12 absolute right-24"></div>
            <div className="h-full w-16 bg-red-400 transform -rotate-12 absolute right-36"></div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center mt-4 md:mt-8 mb-8 md:mb-12 px-4">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xl md:text-2xl">☀️</span>
            </div>
            <div className="bg-orange-500 text-white px-4 md:px-6 py-2 rounded-full font-bold text-sm md:text-lg">
              Saturday 15th March, Shegaon, India
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-8 flex items-center justify-center min-h-[60vh] flex-col text-center"
        >
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 relative leading-tight"
            style={{
              color: "#000",
              textShadow: `
                -2px -2px 0 #fff,
                2px -2px 0 #fff,
                -2px 2px 0 #fff,
                2px 2px 0 #fff,
                -3px 0 0 #fff,
                3px 0 0 #fff,
                0 -3px 0 #fff,
                0 3px 0 #fff,
                0 0 10px rgba(255,165,0,0.5)
              `,
              animation: "wiggle 3s ease-in-out infinite",
            }}
          >
            Cultural vibes, festival
          </h1>

          <h2
            ref={subtitleRef}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 relative leading-tight"
            style={{
              color: "#000",
              textShadow: `
                -2px -2px 0 #fff,
                2px -2px 0 #fff,
                -2px 2px 0 #fff,
                2px 2px 0 #fff,
                -3px 0 0 #fff,
                3px 0 0 #fff,
                0 -3px 0 #fff,
                0 3px 0 #fff,
                0 0 10px rgba(255,165,0,0.5)
              `,
              animation: "bounce 2s ease-in-out infinite",
            }}
          >
            times, good memories.
          </h2>

          <div className="bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl mb-8 md:mb-12 transform rotate-1 shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black">Cultural Council is back.</h3>
          </div>

          <button
            ref={buttonRef}
            className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-2xl font-black border-none cursor-pointer shadow-2xl transition-all duration-500 transform scale-100 mt-4 md:mt-8 hover:scale-105 hover:shadow-3xl"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            🎉 Join the Festival 🎊
          </button>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-orange-600">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-orange-500 flex items-center justify-center mb-2 md:mb-3 bg-white shadow-lg"
            style={{ animation: "bounce 2s infinite" }}
          >
            <span className="text-xl md:text-2xl font-bold">↓</span>
          </div>
          <span className="text-base md:text-lg font-bold">Explore</span>
        </div>
      </div>
    </>
  )
}

export default Home
