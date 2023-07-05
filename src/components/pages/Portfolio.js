import React from 'react';
import TrackMyDollarsSS from '../../images/track-my-dollars-screenshot.png';
import ActivityFinderSS from '../../images/activity-finder-screenshot.png';
import FitnessFocusSS from '../../images/fitness-focus-screenshot.png';
import GoalTrackerSS from '../../images/goal-tracker-screenshot.png';
import PasswordGeneratorSS from '../../images/password-generator-screenshot.png';
import WeatherCheckerSS from '../../images/weather-checker-screenshot.png';
import WorkDaySchedulerSS from '../../images/work-day-scheduler-screenshot.png';
import JavaScriptQuizSS from '../../images/javascript-quiz-screenshot.png';

function PortfolioExample(props) {
  return (
    <a href={ props.demo } target='_blank' className='screenshot-image'>
      <figure class='image is-16by9'>
        <h3>{ props.alt }</h3>
        <img src={ props.src } alt={ props.alt + ' Screenshot'} />
      </figure>
    </a>
  );
}

export default function Portfolio() {
  return (
    <div className='p-3'>
      <h1>Portfolio</h1>
      <p>Check out some of my projects!</p>
      <div className='columns'>
        <div className='column c1'>
        <PortfolioExample src={ TrackMyDollarsSS } alt='Track My Dollars' demo='https://www.trackmydollars.com' />
        <PortfolioExample src={ ActivityFinderSS } alt='Activity Finder' demo='https://dhoneck.github.io/activity-finder' />
        <PortfolioExample src={ GoalTrackerSS } alt='Goal Tracker' demo='http://express-goal-tracker.herokuapp.com' />
        <PortfolioExample src={ FitnessFocusSS } alt='Fitness Focus' demo='https://fitnessfocus.herokuapp.com' />
      </div>
      <div className='column c2'>
        <PortfolioExample src={ PasswordGeneratorSS } alt='Password Generator' demo='https://dhoneck.github.io/password-generator' />
        <PortfolioExample src={ WeatherCheckerSS } alt='Weather Checker' demo='https://dhoneck.github.io/weather-checker' />
        <PortfolioExample src={ WorkDaySchedulerSS } alt='Work Day Scheduler' demo='https://dhoneck.github.io/work-day-scheduler' />
        <PortfolioExample src={ JavaScriptQuizSS } alt='JavaScript Quiz' demo='https://dhoneck.github.io/javascript-quiz' />
      </div>
     </div>
     <p>Source code and additional projects available on GitHub: <a href='https://github.com/dhoneck' target='_blank' className='my-5'>/dustin-honeck</a></p>
    </div>
  );
}
