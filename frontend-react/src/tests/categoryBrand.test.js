import { render, screen } from '@testing-library/react';
import CategoryPage from '../views/client/layouts/Header/component/Category';
import "@testing-library/jest-dom/extend-expect";

describe('CategoryPage Component', () => {
  test('renders all brand images correctly', () => {
    render(<CategoryPage />);
    
    const adidasImage = screen.getByAltText('Adidas');
    const nbImage = screen.getByAltText('Nb');
    const nikeImage = screen.getByAltText('Nike');
    const sepatuWanitaImage = screen.getByAltText('SepatuWanita');
    const leagueImage = screen.getByAltText('League');
    const converseImage = screen.getByAltText('Converse');
    const vansImage = screen.getByAltText('Vans');
    const sepatuPriaImage = screen.getByAltText('SepatuPria');

    expect(adidasImage).toBeInTheDocument();
    expect(nbImage).toBeInTheDocument();
    expect(nikeImage).toBeInTheDocument();
    expect(sepatuWanitaImage).toBeInTheDocument();
    expect(leagueImage).toBeInTheDocument();
    expect(converseImage).toBeInTheDocument();
    expect(vansImage).toBeInTheDocument();
    expect(sepatuPriaImage).toBeInTheDocument();
  });

  test('brand images have correct links', () => {
    render(<CategoryPage />);
    
    const adidasImage = screen.getByAltText('Adidas');
    const nbImage = screen.getByAltText('Nb');
    const nikeImage = screen.getByAltText('Nike');


    expect(adidasImage.parentElement).toHaveAttribute('href', '/product/Adidas');
    expect(nbImage.parentElement).toHaveAttribute('href', '/product/New Balance (NB)');
    expect(nikeImage.parentElement).toHaveAttribute('href', '/product/Nike');
  
  });
});
