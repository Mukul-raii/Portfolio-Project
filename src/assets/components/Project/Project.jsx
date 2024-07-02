import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Ensure Tailwind CSS is imported

function Project() {
  return (
    <div id="Project" className="bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider animate__animated animate__fadeInDown">My Projects</h1>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInLeft">
            <h2 className="text-2xl font-bold mb-4">Stock Management</h2>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img className="w-full" src="/images/Screenshot 2024-06-15 213030.png" alt="Stock Management 1" />
              </div>
              <div>
                <img className="w-full" src="/images/Screenshot 2024-06-15 213041.png" alt="Stock Management 2" />
              </div>
              <div>
                <img className="w-full" src="/images/Screenshot 2024-07-02 192003.png" alt="Stock Management 3" />
              </div>
            </Carousel>
            <div className="text-gray-700 mb-4">
              The application is a comprehensive dashboard designed for managing and visualizing sales, payments, and various financial records related to multiple shops. It leverages the following technologies and libraries:
              <ul className="list-disc ml-5 mt-2">
                <li>React for building the user interface.</li>
                <li>Axios for making HTTP requests to the backend API.</li>
                <li>ReactApexChart for rendering interactive charts.</li>
                <li>Tailwind CSS for styling the components.</li>
                <li>Modal component for displaying detailed record information in a pop-up format.</li>
              </ul>
            </div>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Mukul-raii/Shop-management" className="text-blue-500 hover:underline">GitHub</a>
              <a href="https://shop-management-alpha.vercel.app/" className="text-blue-500 hover:underline">Live view</a>
            </div>
            
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInRight">
          <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
          
          <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img className="w-full" src="/images/Screenshot_15-6-2024_22856_portfolio-nine-murex-31.vercel.app.jpeg" alt="Portfolio 1" />
              </div>
              <div>
                <img className="w-full" src="/images/Screenshot_15-6-2024_22911_portfolio-nine-murex-31.vercel.app.jpeg" alt="Portfolio 2" />
              </div>
              <div>
                <img className="w-full" src="/images/Screenshot 2024-07-02 192247.png" alt="Portfolio 3" />
              </div>
            </Carousel>
            <div className="text-gray-700 mb-4">
              A sleek and modern portfolio website showcasing my skills, projects, and professional journey.
              <ul className="list-disc ml-5 mt-2">
                <li>React: Dynamic and responsive UI.</li>
                <li>CSS Modules: Scoped and maintainable styles.</li>
                <li>React Router: Seamless navigation.</li>
                <li>EmailJS: Integrated contact form for direct communication.</li>
              </ul>
            </div>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Mukul-raii/Portfolio-Project" className="text-blue-500 hover:underline">GitHub</a>
              <a href="https://portfolio-nine-murex-31.vercel.app/yy" className="text-blue-500 hover:underline">Live view</a>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
