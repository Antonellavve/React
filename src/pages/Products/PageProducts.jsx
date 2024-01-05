import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  ContainerProductsStyled,
  Form,
  TxtContainerStyled,
  ImgContainer
} from "../Products/ProductsStyled";
import prueba from "../../assets/prueba.jpg";
import Submit from "../../components/UI/Submit/Submit";

export const TxtContainer = ({ children }) => {
  return <TxtContainerStyled>{children}</TxtContainerStyled>;
};

const PageProducts = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const { title, category, price } = products || [];

  return (
    <ContainerProductsStyled>
      <Form
        style={{
          position: "relative",
        }}
      >
        <Link
          to={"/products"}
          style={{
            position: "absolute",
            top: "2.5rem",
            scale: "1.5",
          }}
        >
          <Submit >
            Agregar
          </Submit>
        </Link>
        <TxtContainerStyled>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title} 
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
          />
        </TxtContainerStyled>
        {/* <ImgContainer>
          <img
            src={prueba}
            alt="imagen del producto"
            style={{
              objectFit: "scale-down",
              backgroundColor: "white",
              objectPosition: "center",
            }}
          />
        </ImgContainer> */}
      </Form>
    </ContainerProductsStyled>
  );
};

export default PageProducts;
