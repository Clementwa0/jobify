import React from 'react';
import { 
  Search, 
  Bell, 
  BookmarkPlus, 
  Globe, 
  MapPin, 
  Clock,
  Building2,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "AI-powered Job Matching",
      description: "Our intelligent algorithm matches you with the perfect IT roles based on your skills and preferences."
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-600" />,
      title: "Real-time Job Alerts",
      description: "Get instant notifications when new opportunities matching your criteria are posted."
    },
    {
      icon: <BookmarkPlus className="w-8 h-8 text-blue-600" />,
      title: "Save & Track Applications",
      description: "Keep track of your applications and save interesting positions for later review."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global IT Opportunities",
      description: "Access thousands of IT jobs from companies worldwide, including remote positions."
    }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      tags: ["Remote", "Full-time", "Senior"],
      salary: "$120k - $180k"
    },
    {
      id: 2,
      title: "React Frontend Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      tags: ["Hybrid", "Full-time", "Mid-level"],
      salary: "$90k - $130k"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudSolutions",
      location: "Austin, TX",
      tags: ["Remote", "Contract", "Senior"],
      salary: "$110k - $150k"
    },
    {
      id: 4,
      title: "Python Backend Developer",
      company: "DataFlow Systems",
      location: "Seattle, WA",
      tags: ["On-site", "Full-time", "Mid-level"],
      salary: "$95k - $140k"
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "AppNinja",
      location: "Los Angeles, CA",
      tags: ["Remote", "Full-time", "Junior"],
      salary: "$80k - $110k"
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "AI Innovations",
      location: "Boston, MA",
      tags: ["Hybrid", "Full-time", "Senior"],
      salary: "$130k - $190k"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Jobify</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                  Home
                </a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                  Features
                </a>
                <a href="#jobs" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                  Jobs
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                  Contact
                </a>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300">
                  Sign In
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">
                  Home
                </a>
                <a href="#features" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Features
                </a>
                <a href="#jobs" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Jobs
                </a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                  Contact
                </a>
                <div className="px-3 py-2 space-y-2">
                  <button className="w-full text-left text-gray-700 hover:text-gray-900 text-base font-medium">
                    Sign In
                  </button>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition duration-300">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Find Your Dream</span>{' '}
                  <span className="block text-blue-600 xl:inline">IT Job</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Jobify aggregates IT job listings globally to help you find the perfect role. 
                  Connect with top companies and advance your tech career today.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300">
                      Get Started
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-br from-blue-500 to-amber-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-white text-center">
              <Search className="w-24 h-24 mx-auto mb-4 opacity-80" />
              <p className="text-xl font-semibold">Your Career Awaits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Jobify?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover the tools and features that make your job search more efficient and successful.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="jobs" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Job Opportunities</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Latest IT Job Openings
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Browse through our curated selection of top IT positions from leading companies.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tag === 'Remote' ? 'bg-green-100 text-green-800' :
                        tag === 'Full-time' ? 'bg-blue-100 text-blue-800' :
                        tag === 'Contract' ? 'bg-amber-100 text-amber-800' :
                        tag === 'Senior' ? 'bg-purple-100 text-purple-800' :
                        tag === 'Mid-level' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{job.salary}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition duration-300">
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <h2 className="text-2xl font-bold text-white">Jobify</h2>
              <p className="text-gray-300 text-base">
                Connecting talented developers with their dream IT jobs worldwide.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition duration-300">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition duration-300">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition duration-300">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition duration-300">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              © 2025 Jobify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}