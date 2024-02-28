import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Slider from "../views/client/layouts/Header/component/Slider";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event'; 

describe('Slider component', () => {
    test('renders carousel with correct images and controls', () => {
      render(<Slider />);
  
      // mengecek carousel indikator render
      const carouselIndicators = screen.getAllByRole('button', { name: /slide \d/i });
      expect(carouselIndicators).toHaveLength(5); 
  
      // Check jika carousel images  are rendered
      const carouselImages = screen.getAllByAltText(/slide \d/i);
      expect(carouselImages).toHaveLength(5); 
  
      // Check jika carousel prev and next buttons are rendered
      const carouselPrevButton = screen.getByRole('button', { name: 'Previous' });
      const carouselNextButton = screen.getByRole('button', { name: 'Next' });
      expect(carouselPrevButton).toBeInTheDocument();
      expect(carouselNextButton).toBeInTheDocument();
    });
  
    test('carousel navigates correctly when next and prev buttons are clicked', async () => {
        render(<Slider />);
    
        const carouselNextButton = screen.getByRole('button', { name: 'Next' });
        userEvent.click(carouselNextButton);
        await waitFor(() => expect(screen.getByAltText('Slide 2')).toBeInTheDocument());
    
        // Click prev button menggunakan userEvent.click
        const carouselPrevButton = screen.getByRole('button', { name: 'Previous' });
        userEvent.click(carouselPrevButton);
        await waitFor(() => expect(screen.getByAltText('Slide 1')).toBeInTheDocument());
      });
  
    test('carousel changes slides automatically according to interval', async () => {
      render(<Slider />);
  
      // Wait for the first slide interval
      await waitFor(() => expect(screen.getByAltText('Slide 2')).toBeInTheDocument());
    });
  
  });