import PropTypes from 'prop-types';
import styled from 'styled-components';
import RandomPlanet from './RandomPlanet';

const LayoutConteiner = styled.div`
  padding: 24px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;
`;

const index = ({ planets }) => {
  console.log(planets);
  return (
    <LayoutConteiner>
      <RandomPlanet planets={planets} />
    </LayoutConteiner>
  );
};

index.propTypes = {};

export default index;

export const getStaticProps = async () => {
  const res = await fetch('https://swapi.dev/api/planets');

  const planets = await res.json();

  return {
    props: {
      planets,
    },
  };
};
