import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
  return (
    <BigContainer>
      <Container>
        <UserAvatar>
          <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" />
        </UserAvatar>
        <MessageContent>
          <Name>
            Juanita Evans
          <span>2/23/2021 1:22:55PM</span>
          </Name>
          <Text>
            I'm absolutely killing it!
        </Text>
        </MessageContent>
      </Container>
      <Container>
        <UserAvatar>
          <img src="https://randomuser.me/api/portraits/men/82.jpg" alt="" />
        </UserAvatar>
        <MessageContent>
          <Name>
            Alfred Graham
          <span>2/23/2021 10:17:41PM</span>
          </Name>
          <Text>
            don't be so hasty, Juanita!
        </Text>
        </MessageContent>
      </Container>
    </BigContainer>
    
  )
}

export default ChatMessage

const BigContainer = styled.div``

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  :hover {
    background: #e6e6e6;
  }
`

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`

const MessageContent = styled.div`
  display:flex;
  flex-direction: column;
  
`

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span{
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,97,97);
    font-size: 13px;
  }
`

const Text = styled.span`
`