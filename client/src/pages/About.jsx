import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="text-center p-8 bg-green-500 text-white w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Learn more about our mission, vision, and the team behind this app.
        </p>
      </section>

      <section className="p-8 w-full md:w-3/4 lg:w-1/2 mb-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to create innovative solutions that make life easier
          and more enjoyable. We are dedicated to providing high-quality
          services and continuously improving our offerings to meet the evolving
          needs of our users.
        </p>
      </section>

      <section className="bg-white p-8 w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://imgs.search.brave.com/QH6a7hxHYyMjJpqsJwvB1eTlTgL_lTS4-ZKRmy9qbPA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/OC8wNC8xMy8wNi9z/b2Z0d2FyZS1kZXZl/bG9wZXItNjUyMTcy/MF82NDAuanBn"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Vishal Chauhan</h3>
            <p className="text-gray-700">CEO & Founder</p>
            <p className="text-gray-500 mt-2">
              Vishal is the visionary behind our app. With a passion for
              technology and innovation, He leads the team with dedication and
              creativity.
            </p>
          </div>
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg text-center">
            <img
              src="https://imgs.search.brave.com/IP9IBHBdku7Wc0uk8UWLQ_X4Ar_j_th22cMUciMXwvI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wcm9ncmFtbWVy/LWNvZGVyLXByb2dy/YW1taW5nLWNvbXB1/dGVyLXRleHQtY29k/ZS1wcm9ncmFtLXBv/cnRyYWl0LW1hbi13/b3JraW5nXzExOTc3/OTctMjE0MjUwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Vishal Chauhan II</h3>
            <p className="text-gray-700">CTO</p>
            <p className="text-gray-500 mt-2">
              Chauhan is the technical mastermind behind our platform. He
              ensures that our technology is cutting-edge and reliable.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-center text-gray-700 mb-6">
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to connect, feel free to reach out.
        </p>
        <div className="text-center">
          <a
            href="mailto:info@ourapp.com"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
