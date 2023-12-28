import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative md:min-h-[80vh] lg:min-h-screen py-8 px-12 before:w-40 before:h-40 before:bg-[#7166f9] before:absolute before:bottom-[20%] before:left-[22%] before:rounded-full before:blur-[120px] after:w-40 after:h-40 after:bg-[#7166f9] after:absolute after:top-[5%] after:-right-[3%] after:rounded-full after:blur-[120px]">
    
    <div className="flex items-center justify-between w-full">
      <div className="w-6/12 lg:w-2/12 flex items-center gap-2">
        <div className="bg-gray-900 w-6 h-6 rounded-full"></div>
        <h1 className="text-xl font-bold">jt.dev</h1>
      </div>
      <nav className="hidden w-6/12 lg:flex justify-center items-center gap-8 text-gray-500 font-medium">
        <a
          href="#"
          className="text-gray-900 hover:text-gray-900 transition-colors"
        >
          Home
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          Key features
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          Pricing
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          Testimonial
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          FAQ
        </a>
      </nav>
      <div className="hidden w-4/12 lg:flex justify-center items-center gap-8">
        <button type="button" className="py-2 px-4">
          Log in
        </button>
        <button
          type="button"
          className="border border-gray-600 py-2 px-4 rounded-lg"
        >
          Sign up
        </button>
      </div>
    
      <div className="w-6/12 lg:hidden flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 mt-24 md:px-8">
      <div className="md:p-8">
   
        <h1 className="text-5xl md:text-7xl font-semibold mb-8">
          Powerful ui <br /> Builder{" "}
        </h1>
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="Image user"
            className="w-10 h-10"
          />
          <p className="text-gray-500 max-w-sm">
            We blend insights and strategy to create digital products for
            forward-thinking organisations.
          </p>
        </div>
      
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 md:mb-32">
          <button className="bg-[#5a7bff] w-full md:w-auto text-white py-4 md:py-2 px-6 rounded-lg shadow-2xl shadow-[#5a7bff]">
            Contact us
          </button>
          <button className="flex items-center justify-center gap-2 py-2 px-6 w-full md:w-auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/148/148744.png"
              alt="Button image"
              className="w-10 h-10"
            />
            <span>How it works</span>
          </button>
        </div>
     
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
          <a
            href="#"
            className="flex md:flex-col items-center justify-between gap-6 w-full md:max-w-[100px] p-4 md:p-8 rounded-2xl bg-gradient-to-t from-[#ff7635] to-[#f8923a]"
          >
            <div className="text-center text-white">
              <p>More</p>
              <p>Services</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </a>
          <div className="flex items-center gap-6 md:block">
            <img
              src="/icons/spotlight.svg"
              className="w-14 h-14 p-4 bg-[#7166f9] rounded-lg mb-4"
            />
            <div>
              <h3 className="text-sm font-bold mb-1 md:mb-4">
                Business Planning
              </h3>
              <a href="#" className="text-gray-400 text-sm">
                See more +
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6 md:block">
            <img
              src="/icons/cohete.svg"
              className="w-14 h-14 p-4 bg-[#5a7bff] rounded-lg mb-4"
            />
            <div>
              <h3 className="text-sm font-bold mb-1 md:mb-4">
                UI/IX Design
              </h3>
              <a href="#" className="text-gray-400 text-sm">
                See more +
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-proceso-flujo-trabajo-diseno-automatizacion-aumento-productividad-oficina-procesos-comerciales-metafora-abstracta-software-plataforma-gestion-proyectos-basada-nube_335657-2945.jpg"
          className="w-full object-cover"
        />
      </div>
    </div>
  </div>
  )
}

export default App
