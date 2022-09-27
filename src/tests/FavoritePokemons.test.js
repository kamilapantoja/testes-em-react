import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRout';

describe('Requisito 3: Teste o componente <FavoritePokemons.js />', () => {
  test(`Verifica se é exibido na tela a mensagem No favorite pokemon found, 
    se a pessoa não tiver pokémons favoritos.`, () => {
    renderWithRouter(<App />);
    const FavoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(FavoritePokemons);
    const messageNoFavoritePokemons = screen.getByText('No favorite pokemon found');
    expect(messageNoFavoritePokemons).toBeInTheDocument();
  });

  test('Verifica se é exibido todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);
    const pokemonDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(pokemonDetails);
    const checkboxFavorite = screen.getByRole('checkbox',
      { name: 'Pokémon favoritado?' });
    userEvent.click(checkboxFavorite);
    const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(linkFavorites);
    const cardFavorite = screen.getByRole('link', { name: 'More details' });
    expect(cardFavorite).toBeInTheDocument();
  });
});
