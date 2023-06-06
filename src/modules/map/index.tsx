import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import LocationPinIcon from "../../assets/location-pin.png";
import { CountriesData } from "./types";

const Map = (countries: CountriesData) => {
  const { countriesData } = countries;
  const customMarker = L.icon({
    iconUrl: LocationPinIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  return (
    <div>
      {countriesData?.map((country) => (
        <Marker
          icon={customMarker}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default Map;
