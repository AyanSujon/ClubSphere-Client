import React from 'react';
import { Link, Outlet } from 'react-router';
import { FaBuilding, FaClipboardList, FaMoneyBillWave, FaUsers, FaUserShield, FaUserTie } from 'react-icons/fa6';
import { FaUserFriends, FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";

import Logo from '../components/shared/Logo';
const Dashboard = () => {
    return (
        <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Navbar */}
                        <nav className="navbar w-full bg-base-300">
                            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                {/* Sidebar toggle icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                            </label>
                            <div className="px-4">
                                <Logo></Logo>
                            </div>
                        </nav>
                        {/* Page content here */}
                        {/* <div className="p-4">Page Content</div> */}
                        <Outlet />
                    </div>

                    <div className="drawer-side is-drawer-close:overflow-visible">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                            {/* Sidebar content here */}
                            <ul className="menu w-full grow">
                                {/* Home page List item */}
                                <li>
                                    <Link to={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                        {/* Home icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                        <span className="is-drawer-close:hidden">Home Page</span>
                                    </Link>
                                </li>
                                {/* Admin List item */}
                                <li>
                                    <Link to={"/dashboard/admin"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Admin Overview">
                                        {/* Home icon */}
                                        <FaUserShield className="inline-block mr-2" />
                                        <span className="is-drawer-close:hidden">Admin Overview</span>
                                    </Link>
                                    <Link to={"/dashboard/admin/manage-users"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">
                                        {/* Home icon */}
                                        <FaUsers className="inline-block mr-2" />
                                        <span className="is-drawer-close:hidden">Manage Users</span>
                                    </Link>
                                    <Link to={"/dashboard/admin/manage-clubs"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Clubs">
                                        {/* Home icon */}
                                        <FaBuilding className="inline-block mr-2" />
                                        <span className="is-drawer-close:hidden">Manage Clubs</span>
                                    </Link>
                                    <Link to={"/dashboard/admin/transactions"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Transactions">
                                        {/* Home icon */}
                                        <FaMoneyBillWave className="inline-block mr-2" />
                                        <span className="is-drawer-close:hidden">Transactions</span>
                                    </Link>

                                </li>








                                {/* Manager List item */}
                                <li>
                                    <Link to={"/dashboard/manager"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manager">
                                        <FaUserTie className="inline-block mr-2" /> {/* Manager Overview */}
                                        <span className="is-drawer-close:hidden">Manager Overview</span>
                                    </Link>

                                    <Link to={"/dashboard/manager/my-clubs"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Clubs">
                                        <FaUsers className="inline-block mr-2" /> {/* Group of users / clubs */}
                                        <span className="is-drawer-close:hidden">My Clubs</span>
                                    </Link>

                                    <Link to={"/dashboard/manager/club-members"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Club Members">
                                        <FaUserFriends className="inline-block mr-2" /> {/* Individual members */}
                                        <span className="is-drawer-close:hidden">Club Members</span>
                                    </Link>

                                    <Link to={"/dashboard/manager/events-management"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Events Management">
                                        <FaCalendarAlt className="inline-block mr-2" /> {/* Calendar / events */}
                                        <span className="is-drawer-close:hidden">Events Management</span>
                                    </Link>

                                    <Link to={"/dashboard/manager/event-registrations"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Event Registrations">
                                        <FaClipboardList className="inline-block mr-2" /> {/* Registrations / list */}
                                        <span className="is-drawer-close:hidden">Event Registrations</span>
                                    </Link>


                                </li>
                    
                                {/* Member List item */}
                                <li>
                                    <Link to={"/dashboard/member"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Member Overview">
                                        <FaUsers className="my-1.5 inline-block size-4" />
                                        <span className="is-drawer-close:hidden">Member Overview</span>
                                    </Link>

                                    <Link to={"/dashboard/member/my-clubs"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Clubs">
                                        <FaBuilding className="my-1.5 inline-block size-4" />
                                        <span className="is-drawer-close:hidden">My Clubs</span>
                                    </Link>

                                    <Link to={"/dashboard/member/my-events"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Events">
                                        <FaCalendarAlt className="my-1.5 inline-block size-4" />
                                        <span className="is-drawer-close:hidden">My Events</span>
                                    </Link>

                                    <Link to={"/dashboard/member/payment-history"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History">
                                        <FaMoneyCheckAlt className="my-1.5 inline-block size-4" />
                                        <span className="is-drawer-close:hidden">Payment History</span>
                                    </Link>
                                </li>













                                {/* List item */}
                                <li>
                                    <Link to={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                        {/* Settings icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                        <span className="is-drawer-close:hidden">Settings</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;