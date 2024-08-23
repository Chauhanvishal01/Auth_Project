import React from "react";
const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="text-center p-8 bg-blue-500 text-white w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Awesome App!</h1>
        <p className="text-lg mb-6">
          Discover a world of features and functionalities designed to make your
          life easier and more productive.
        </p>
        <a
          href="#features"
          className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </section>

      <section id="features" className="p-8 w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Create User</h3>
            <p className="text-gray-700">
              Easily create a new user account with just a few simple fields.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Create with Google</h3>
            <p className="text-gray-700">
              Sign up or log in quickly using your Google account for a seamless
              experience.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Update Profile</h3>
            <p className="text-gray-700">
              Easily update your user profile with the latest information and
              preferences.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Login</h3>
            <p className="text-gray-700">
              Securely log in to your account with personalized authentication.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Logout</h3>
            <p className="text-gray-700">
              Log out of your account with a single click when you're done.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gray-200 p-8 w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-lg mb-6">
          Have questions or feedback? Feel free to reach out to us!
        </p>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-2 w-full max-w-md border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-2 w-full max-w-md border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 p-2 w-full max-w-md border border-gray-300 rounded-lg h-32"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
