import styled from 'styled-components'

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 60px;
  margin-bottom: 20px;

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
