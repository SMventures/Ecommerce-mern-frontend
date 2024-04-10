import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SlideComponent.css";

const Container = styled(Box)`
  display: flex;
  padding: 10px;
`;

const ColumnContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 0 10px;
`;

const WhiteContainer = styled(ColumnContainer)`
  background: #ffffff;
  padding: 20px;
  position: relative; /* Add position relative */
`;
const BlueCircle = styled(Box)`
  width: 24px; /* Adjust size as needed */
  height: 24px; /* Adjust size as needed */
  border-radius: 50%;
  background-color: blue; /* Set the background color of the circle to blue */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

const CardContainer = styled(Container)`
  gap: 20px;
  padding-top: 20px;
`;

const Card = styled(Box)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(50% - 10px);
  padding: 10px;
`;

const SectionHeading = styled(Typography)`
  && {
    font-size: 1.5rem;
    font-weight: bold;
    color: #374151;
    margin-bottom: 10px;
  }
`;

const LeftHalfContainer = styled(ColumnContainer)``;
const CenterContainer = styled(ColumnContainer)``;
const RightHalfContainer = styled(ColumnContainer)``;

const App = ({ leftData, centerData, rightData, leftSection, centerSection, rightSection }) => {
  
  const [leftCategoryPage, setLeftCategoryPage] = useState('');
  const [centerCategoryPage, setCenterCategoryPage] = useState('');
  const [rightCategoryPage, setRightCategoryPage] = useState('');

  // Fetch category page data for each section
  useEffect(() => {
    getCategoryPage('leftCategory');
    getCategoryPage('centerCategory');
    getCategoryPage('rightCategory');
  }, []);

  const getCategoryPage = async (category) => {
    const response = await fetch(`http://localhost:5454/api/products?category=${category}`);
    const data = await response.json();

    // Set the specific category page state based on the category
    switch (category) {
      case 'leftCategory':
        setLeftCategoryPage(data.content);
        break;
      case 'centerCategory':
        setCenterCategoryPage(data.content);
        break;
      case 'rightCategory':
        setRightCategoryPage(data.content);
        break;
      default:
        break;
    }
  };
  // Render the component after fetching data
  if (!leftCategoryPage || !centerCategoryPage || !rightCategoryPage) {
    return null;
  }


  if (!leftData || !Array.isArray(leftData) || leftData.length === 0 ||
    !centerData || !Array.isArray(centerData) || centerData.length === 0 ||
    !rightData || !Array.isArray(rightData) || rightData.length === 0) {
    return null;
  }

  const leftFirstRowData = leftData.slice(0, 2);
  const leftSecondRowData = leftData.slice(2, 4);

  const centerFirstRowData = centerData.slice(0, 2);
  const centerSecondRowData = centerData.slice(2, 4);

  const rightFirstRowData = rightData.slice(0, 2);
  const rightSecondRowData = rightData.slice(2, 4);

  return (
    <Container>
      <LeftHalfContainer>
        <WhiteContainer>
          <BlueCircle style={{ position: "relative" }}>
          <Link to={leftCategoryPage}>
                        <svg width="16" height="16">
              <path
                d="m6.627 3.749 5 5-5 5"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            </Link>
          </BlueCircle>

          <SectionHeading variant="h2">{leftSection}</SectionHeading>
          <CardContainer>
            {leftFirstRowData.map(product => (
              <Card key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="h-[10rem] w-[8rem]">
                    <img
                      className="object-cover object-top w-full h-full"
                      src={product?.image || product?.imageUrl}
                      alt={product?.title}
                    />
                  </div>
                </Link>
                <div className="p-2 items-center">
                  <h3 className="text-base items-center font-medium font-weight-600 text-gray-900">{product?.title}</h3>
                  <div className="flex items-center space-x-1 ">
                    <p className="font-semibold text-sm">₹{product?.discountedPrice}</p>
                    <p className="opacity-50 line-through text-sm">₹{product?.price}</p>
                    <p className="text-green-600 font-semibold text-sm">{product?.discountPersent}% off</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardContainer>
          <CardContainer>
            {leftSecondRowData.map(product => (
              <Card key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="h-[10rem] w-[8rem]">
                    <img
                      className="object-cover object-top w-full h-full"
                      src={product?.image || product?.imageUrl}
                      alt={product?.title}
                    />
                  </div>
                </Link>
                <div className="p-2 items-center">
                  <h3 className="text-base items-center font-medium font-weight-600 text-gray-900">{product?.title}</h3>
                  <div className="flex items-center space-x-1 ">
                    <p className="font-semibold text-sm">₹{product?.discountedPrice}</p>
                    <p className="opacity-50 line-through text-sm">₹{product?.price}</p>
                    <p className="text-green-600 font-semibold text-sm">{product?.discountPersent}% off</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardContainer>
        </WhiteContainer>
      </LeftHalfContainer>

      <CenterContainer>
        <WhiteContainer>
        <BlueCircle style={{ position: 'relative' }}> {/* Added relative positioning */}
        <Link to={centerCategoryPage}>
  <svg width="16" height="16">
    <path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </Link>
</BlueCircle>
          <SectionHeading variant="h2">{centerSection}</SectionHeading>
          <CardContainer>
            {centerFirstRowData.map(product => (
              <Card key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="h-[10rem] w-[8rem]">
                    <img
                      className="object-contain object-top w-full h-full"
                      src={product?.image || product?.imageUrl}
                      alt={product?.title}
                    />
                  </div>
                </Link>
                <div className="p-2 items-center">
                  <h3 className="text-base items-center font-medium font-weight-600 text-gray-900">
                    {product?.title}
                  </h3>
                  <div className='flex items-center space-x-1 '>
                    <p className='font-semibold text-sm'>₹{product?.discountedPrice}</p>
                    <p className='opacity-50 line-through text-sm'>₹{product?.price}</p>
                    <p className="text-green-600 font-semibold text-sm">{product?.discountPersent}% off</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardContainer>
          <CardContainer>
            {centerSecondRowData.map(product => (
              <Card key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="h-[10rem] w-[8rem]">
                    <img
                      className="object-contain object-top w-full h-full"
                      src={product?.image || product?.imageUrl}
                      alt={product?.title}
                    />
                  </div>
                </Link>
                <div className="p-2 items-center">
                  <h3 className="text-base items-center font-medium font-weight-600 text-gray-900">
                    {product?.title}
                  </h3>
                  <div className='flex items-center space-x-1 '>
                    <p className='font-semibold text-sm'>₹{product?.discountedPrice}</p>
                    <p className='opacity-50 line-through text-sm'>₹{product?.price}</p>
                    <p className="text-green-600 font-semibold text-sm">{product?.discountPersent}% off</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardContainer>
        </WhiteContainer>
      </CenterContainer>

      <RightHalfContainer>
        <WhiteContainer>
        <BlueCircle style={{ position: 'relative' }}> {/* Added relative positioning */}
        <Link to={rightCategoryPage}>

  <svg width="16" height="16">
    <path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </Link>
</BlueCircle>
          <SectionHeading variant="h2">{rightSection}</SectionHeading>
          <CardContainer>
            {rightFirstRowData.map(product => (
              <Card key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="h-[10rem] w-[8rem]">
                    <img
                      className="object-cover object-top w-full h-full"
                      src={product?.image || product?.imageUrl}
                      alt={product?.title}
                    />
                  </div>
                </Link>
                <div className="p-2 items-center">
                  <h3 className="text-base items-center font-medium font-weight-600 text-gray-900">
                    {product?.title}
                  </h3>
                  <div className='flex items-center space-x-1 '>
                    <p className='font-semibold text-sm'>₹{product?.discountedPrice}</p>
                    <p className='opacity-50 line-through text-sm'>₹{product?.price}</p>
                    <p className="text-green-600 font-semibold text-sm">{product?.discountPersent}% off</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardContainer>
          <CardContainer>
            {rightSecondRowData.map(product => (
              <Card key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="h-[10rem] w-[8rem]">
                    <img
                      className="object-contain object-top w-full h-full"
                      src={product?.image || product?.imageUrl}
                      alt={product?.title}
                    />
                  </div>
                </Link>
                <div className="p-2 items-center">
                  <h3 className="text-base items-center font-medium font-weight-600 text-gray-900">
                    {product?.title}
                  </h3>
                  <div className='flex items-center space-x-1 '>
                    <p className='font-semibold text-sm'>₹{product?.discountedPrice}</p>
                    <p className='opacity-50 line-through text-sm'>₹{product?.price}</p>
                    <p className="text-green-600 font-semibold text-sm">{product?.discountPersent}% off</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardContainer>
        </WhiteContainer>
      </RightHalfContainer>
    </Container>
  );
};

export default App;
