import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRout';
import App from '../App';

// const paragrafoDetalhes = 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat';

describe('Requisito 7: Teste o componente <PokemonDetails.js', () => {
  test(`Verifica se as informações detalhadas do Pokémon selecionado 
    são mostradas na tela`, () => {
    renderWithRouter(<App />);
    const detalhesPokemon = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detalhesPokemon);

    const nomePokemonDetalhes = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(nomePokemonDetalhes).toBeInTheDocument();
    expect(detalhesPokemon).not.toBeInTheDocument();

    const sumario = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(sumario).toBeInTheDocument();

    const paragrafo = screen.getByText(/This intelligent Pokémon/i);
    expect(paragrafo).toBeInTheDocument();
  });
  
  test(`Teste se existe na página uma seção com os mapas contendo as 
  localizações do pokémon`, () => {
    renderWithRouter(<App />);
    const mapaLocalizacao = screen.getByRole('heading', { level:2, name:'Game Locations of Pikachu' });
    expect(mapaLocalizacao).toBeInTheDocument();
    // Todas as localizações do Pokémon devem ser mostradas na seção de detalhes
    const 
  });
});
