import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Your Platform Name',
  description: 'Learn more about our mission, vision, and the team behind our platform.',
};

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Page Header */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            We started with a simple idea: to make high-quality tech education accessible to everyone, everywhere. Our journey is one of passion, dedication, and a belief in the power of learning.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower individuals with the practical skills and confidence they need to succeed in the ever-evolving tech industry. We are committed to providing hands-on, project-based learning experiences led by industry experts.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and effective launchpad for aspiring tech professionals globally. We envision a world where anyone with the drive to learn can build a rewarding career in technology, regardless of their background.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src="/images/team1.jpg" alt="Team Member 1" fill className="rounded-full object-cover"/>
              </div>
              <h3 className="text-xl font-semibold">Kumar</h3>
              <p className="text-gray-500">Lead Instructor</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src="/images/team2.jpg" alt="Team Member 2" fill className="rounded-full object-cover"/>
              </div>
              <h3 className="text-xl font-semibold">Ashok</h3>
              <p className="text-gray-500">Career Advisor</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src="/images/team3.jpg" alt="Team Member 3" fill className="rounded-full object-cover"/>
              </div>
              <h3 className="text-xl font-semibold">Ashok Kumar T N</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}