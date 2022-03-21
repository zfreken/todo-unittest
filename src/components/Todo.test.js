/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Todo from './Todo';


describe('Genel Test', () => {

  let button, input;

  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText('Ekle');
    input = screen.getByPlaceholderText('Title giriniz');

  });

  test('Input ve Button var mi testi', () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('varsayilan 3 nesne render edilmelidir', () => {
    const items = screen.getAllByText(/Title/i);
    expect(items.length).toEqual(3)
  });

  test('Inputa girilen item listeye ekleniyor mu', () => {

    //inputa gir
    const name = 'Zafer';
    userEvent.type(input, name);

    //Buttona Bas
    userEvent.click(button);

    //assertion test
    expect(screen.getByText(name)).toBeInTheDocument();

  });
});