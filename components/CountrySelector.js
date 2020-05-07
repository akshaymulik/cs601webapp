import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("IND");
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Currently Showing: {selectedCountry}</h2>
      <select
        style={{ marginBottom: "20px", fontSize: "15px" }}
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.countries.map((country, i) => {
          return (
            <option
              selected={selectedCountry === country.iso3}
              key={i}
              value={country.iso3}
            >
              {country.name}
            </option>
          );
        })}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
