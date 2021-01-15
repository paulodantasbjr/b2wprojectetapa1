import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

const PlanetConteiner = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid;
  margin-bottom: 15px;
`;

const PlanetName = styled.h1``;

const PlanetDetails = styled.div``;

const Population = styled.div``;
const Climate = styled.div``;
const Terrain = styled.div``;

const ButtonConteiner = styled.div``;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  background-color: white;
  color: black;
  border: 2px solid #008cba;
`;

const RandomPlanet = ({ planets }) => {
  const hundleChange = () => {};

  return (
    <>
      <PlanetConteiner>
        <PlanetName>{planets.results[0].name}</PlanetName>
        <PlanetDetails>
          <Population>{planets.results[0].population}</Population>
          <Climate>{planets.results[0].climate}</Climate>
          <Terrain>{planets.results[0].terrain}</Terrain>
        </PlanetDetails>
      </PlanetConteiner>
      <ButtonConteiner>
        <Link href="/Planet">
          <Button onClick={hundleChange}>Next</Button>
        </Link>
      </ButtonConteiner>
    </>
  );
};

RandomPlanet.propTypes = {};

export default RandomPlanet;
