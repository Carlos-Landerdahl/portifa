import styled from 'styled-components'

export const TimelineContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .spanDesc {
    opacity: 0.6;
  }

  .title {
    width: 300px;
    font-size: 3rem;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: ${(props) => props.theme.white};
  }
`
