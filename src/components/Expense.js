import React, {useContext} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';

 export const Expense = () => {
   const {transactions} = useContext(GlobalContext);
        const amounts = transactions.map(a=>a.amount);
        const income = amounts.filter(a=>a<0).reduce((acc,curr)=>acc+curr,0);
  
  return (
    <StyledWrapper>
      <div className="card">
        <div className="title">
          <span>
            <svg width={20} fill="currentColor" height={20} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
              </path>
            </svg>
          </span>
          <p className="title-text">
            Expense
          </p>
          {/* <p className="percent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height={20} width={20}>
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
              </path>
            </svg> 20%
          </p> */}
        </div>
        <div className="data">
          <p>
           {Math.abs(income)}
          </p>
          <div className="range">
            <div className="fill">
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    padding: 0.75rem; /* Reduced padding */
    background-color: #fff;
    box-shadow: 0 8px 12px -3px rgba(0, 0, 0, 0.1), 0 3px 5px -2px rgba(0, 0, 0, 0.05);
    max-width: 120px; /* Reduced width */
    border-radius: 16px; /* Adjusted for smaller size */
  }

  .title {
    display: flex;
    align-items: center;
  }

  .title span {
    position: relative;
    padding: 0.4rem; /* Reduced padding */
    background-color: #c73333;
    width: 1.2rem; /* Reduced size */
    height: 1.2rem; /* Reduced size */
    border-radius: 9999px;
  }

  .title span svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    height: 0.8rem; /* Reduced icon size */
  }

  .title-text {
    margin-left: 0.4rem; /* Adjusted margin */
    color: #374151;
    font-size: 14px; /* Reduced font size */
  }

  .percent {
    margin-left: 0.4rem; /* Adjusted margin */
    color:rgb(180, 38, 38);
    font-weight: 600;
    display: flex;
    font-size: 14px; /* Reduced font size */
  }

  .data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .data p {
    margin-top: 0.75rem; /* Reduced spacing */
    margin-bottom: 0.75rem; /* Reduced spacing */
    color: #1F2937;
    font-size: 1.75rem; /* Reduced font size */
    line-height: 2rem; /* Adjusted line height */
    font-weight: 700;
    text-align: left;
  }

  .data .range {
    position: relative;
    background-color: #E5E7EB;
    width: 100%;
    height: 0.4rem; /* Reduced height */
    border-radius: 0.25rem;
  }

  .data .range .fill {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #c73333;
    width: 53%;
    height: 100%;
    border-radius: 0.25rem;
  }
`;


