export interface Icons {
    [icon: string]: JSX.Element;
  }
  export const icons: Icons = {
    Clouds: <i className='fas fa-cloud w-icon'></i>,
    Thunderstorm: <i className='fas fa-bolt w-icon'></i>,
    Drizzle: <i className='fas fa-cloud-rain w-icon'></i>,
    Rain: <i className='fas fa-cloud-showers-heavy w-icon'></i>,
    Snow: <i className='far fa-snowflake w-icon'></i>,
    Fog: <i className='fas fa-smog w-icon'></i>,
    Clear: <i className='fas fa-sun w-icon'></i>,
  };
  