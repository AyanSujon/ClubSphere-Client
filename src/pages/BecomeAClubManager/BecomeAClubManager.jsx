import { FaRegClock, FaUsers, FaClipboardList, FaMoneyCheckAlt } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";

export default function BecomeAClubManager() {
  return (
    <div className="w-full">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-[#0b99ce]/10 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0b99ce]">
            Become a Club Manager
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Start your own community, manage members, host events, and grow faster 
            with <span className="font-semibold text-[#fe3885]">ClubSphere</span>.
          </p>

          <button className="btn mt-8 bg-[#0b99ce] border-none text-white hover:bg-[#087daa] px-8">
            Create Your Club
          </button>
        </div>
      </section>

      {/* ---------------- BENEFITS SECTION ---------------- */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0b99ce] mb-12">
            Why Become a Club Manager?
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {/* card 1 */}
            <div className="p-6 bg-base-100 shadow-md rounded-xl hover:shadow-xl transition">
              <FaUsers className="text-4xl text-[#fe3885] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grow Your Community</h3>
              <p className="text-gray-600">
                Build a club focused on your passion and connect with like-minded people.
              </p>
            </div>

            {/* card 2 */}
            <div className="p-6 bg-base-100 shadow-md rounded-xl hover:shadow-xl transition">
              <MdEventAvailable className="text-4xl text-[#fe3885] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Host Events Easily</h3>
              <p className="text-gray-600">
                Create, manage and promote events for your club members.
              </p>
            </div>

            {/* card 3 */}
            <div className="p-6 bg-base-100 shadow-md rounded-xl hover:shadow-xl transition">
              <FaMoneyCheckAlt className="text-4xl text-[#fe3885] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collect Membership Fees</h3>
              <p className="text-gray-600">
                Enable paid memberships and receive payments securely via Stripe.
              </p>
            </div>

            {/* card 4 */}
            <div className="p-6 bg-base-100 shadow-md rounded-xl hover:shadow-xl transition">
              <FaClipboardList className="text-4xl text-[#fe3885] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manage Members</h3>
              <p className="text-gray-600">
                Track membership status, event registrations, and club activity.
              </p>
            </div>

            {/* card 5 */}
            <div className="p-6 bg-base-100 shadow-md rounded-xl hover:shadow-xl transition">
              <FaRegClock className="text-4xl text-[#fe3885] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">
                Use dashboards, automation, and built-in tools to manage everything easily.
              </p>
            </div>

            {/* card 6 */}
            <div className="p-6 bg-base-100 shadow-md rounded-xl hover:shadow-xl transition">
              <IoRocketOutline className="text-4xl text-[#fe3885] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grow Faster</h3>
              <p className="text-gray-600">
                Reach more people and grow your club with ClubSphere’s discovery system.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- STEPS SECTION ---------------- */}
      <section className="py-20 bg-[#0b99ce]/5 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b99ce] mb-12">
            How to Get Started
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            {/* step 1 */}
            <div className="p-6 bg-white rounded-xl shadow">
              <span className="text-4xl font-bold text-[#fe3885]">1</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Create an Account
              </h3>
              <p className="text-gray-600">
                Sign up using your email or Google. Your role will be set as a member first.
              </p>
            </div>

            {/* step 2 */}
            <div className="p-6 bg-white rounded-xl shadow">
              <span className="text-4xl font-bold text-[#fe3885]">2</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Apply as Club Manager
              </h3>
              <p className="text-gray-600">
                Submit a club creation request. Admin will review and approve.
              </p>
            </div>

            {/* step 3 */}
            <div className="p-6 bg-white rounded-xl shadow">
              <span className="text-4xl font-bold text-[#fe3885]">3</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Build & Lead Your Club
              </h3>
              <p className="text-gray-600">
                After approval, access your manager dashboard and start managing your club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b99ce] mb-6">
            Ready to Build Your Community?
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
            Create your club today and start growing your community with powerful tools,
            dashboards, and event management features.
          </p>

          <button className="btn bg-[#fe3885] border-none text-white hover:bg-[#d82e6f] px-10">
            Become a Club Manager
          </button>
        </div>
      </section>

    </div>
  );
}
