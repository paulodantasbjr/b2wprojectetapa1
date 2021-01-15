import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlanetConteiner = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid;
  margin-bottom: 15px;
`;

const PlanetTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid;
`;

const PlanetName = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

const PlanetDetails = styled.div`
  padding: 24px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 300px;

  margin: 20px auto;
`;

const Population = styled.p`
  font-size: 24px;
  font-weight: bolder;
`;
const Climate = styled.p`
  font-size: 24px;
  font-weight: bolder;
`;
const Terrain = styled.p`
  font-size: 24px;
  font-weight: bolder;
`;

const RandomPlanet = ({ planets }) => {
  return (
    <>
      <PlanetConteiner>
        <PlanetTitle>
          <PlanetName>{planets.name}</PlanetName>
        </PlanetTitle>
        <PlanetDetails>
          <Population>POPULATION: {planets.population}</Population>
          <Climate>CLIMATE: {planets.climate}</Climate>
          <Terrain>TERRAIN: {planets.terrain}</Terrain>
        </PlanetDetails>
      </PlanetConteiner>
    </>
  );
};

RandomPlanet.propTypes = {};

export default RandomPlanet;
