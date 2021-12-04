import moment from "moment";

const SearchResults = ({ results }) => {
    return (
        <div className="main">
            {(typeof results.weather != 'undefined') ? (
                <div>
                    <div className="top">
                        <p className="header">{results.name}</p>
                    </div>
                    <div className="flex">
                        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                        <p className="description">{results.weather[0].description}</p>
                    </div>
                    <div className="flex">
                        <p className="temp">Temprature: {((results.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)}  &deg;F</p>
                        <p className="temp">Humidity: {results.main.humidity} %</p>
                    </div>
                    <div className="flex">
                        <p className="sunrise-sunset">Sunrise: {new Date(results.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                        <p className="sunrise-sunset">Sunset: {new Date(results.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
};

export default SearchResults;