import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">Jobify</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Sign In</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Find Your Dream <span className="text-blue-600">IT Job</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Jobify aggregates thousands of IT job listings from around the world. 
            Get matched with opportunities that align with your skills and career aspirations.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition duration-200">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-64 bg-gradient-to-r from-blue-100 to-amber-100 rounded-2xl shadow-lg"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Jobify</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Matching",
                description: "Intelligent algorithms match your profile with perfect job opportunities",
                icon: "🤖"
              },
              {
                title: "Real-time Alerts",
                description: "Instant notifications for new jobs that match your criteria",
                icon: "🔔"
              },
              {
                title: "Track Applications",
                description: "Monitor all your applications in one organized dashboard",
                icon: "📊"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Frontend Developer",
                content: "Found my perfect role at a startup through Jobify. The matching system is incredible!",
                avatar: "👩‍💻"
              },
              {
                name: "Marcus Johnson",
                role: "DevOps Engineer",
                content: "Real-time alerts helped me apply first and land my current position. Highly recommend!",
                avatar: "👨‍💻"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold">Jobify</span>
              </div>
              <p className="text-gray-400">© 2025 Jobify. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              {['About', 'Jobs', 'Contact', 'Privacy'].map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition duration-200">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              {['📘', '🐦', '📷', '👔'].map((icon, index) => (
                <button key={index} className="text-2xl hover:text-blue-400 transition duration-200">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;