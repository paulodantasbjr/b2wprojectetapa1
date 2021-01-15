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

  max-width: 1100px;
  margin: 0 auto;
`;

const Button = styled.input`
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

  background-color: transparent;
  color: rgba(220, 220, 220 0.5);
  border: 2px solid;

  :hover {
    background-color: rgb(70, 130, 180);
    border: 2px solid rgb(70, 130, 180);
  }
`;

const index = ({ planets }) => {
  const hundleChange = () => {
    return document.location.reload();
  };
  return (
    <LayoutConteiner>
      <RandomPlanet planets={planets} />

      <Button type="button" value="Next" onClick={hundleChange} />
    </LayoutConteiner>
  );
};

index.propTypes = {};

export default index;

export async function getServerSideProps() {
  const id = Math.floor(Math.random() * 60 + 1);
  const res = await fetch(`https://swapi.dev/api/planets/${id}`);

  const planets = await res.json();

  if (!planets) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      planets,
    },
  };
}
