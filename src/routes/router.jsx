import { createBrowserRouter } from "react-router";
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
        element: <ClubsDetails/>,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/events/:id',
        element: <EventsDetails/>,
      },
      {
        path: '/payment-success',
        element: <PaymentSuccess/>,
      },
      {
        path: '/club-membership-payment-success',
        element: <ClubMembershipPaymentSuccess/>,
      },
      {
        path: '/payment-cancelled',
        element: <PaymentCancelled/>,
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
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute></PrivateRoute>
      },
      {
        path: 'payment',
        element: <Payment/>,
      },
      {
        path: 'admin',
        element: <Admin/>,
      },
      {
        path: 'admin/manage-users',
        element: <ManageUsers/>,
      },
      {
        path: 'admin/manage-clubs',
        element: <ManageClubs/>,
      },
   

    ]
  },

]);





