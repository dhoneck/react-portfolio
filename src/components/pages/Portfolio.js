import React from 'react';
import TrackMyDollarsSS from '../../images/track-my-dollars-screenshot.png';
import ActivityFinderSS from '../../images/activity-finder-screenshot.png';
import FitnessFocusSS from '../../images/fitness-focus-screenshot.png';
import GoalTrackerSS from '../../images/goal-tracker-screenshot.png';
import PasswordGeneratorSS from '../../images/password-generator-screenshot.png';

function PortfolioExample(props) {
  return (
    <figure class='image is-16by9'>
      <img src={props.src} alt={props.alt} className='' />
    </figure>
  );
}

export default function Portfolio() {
  return (
    <div className='p-3'>
      <h1>Portfolio</h1>
      <p>Check out some of my projects!</p>
      <p>More projects available on <a href='https://github.com/dhoneck' target='_blank' className='my-5'>GitHub: /dustin-honeck</a></p>
      <PortfolioExample src={ TrackMyDollarsSS } alt='Track My Dollars Screenshot' />
      <PortfolioExample src={ ActivityFinderSS } alt='Activity Finder Screenshot' />
      <PortfolioExample src={ FitnessFocusSS } alt='Fitness Focus Screenshot' />
      <PortfolioExample src={ GoalTrackerSS } alt='Goal Tracker Screenshot' />
      <PortfolioExample src={ PasswordGeneratorSS } alt='Password Generator Screenshot' />
    </div>
  );
}
