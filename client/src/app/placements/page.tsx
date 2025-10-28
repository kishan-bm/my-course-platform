import { FaBuilding, FaUsers, FaTrophy, FaGraduationCap, FaStar, FaRupeeSign } from 'react-icons/fa';

export default function PlacementsPage() {
  const successStories = [
    {
      name: "Priya Sharma",
      course: "Full-Stack Web Development",
      company: "Google",
      role: "Software Engineer",
      salary: "₹18 LPA",
      image: "/images/avatar1.jpg",
      testimonial: "CareerFastrack transformed my career completely. The hands-on projects and mentorship helped me land my dream job at Google within 6 months of completing the course.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      course: "Data Science & ML",
      company: "Microsoft",
      role: "Data Scientist",
      salary: "₹22 LPA",
      image: "/images/avatar2.jpg",
      testimonial: "The comprehensive curriculum and real-world projects gave me the confidence to crack interviews at top tech companies. Highly recommended!",
      rating: 5
    },
    {
      name: "Anita Patel",
      course: "Cloud Computing",
      company: "Amazon AWS",
      role: "Cloud Solutions Architect",
      salary: "₹25 LPA",
      image: "/images/avatar3.jpg",
      testimonial: "From zero knowledge to AWS certified professional - CareerFastrack made it possible. The instructors are world-class and the placement support is exceptional.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      course: "Cybersecurity",
      company: "IBM",
      role: "Security Analyst",
      salary: "₹16 LPA",
      image: "/images/team1.jpg",
      testimonial: "The practical approach to cybersecurity training helped me understand real-world threats and solutions. Now I'm protecting enterprise systems at IBM.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      course: "Mobile App Development",
      company: "Uber",
      role: "Mobile Developer",
      salary: "₹20 LPA",
      image: "/images/team2.jpg",
      testimonial: "Building apps from scratch to deployment - the course covered everything. The live projects were challenging but incredibly rewarding.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      course: "AI & Machine Learning",
      company: "Tesla",
      role: "AI Engineer",
      salary: "₹28 LPA",
      image: "/images/team3.jpg",
      testimonial: "The advanced AI concepts and research projects prepared me for cutting-edge roles. I'm now working on autonomous vehicle technology at Tesla.",
      rating: 5
    }
  ];

  const partnerCompanies = [
    { name: "Google", logo: "🔍", jobs: 45 },
    { name: "Microsoft", logo: "🪟", jobs: 38 },
    { name: "Amazon", logo: "📦", jobs: 52 },
    { name: "Apple", logo: "🍎", jobs: 28 },
    { name: "Meta", logo: "📘", jobs: 35 },
    { name: "Netflix", logo: "🎬", jobs: 22 },
    { name: "Uber", logo: "🚗", jobs: 31 },
    { name: "Airbnb", logo: "🏠", jobs: 19 },
    { name: "Tesla", logo: "⚡", jobs: 15 },
    { name: "IBM", logo: "💼", jobs: 42 },
    { name: "Oracle", logo: "🗄️", jobs: 33 },
    { name: "Adobe", logo: "🎨", jobs: 26 }
  ];

  const placementStats = [
    { number: "95%", label: "Placement Rate", icon: <FaTrophy /> },
    { number: "₹18L", label: "Average Salary", icon: <FaRupeeSign /> },
    { number: "500+", label: "Companies", icon: <FaBuilding /> },
    { number: "10K+", label: "Students Placed", icon: <FaUsers /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Dream Job
              <span className="block text-green-300">Awaits You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join thousands of successful graduates who landed their dream jobs at top companies. 
              Our 95% placement rate speaks for itself.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-600/30 px-4 py-2 rounded-full">✓ 95% Placement Rate</span>
              <span className="bg-blue-600/30 px-4 py-2 rounded-full">✓ ₹18L Average Salary</span>
              <span className="bg-purple-600/30 px-4 py-2 rounded-full">✓ 500+ Partner Companies</span>
              <span className="bg-orange-600/30 px-4 py-2 rounded-full">✓ Lifetime Career Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Placement Success</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful graduates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Profile */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>
                    <p className="text-gray-600">{story.course}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Company & Role */}
                <div className="mb-4">
                  <div className="flex items-center text-gray-700 mb-1">
                    <FaBuilding className="mr-2 text-blue-600" />
                    <span className="font-semibold">{story.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaGraduationCap className="mr-2 text-green-600" />
                    <span>{story.role}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaRupeeSign className="mr-2 text-green-600" />
                    <span className="font-semibold text-green-600">{story.salary}</span>
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-gray-600 italic mb-4">&ldquo;{story.testimonial}&rdquo;</p>

                {/* Course Badge */}
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {story.course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Partner Companies</h2>
            <p className="text-xl text-gray-600">Where our graduates work</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerCompanies.map((company, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="text-4xl mb-3">{company.logo}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.jobs} open positions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Placement Process</h2>
            <p className="text-xl text-gray-600">How we ensure your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Assessment</h3>
              <p className="text-gray-600">We evaluate your current skills and create a personalized learning path</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Training & Projects</h3>
              <p className="text-gray-600">Hands-on training with real-world projects to build your portfolio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interview Prep</h3>
              <p className="text-gray-600">Mock interviews, resume building, and technical interview preparation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Placement</h3>
              <p className="text-gray-600">Direct placement assistance with our 500+ partner companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates and land your dream job at top companies. 
            Our placement team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              View All Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
