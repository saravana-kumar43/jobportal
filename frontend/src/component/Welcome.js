import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from "@material-ui/core";
import money from '../assets/images/money.png';
import aj from '../assets/images/aj.png';
import cs from '../assets/images/cs.png';
import design from '../assets/images/design.png';
import hc from '../assets/images/hc.png';
import develop from '../assets/images/develop.png';
import market from '../assets/images/market.png';
import  hr  from '../assets/images/hr.png';
import { useNavigate } from 'react-router-dom';



const StyledRectangleCard = styled.div`
  position: relative;
  width: 200px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: flex;
  margin-left:30px;

  &:hover {
    background-color: #3498db; /* Blue color on hover */
  }

  .icon-image {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 8px;
    color: #000; /* White text color */
  }

  p {
    opacity: 0.7;
    color: #000; /* White text color */
  }
`;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #3498db;
  color: #000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin:40px 0px 0px 460px;
  font-size:18px;


  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }
`;

const StyledBody = styled.body`

width:100%;

--r: 56px;
    --c1: #fff 99%,#0000 101%;
    --c2: rgba(240, 248, 255, .438) 99%,#0000 101%;
    --s: calc(var(--r)*.866);
    --g0: radial-gradient(var(--r),var(--c1));
    --g1: radial-gradient(var(--r),var(--c2));
    --f: radial-gradient(var(--r) at calc(100% + var(--s)) 50%,var(--c1));
    --p: radial-gradient(var(--r) at 100% 50%,var(--c2));
    background: var(--f) 0 calc(-5 * var(--r) / 2),var(--f) calc(-2 * var(--s)) calc(var(--r) / 2),var(--p) 0 calc(-2 * var(--r)),var(--g0) var(--s) calc(-5 * var(--r) / 2),var(--g1) var(--s) calc(5 * var(--r) / 2),radial-gradient(var(--r) at 100% 100%,var(--c1)) 0 calc(-1 * var(--r)),radial-gradient(var(--r) at 0% 50%,var(--c1)) 0 calc(-4 * var(--r)),var(--g1) calc(-1 * var(--s)) calc(-7 * var(--r) / 2),var(--g0) calc(-1 * var(--s)) calc(-5 * var(--r) / 2),var(--p) calc(-2 * var(--s)) var(--r),var(--g0) calc(-1 * var(--s)) calc(var(--r) / 2),var(--g1) calc(-1 * var(--s)) calc(var(--r) / -2),var(--g0) 0 calc(-1 * var(--r)),var(--g1) var(--s) calc(var(--r) / -2),var(--g0) var(--s) calc(var(--r) / 2) rgb(240,248,255);
    background-size: calc(4 * var(--s)) calc(6 * var(--r));

`;





const Welcome = (props) => {
  const navigate = useNavigate(); // Move the hook call here

  const handleClick = () => {
    console.log(location);
    // history.push(location);
    navigate("/signup");
  };
  return (
    <StyledBody>
    <div style={{alignItems: "center", justifyContent: "center",marginLeft:"100px"}}>
      <div style={{margin:"50px 0px 50px 300px"}} >
        <Typography  variant="h3">Find your dream job now</Typography>
      </div>

      <div style={{  display: "flex", flexDirection: "row",marginTop:"50px" }}>
        <StyledRectangleCard >
          <img src={money} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Accounting / Finance</h4>
            <p>(86 open positions)</p>
          </div>
        </StyledRectangleCard>

        <StyledRectangleCard >
          <img src={market} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Marketing</h4>
            <p>(2 open positions)</p>
          </div>
        </StyledRectangleCard>

        <StyledRectangleCard >
          <img src={design} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Design</h4>
            <p>(10 open positions)</p>
          </div>
        </StyledRectangleCard>

        <StyledRectangleCard >
          <img src={develop} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Development</h4>
            <p>(202 open positions)</p>
          </div>
        </StyledRectangleCard>
      </div>

      <div style={{  display: "flex", flexDirection: "row",marginTop:"60px" }}>
        <StyledRectangleCard >
          <img src={hr} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Human Resource</h4>
            <p>(6 open positions)</p>
          </div>
        </StyledRectangleCard>

        <StyledRectangleCard >
          <img src={aj} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Automotive Jobs</h4>
            <p>(24 open positions)</p>
          </div>
        </StyledRectangleCard>

        <StyledRectangleCard >
          <img src={cs} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Customer Service</h4>
            <p>(110 open positions)</p>
          </div>
        </StyledRectangleCard>

        <StyledRectangleCard >
          <img src={hc} alt="Icon" className="icon-image" />
          <div style={{ marginLeft: "20px", marginTop: "-20px" }}>
            <h4>Health and Care</h4>
            <p>(42 open positions)</p>
          </div>
        </StyledRectangleCard>
      </div>
      <StyledButton onClick={handleClick}><b>Explore More</b></StyledButton>
    </div>
    </StyledBody>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
