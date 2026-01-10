import { FaShieldAlt, FaLock, FaUserSecret, FaDatabase } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1
          className="text-4xl font-bold text-center mb-6"
          style={{ color: "#0b99ce" }}
        >
          Privacy Policy
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Card container */}
        <div className="shadow-xl bg-white rounded-xl p-8">
          {/* Section 1 */}
          <div className="flex gap-3 items-start mb-10">
            <FaShieldAlt
              size={28}
              className="mt-1"
              style={{ color: "#fe3885" }}
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to <strong>ClubSphere</strong> – a platform that helps users
                discover, join, and manage local clubs. This Privacy Policy
                explains how we collect, use, and protect your personal
                information when you use our platform and services.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex gap-3 items-start mb-10">
            <FaUserSecret
              size={28}
              className="mt-1"
              style={{ color: "#fe3885" }}
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ClubSphere collects information to provide a secure and seamless
                experience across all club and event interactions. The
                information we collect includes:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700">
                <li>Name, email, and profile photo (via Firebase Authentication)</li>
                <li>Account roles – admin, club manager, or member</li>
                <li>Club details submitted by managers</li>
                <li>Event registrations and membership records</li>
                <li>Payment information (processed securely through Stripe)</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex gap-3 items-start mb-10">
            <FaDatabase
              size={28}
              className="mt-1"
              style={{ color: "#fe3885" }}
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">How We Use Your Data</h2>
              <p className="text-gray-700 leading-relaxed">
                We use collected information only for operational and
                platform-improving purposes. These include:
              </p>

              <ul className="list-disc pl-6 mt-3 text-gray-700">
                <li>Authentication and account management</li>
                <li>Processing club memberships and event registrations</li>
                <li>Displaying club and event information</li>
                <li>Managing payments securely through Stripe</li>
                <li>Improving ClubSphere features and user experience</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex gap-3 items-start mb-10">
            <FaLock
              size={28}
              className="mt-1"
              style={{ color: "#fe3885" }}
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Data Security & Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your data is securely stored using modern technologies, including:
              </p>

              <ul className="list-disc pl-6 mt-3 text-gray-700">
                <li>Firebase Authentication for user security</li>
                <li>Environment variables to protect API keys</li>
                <li>Secure MongoDB database access</li>
                <li>Encrypted Stripe payment processing</li>
                <li>Role-based access control to protect sensitive information</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              ClubSphere relies on trusted third-party services only for the
              necessary operations:
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700">
              <li>Firebase Authentication – login & identity verification</li>
              <li>Stripe – secure payment processing</li>
              <li>Image hosting services (if applicable)</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy,
              feel free to contact our support team.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> support@clubsphere.com
            </p>
          </div>

          {/* Footer note */}
          <p className="text-center text-gray-500 text-sm mt-12">
            © {new Date().getFullYear()} ClubSphere. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
