import { FaShieldAlt, FaGavel, FaUserShield, FaFileContract } from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-white shadow-md py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#0b99ce] flex items-center justify-center gap-3">
            <FaFileContract /> Terms & Conditions
          </h1>
          <p className="mt-3 text-gray-600">
            Please read these terms carefully before using ClubSphere.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

        {/* Section 1 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-[#0b99ce] text-2xl" />
            <h2 className="text-2xl font-semibold text-[#0b99ce]">
              1. Overview & Acceptance
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using <span className="font-semibold">ClubSphere – Membership & Event Management for Local Clubs</span>,
            you agree to comply with these Terms & Conditions. ClubSphere acts as a platform for discovering clubs,
            joining memberships, attending events, and managing community activities.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <FaUserShield className="text-[#fe3885] text-2xl" />
            <h2 className="text-2xl font-semibold text-[#fe3885]">
              2. User Responsibilities
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide accurate and updated registration details.</li>
            <li>Maintain confidentiality of your account and password.</li>
            <li>Use the platform respectfully and legally.</li>
            <li>Avoid creating duplicate or fraudulent accounts.</li>
            <li>Agree that all activities under your account are your responsibility.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <FaGavel className="text-[#0b99ce] text-2xl" />
            <h2 className="text-2xl font-semibold text-[#0b99ce]">
              3. Club & Event Management Rules
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Club managers must provide accurate club information.</li>
            <li>Events must follow local laws and safety guidelines.</li>
            <li>No spam, harmful activities, or misleading events are allowed.</li>
            <li>Admins reserve the right to approve or reject any club or event.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-[#fe3885] text-2xl" />
            <h2 className="text-2xl font-semibold text-[#fe3885]">
              4. Payments & Memberships
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            ClubSphere uses secure payment gateways (Stripe Test Mode) to handle membership and event fees.
            All payments are final unless explicitly stated otherwise by the respective club manager.
            ClubSphere is not responsible for disputes between club managers and members.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3 mb-4">
            <FaGavel className="text-[#0b99ce] text-2xl" />
            <h2 className="text-2xl font-semibold text-[#0b99ce]">
              5. Account Suspension & Termination
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            ClubSphere reserves the right to suspend or terminate user accounts that violate our policies,
            misuse the platform, create harmful content, or attempt unauthorized payments/fraud.
          </p>
        </section>

        {/* Section 6 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms & Conditions at any time. Continued use of the platform
            after changes indicates acceptance of updated terms.
          </p>
        </section>

        {/* Last Updated */}
        <p className="text-gray-600 text-sm text-center mt-8">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
