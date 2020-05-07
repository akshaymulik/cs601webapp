import styled from "styled-components";
import useStats from "../utils/useStats";

const StatGrid = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 696px) {
    flex-direction: column;
    text-align: center;
  }
`;
const StatBlock = styled.div`
  width: 28%;
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 2rem;
  @media screen and (max-width: 696px) {
    width: auto;
  }
`;

const Orange = {
  backgroundColor: "#ff944d"
};
const Red = {
  backgroundColor: "#ff6666"
};
const Green = {
  backgroundColor: "#00ff00"
};

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  // console.log(stats, loading, error);
  if (loading) return <h1>Loading ...</h1>;
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <StatGrid>
          <StatBlock style={Orange}>
            <h3>Confirmed:</h3>
            <span>{stats.confirmed ? stats.confirmed.value : "NA"}</span>
          </StatBlock>
          <StatBlock style={Red}>
            <h3>Deaths:</h3>
            <span>{stats.deaths ? stats.deaths.value : "NA"}</span>
          </StatBlock>
          <StatBlock style={Green}>
            <h3>Recovered:</h3>
            <span>{stats.recovered ? stats.recovered.value : "NA"}</span>
          </StatBlock>
        </StatGrid>
      )}
    </>
  );
}
