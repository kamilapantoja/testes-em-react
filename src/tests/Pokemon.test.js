import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

// refazendo alguns testes porque tem um djabo dum mutante que não quer morrer T.T
describe('Requisito 6: Teste o componente <Pokemon.js />', () => {
  test(`Verifica se é renderizado um card com as informações 
  de determinado pokémon.`, () => {
    renderWithRouter(<App />);
    const namePokemon = screen.getByTestId('pokemon-name');
    const tipoPokemon = screen.getByTestId('pokemon-type');
    const pesoPokemon = screen.getByTestId('pokemon-weight');
    const imgPokemon = screen.getByRole('img', { name: 'Pikachu sprite' });

    expect(namePokemon).toHaveTextContent('Pikachu');
    expect(tipoPokemon).toHaveTextContent('Electric');
    expect(pesoPokemon).toHaveTextContent('Average weight: 6.0 kg');
    expect(imgPokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test(`Verifica se o card do Pokémon indicado na Pokédex contém um link de navegação 
  para exibir detalhes deste Pokémon.`, () => {
    renderWithRouter(<App />);
    const detalhesPokemon = screen.getByRole('link', { name: /More details/i });
    expect(detalhesPokemon).toHaveAttribute('href', '/pokemons/25');
  });

  test(`Verifica se ao clicar no link de navegação do Pokémon, é feito o 
  redirecionamento da aplicação para a página de detalhes de Pokémon.`, () => {
    renderWithRouter(<App />);
    const detalhesPokemon = screen.getByRole('link', { name: /More details/i });
    userEvent.click(detalhesPokemon);
    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).toHaveTextContent('Pikachu');
  });

  test('Verifica se a URL exibida no navegador muda', () => {
    const { history } = renderWithRouter(<App />);
    const detalhesPokemon = screen
      .getByRole('link', { name: /More details/i });
    userEvent.click(detalhesPokemon);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Verifica se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const detalhesPokemon = screen
      .getByRole('link', { name: /More details/i });
    userEvent.click(detalhesPokemon);
    const favoriteButton = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favoriteButton);
    const estrelaPokemon = screen.getByAltText('Pikachu is marked as favorite');
    expect(estrelaPokemon).toHaveAttribute('src', '/star-icon.svg');
  });
});
