import React from "react";
import styled from "styled-components";

const ImagePreview = ({ imageUrl }) => {
  return (
    <StyledImagePreview>
      {imageUrl ? (
        <img src={imageUrl} alt="Product Preview" />
      ) : (
        <p>No image uploaded</p>
      )}
    </StyledImagePreview>
  );
};

const StyledImagePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;

  img {
    max-width: 100%;
    max-height: 300px;
  }
`;

export default ImagePreview;
