import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Requisito 4: Teste o componente <NotFound.js />', () => {
  test(`Verifica se página contém um heading h2 com o 
    texto Page requested not found Crying emoji`, () => {
    render(<NotFound />);
    const textNotFound = screen.getByRole('heading',
      { level: 2, name: 'Page requested not found Crying emoji' });
    expect(textNotFound).toBeInTheDocument();
  });

  test(`Teste se página mostra a imagem 
  https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`, () => {
    render(<NotFound />);
    const imageNotFound = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(imageNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
