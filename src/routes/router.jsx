import { createBrowserRouter, Outlet } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import Clubs from "../pages/Clubs/Clubs";
import Events from "../pages/Events/Events";
import Pricing from "../pages/Pricing/Pricing";
import Profile from "../pages/Profile/Profile";
import ClubsDetails from "../pages/ClubsDetails/ClubsDetails";
import EventsDetails from "../pages/EventsDetails/EventsDetails";
import PaymentCancelled from "../pages/Payment/PaymentCancelled";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import Payment from "../pages/Payment/Payment";
import ClubMembershipPaymentSuccess from "../pages/Payment/ClubMembershipPaymentSuccess";
import Admin from "../pages/Dashboard/Admin/Admin";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClubs from "../pages/Dashboard/Admin/Manage Clubs/ManageClubs";
import Transactions from "../pages/Dashboard/Admin/Transactions/Transactions";
import ClubManager from "../pages/Dashboard/ClubManager/ClubManager";
import MyClubs from "../pages/Dashboard/ClubManager/MyClubs/MyClubs";
import EditClub from "../pages/Dashboard/ClubManager/EditClub/EditClub";
import ClubMembers from "../pages/Dashboard/ClubManager/ClubMembers/ClubMembers";
import EventsManagement from "../pages/Dashboard/ClubManager/EventsManagement/EventsManagement";
import EventRegistrations from "../pages/Dashboard/ClubManager/EventRegistrations/EventRegistrations";
import MemberOverview from "../pages/Dashboard/Member/MemberOverview/MemberOverview";
import MyClubsMember from "../pages/Dashboard/Member/MyClubsMember/MyClubsMember";
import MyEventsMember from "../pages/Dashboard/Member/MyEventsMember/MyEventsMember";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory/PaymentHistory";
import EditEvent from "../pages/Dashboard/ClubManager/EditEvent/EditEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/clubs',
        element: <Clubs />,
      },
      {
        path: '/clubs/:id',
        element: <ClubsDetails />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/events/:id',
        element: <EventsDetails />,
      },
      {
        path: '/payment-success',
        element: <PrivateRoute><PaymentSuccess /></PrivateRoute>,
      },
      {
        path: '/club-membership-payment-success',
        element: <PrivateRoute><ClubMembershipPaymentSuccess /></PrivateRoute>,
      },
      {
        path: '/payment-cancelled',
        element: <PrivateRoute> <PaymentCancelled /></PrivateRoute>
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute>
          <Admin></Admin>
        </PrivateRoute>
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'admin/manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'admin/manage-clubs',
        element: <ManageClubs />,
      },
      {
        path: 'admin/transactions',
        element: <Transactions />,
      },
      {
        path: 'manager',
        element: <ClubManager />,
      },
      {
        path: 'manager/my-clubs',
        element: <MyClubs />,
      },
      {
        path: 'manager/my-clubs/:id',
        element: <ClubsDetails />,
      },
      {
        path: 'manager/my-clubs/:id/edit',
        element: <EditClub />,
      },
      {
        path: 'manager/club-members',
        element: <ClubMembers />,
      },
      {
        path: 'manager/events-management',
        element: <EventsManagement />,
      },
      {
        path: 'manager/events-management/:id/edit',
        element: <EditEvent/>,
      },
      {
        path: 'manager/event-registrations',
        element: <EventRegistrations />,
      },
      {
        path: 'member',
        element: <MemberOverview/>,
      },
      {
        path: 'member/my-clubs',
        element: <MyClubsMember/>,
      },
      {
        path: 'member/my-clubs',
        element: <MyClubsMember/>,
      },
      {
        path: 'member/my-clubs/:id',
        element: <ClubsDetails/>,
      },
      {
        path: 'member/my-events',
        element: <MyEventsMember/>,
      },
      {
        path: 'member/payment-history',
        element: <PaymentHistory/>,
      },


    ]
  },

]);





