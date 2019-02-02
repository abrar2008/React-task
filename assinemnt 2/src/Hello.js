import React from 'react';



const athleteData = [
     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
 ];

const results = athleteData.filter(athlete=>athlete.income.toString().length>7).map(athlete => {
  const {athlete, team, income} = athlete;
  return <li>{athlete}{team}{income}</li>;
});

console.log(results);



export default ({ root }) => <h1>{results} </h1>;