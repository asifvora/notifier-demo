import React from 'react';
import styled from 'styled-components';

export const StyledRealTimeAlert = styled.div`
  color: #454545;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 5px 20px 5px;
  .row {
    display: flex;
    justify-content: space-between;
  }
  .row-1 {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
  }
  .alerts {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
  }
  .time {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .message {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const RealTimeAlert = props => {
  const { data: { message } } = props;

  return (
    <StyledRealTimeAlert>
      <div className="row">
        <div className="alerts">Alerts</div>
      </div>
      <div className="row-1">
        <div className="message">{message}</div>
      </div>
    </StyledRealTimeAlert>
  );
};
