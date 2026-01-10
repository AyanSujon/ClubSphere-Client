import React from 'react';
import Hero from './Hero';
import UpcomingEvents from './UpcomingEvents';
import FeaturedClubs from './FeaturedClubs';
import HowClubSphereWorks from './HowClubSphereWorks';
import WhyJoinClub from './WhyJoinClub';
import PopularCategories from './PopularCategories';
import Newsletter from '../../components/shared/Newsletter';
import BecomeAClubManagerCTA from './BecomeAClubManagerCTA';
import StatsSection from './StatsSection';


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <UpcomingEvents></UpcomingEvents>
           <StatsSection/>
           <PopularCategories></PopularCategories>
           <FeaturedClubs></FeaturedClubs>
           <HowClubSphereWorks></HowClubSphereWorks>
           <WhyJoinClub></WhyJoinClub>
           <BecomeAClubManagerCTA/>
           <Newsletter></Newsletter>

        </div>
    );
};

export default Home;


