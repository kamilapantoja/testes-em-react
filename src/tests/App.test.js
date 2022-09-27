import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRout';
import App from '../App';

describe('Requisito 1: Teste o componente <App.js />', () => {
  test('O primeiro Link deve possuir o texto "Home"', () => {
    renderWithRouter(<App />);
    const firstLink = screen.getAllByRole('link');
    expect(firstLink[0]).toHaveTextContent('Home');
  });

  test('O segundo Link deve possuir o texto "About"', () => {
    renderWithRouter(<App />);
    const secondLink = screen.getAllByRole('link');
    expect(secondLink[1]).toHaveTextContent('About');
  });

  test('O terceiro Link deve possuir o texto "Favorite Pokémons"', () => {
    renderWithRouter(<App />);
    const thirdLink = screen.getAllByRole('link');
    expect(thirdLink[2]).toHaveTextContent('Favorite Pokémons');
  });

  test('Verifica se o app é redirecionado para "/", ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('Verifica se o app é redirecionado para "/about", ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: 'About' });
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });

  test('Testa se é redirecionado para /favorites, ao clicar em Favorite Pokemons', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(linkFavoritePokemons);
    expect(history.location.pathname).toBe('/favorites');
  });

  test(`Testa se o app é redirecionado para a página Not Found,
   ao entrar em uma URL desconhecida.`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/page-not-found');

    const notFound = screen.getByRole('heading',
      { name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
