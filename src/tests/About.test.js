import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRout';
import About from '../components/About';

describe('Requisito 2: Teste o componente <About.js />', () => {
  test('Verifica se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const infoAbout = screen.getByRole('heading', { level: 2,
      name: /About Pokédex/i });
    expect(infoAbout).toBeInTheDocument();
  });

  test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const paragrafosPokemon = screen.getAllByText(/Pokémons/i);
    expect(paragrafosPokemon).toHaveLength(2);
  });

  test(`Teste se a página contém a seguinte imagem de uma Pokédex: 
  https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`, () => {
    renderWithRouter(<About />);
    const imgPokédex = screen.getByRole('img');
    expect(imgPokédex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
