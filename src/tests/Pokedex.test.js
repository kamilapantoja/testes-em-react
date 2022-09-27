import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRout';
import App from '../App';

describe('Requisito 5: Teste o componente <Pokedex.js />', () => {
  test(`Verifica se página contém um heading h2 com o 
    texto Encountered pokémons`, () => {
    renderWithRouter(<App />);
    const pokemonsEncontrados = screen.getByRole('heading',
      { level: 2, name: 'Encountered pokémons' });
    expect(pokemonsEncontrados).toBeInTheDocument();
  });

  test(`Verifica se é exibido o próximo Pokémon da lista quando 
  o botão Próximo pokémon é clicado`, () => {
    renderWithRouter(<App />);
    const clickNextPokemon = screen.getByTestId('next-pokemon');
    expect(clickNextPokemon).toBeInTheDocument();
  });

  test('Verifica se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const oncePokemon = screen.getAllByTestId('next-pokemon');
    expect(oncePokemon.length).toBe(1);
  });

  test('Verifica se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const tiposPokemons = 7;
    const filtroTiposPokemons = screen.getAllByTestId('pokemon-type-button');
    expect(filtroTiposPokemons.length).toBe(tiposPokemons);

    const pokemonEletric = screen.getByRole('button', { name: 'Electric' });
    expect(pokemonEletric).toBeInTheDocument();

    const pokemonFire = screen.getByRole('button', { name: 'Fire' });
    expect(pokemonFire).toBeInTheDocument();

    const pokemonBug = screen.getByRole('button', { name: 'Bug' });
    expect(pokemonBug).toBeInTheDocument();

    const pokemonPoison = screen.getByRole('button', { name: 'Poison' });
    expect(pokemonPoison).toBeInTheDocument();

    const pokemonPsychic = screen.getByRole('button', { name: 'Psychic' });
    expect(pokemonPsychic).toBeInTheDocument();

    const pokemonNormal = screen.getByRole('button', { name: 'Normal' });
    expect(pokemonNormal).toBeInTheDocument();

    const pokemonDragon = screen.getByRole('button', { name: 'Dragon' });
    expect(pokemonDragon).toBeInTheDocument();
  });

  test('Verifica se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const allPokemons = screen.getByRole('button', { name: /All/i });
    expect(allPokemons).toBeInTheDocument();
    userEvent.click(allPokemons);
    const pokemonInicial = screen.getByText(/pikachu/i);
    expect(pokemonInicial).toBeInTheDocument();
  });
});
