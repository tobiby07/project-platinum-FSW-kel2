import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ProductDetail from "../views/client/layouts/main/detailProduct";


describe("ProductDetail component", () => {
  const mockProduct = {
    id: 1,
    productName: "Test Product",
    price: 10000,
    productDescription: "This is a test product",
    productImage: "test-product.jpg",
    stock: 10,
  };

  it("renders product detail correctly", async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet("http://localhost:3001/api/products/1").reply(200, mockProduct);

    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Detail Product")).toBeInTheDocument();
      expect(screen.getByText(mockProduct.productName)).toBeInTheDocument();
      expect(screen.getByText(`Rp. ${mockProduct.price.toLocaleString()}`)).toBeInTheDocument();
      expect(screen.getByText(mockProduct.productDescription)).toBeInTheDocument();
      expect(screen.getByText(`Stock: ${mockProduct.stock}`)).toBeInTheDocument();
    });
  });
  
});
