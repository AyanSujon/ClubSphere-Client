import { FaMoneyBillWave, FaUndoAlt, FaRegClock, FaPhoneAlt } from "react-icons/fa";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <div
        className="w-full py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #0b99ce 0%, #fe3885 100%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Refund Policy
        </h1>
        <p className="text-white/90 mt-3 max-w-2xl mx-auto">
          Understand how refunds work for memberships, events, and payments on ClubSphere.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#0b99ce]">
            <FaUndoAlt /> Overview
          </h2>
          <p className="leading-relaxed">
            ClubSphere is a platform that helps users join clubs, register for events,
            and manage memberships. Each club may implement its own refund rules, but we
            ensure transparency and a smooth refund experience for all users, club
            managers, and administrators.
          </p>
        </section>

        {/* Membership Refund Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#0b99ce]">
            <FaMoneyBillWave /> Membership Refunds
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
            <li>Refund eligibility depends on the individual club’s policy.</li>
            <li>
              Users may request a refund within <strong>48 hours</strong> of purchasing a paid membership.
            </li>
            <li>
              Refunds are processed only if the membership has not been actively used (no event participation).
            </li>
            <li>Stripe transaction fees may be deducted depending on the case.</li>
          </ul>
        </section>

        {/* Event Refund Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#0b99ce]">
            <FaRegClock /> Event Registration Refunds
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>Refunds for event tickets depend on the respective club’s event rules.</li>
            <li>
              Users may cancel their registration up to <strong>24 hours</strong> before the event start time.
            </li>
            <li>Events that have already started or ended are non-refundable.</li>
            <li>In case of event cancellation by the organizer, users receive a full refund.</li>
          </ul>
        </section>

        {/* Platform Conditions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#0b99ce]">
            <FaUndoAlt /> Platform-Level Conditions
          </h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              ClubSphere does not hold payments; all transactions are securely processed via Stripe.
            </li>
            <li>Refund approvals must match backend records and payment logs.</li>
            <li>
              Refunds may take <strong>5–7 business days</strong> to appear on the user’s bank statement.
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#0b99ce]">
            <FaPhoneAlt /> Need Help?
          </h2>
          <p className="leading-relaxed">
            If you have questions or need help with refund processing, please contact our
            support team. Provide your email, payment ID, and club/event details for quicker support.
          </p>
          <button
            className="btn mt-2 border-none text-white"
            style={{
              backgroundColor: "#fe3885",
            }}
          >
            Contact Support
          </button>
        </section>
      </div>
    </div>
  );
}
