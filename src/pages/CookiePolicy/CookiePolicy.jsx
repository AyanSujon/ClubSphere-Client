
import { FaCookieBite } from "react-icons/fa";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-base-100 py-14 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <FaCookieBite size={40} className="text-[#fe3885]" />
          <h1 className="text-3xl font-bold text-[#0b99ce]">
            Cookie Policy
          </h1>
        </div>

        {/* Section */}
        <div className="space-y-8 text-base leading-7">
          {/* Intro */}
          <section className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-[#0b99ce] mb-3">
              1. Introduction
            </h2>
            <p>
              At <span className="font-semibold">ClubSphere</span>, we use cookies to ensure a smooth and personalized
              experience for our users. This Cookie Policy explains what cookies are, how we
              use them, and your choices regarding their usage.
            </p>
          </section>

          {/* What Are Cookies */}
          <section className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-[#0b99ce] mb-3">
              2. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They help websites remember user preferences, improve functionality, and offer
              personalized content or analytics insights.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-[#0b99ce] mb-3">
              3. How ClubSphere Uses Cookies
            </h2>
            <p className="mb-4">We use cookies to:</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Enhance user login and authentication experience</li>
              <li>Secure protected pages like dashboards</li>
              <li>Remember user preferences and settings</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Enable functionality for Stripe payments and memberships</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-[#0b99ce] mb-3">
              4. Types of Cookies We Use
            </h2>

            <ul className="list-none space-y-4">
              <li>
                <span className="font-semibold text-[#fe3885]">Essential Cookies:</span>{" "}
                Required for secure login, authentication, and dashboard access.
              </li>
              <li>
                <span className="font-semibold text-[#fe3885]">Functional Cookies:</span>{" "}
                Improve user experience by remembering settings.
              </li>
              <li>
                <span className="font-semibold text-[#fe3885]">Analytics Cookies:</span>{" "}
                Help us understand how users interact with clubs, events, and pages.
              </li>
              <li>
                <span className="font-semibold text-[#fe3885]">Payment Cookies:</span>{" "}
                Used by Stripe to ensure safe and secure payment processing.
              </li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-[#0b99ce] mb-3">
              5. Managing Your Cookie Preferences
            </h2>
            <p>
              You can disable cookies anytime through your browser’s settings. However, please
              note that disabling essential cookies may affect your ability to log in, make
              payments, or access protected pages within ClubSphere.
            </p>
          </section>

          {/* Updates */}
          <section className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-[#0b99ce] mb-3">
              6. Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy occasionally to reflect improvements or new
              features in our platform. Any major changes will be posted on this page.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-[#0b99ce] mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Cookie Policy, feel free to reach out to
              our support team via the contact page on ClubSphere.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
