
import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import StarOutlineIcon from '@material-ui/icons/StarOutline';

// import { Container } from '@material-ui/core';
// import Header from './Header';

function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            #clever
            <ChatIconSmall>
              <StarOutlineIcon style={{ fontSize: 'medium' }} />
            </ChatIconSmall>
          </ChannelName>
          <ChannelInfo>
            Company-wide anouncements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>
            Details
          </div>
          <Info />
          
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
    // <Header>
    //   <Channel>
    //     <Left>
    //       <ChannelName>
    //         #clever
    //         <ChatIconSmall>
    //           <StarOutlineIcon style={{ fontSize: 'medium' }}/>
    //         </ChatIconSmall>
    //       </ChannelName>
    //       <ChannelInfo>
    //         Company-wide anouncements and work-based matters
    //     </ChannelInfo>
    //     </Left>
        
    //     <ChannelDetails>
    //       <div>
    //         Details
    //       </div>
    //       <InfoOutlinedIcon />
    //     </ChannelDetails>
    //   </Channel>
    // </Header>
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom 1px solid rgba(83, 39, 83, .13);
  justify-content: space-between;
`
const MessageContainer = styled.div`
  background: #fcfcfc;
`

const Channel = styled.div`
`

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`

const ChannelName = styled.div`
  font-weight: 700;
  display: flex;
`

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`

// const Header = styled.div`
//   padding-top: 5px;
//   height: 50px;
//   border-bottom: 1px solid #999999;
// `

// const Channel = styled.div`
//   margin-left: 19px;
//   display: flex;
//   justify-content: space-between;
//   `

// const ChannelName = styled.div`
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   margin-left: 5px;
// `

// const ChannelInfo = styled.div`
//   color: #707070;
//   font-size: 0.8rem;
//   padding-top: 3px;
//   margin-left: 5px;
// `

// const ChannelDetails = styled.div`
//   color: #707070;  
//   margin-right: 19px;
//   display: flex;
//   align-items: center;
//   div {
//     margin-right: 5px;
//   }
// `
// const Left = styled.div`
// `

const ChatIconSmall = styled.div`
   display:flex;
   align-itmes: center;
 `