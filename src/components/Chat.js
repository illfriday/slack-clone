
import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
  return (
    <Header>
      <Channel>
        <Left>
          <ChannelName>
            #clever
            <ChatIconSmall>
              <StarOutlineIcon style={{ fontSize: 'medium' }}/>
            </ChatIconSmall>
          </ChannelName>
          <ChannelInfo>
            Company-wide anouncements and work-based matters
        </ChannelInfo>
        </Left>
        
        <ChannelDetails>
          <div>
            Details
          </div>
          <InfoOutlinedIcon />
        </ChannelDetails>
      </Channel>
      

      
    </Header>
  )
}

export default Chat

const Header = styled.div`
  padding-top: 5px;
  height: 50px;
  border-bottom: 1px solid #999999;
`

const Channel = styled.div`
  margin-left: 19px;
  display: flex;
  justify-content: space-between;
  `

const ChannelName = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 5px;
`

const ChannelInfo = styled.div`
  color: #707070;
  font-size: 0.8rem;
  padding-top: 3px;
  margin-left: 5px;
`

const ChannelDetails = styled.div`
  color: #707070;  
  margin-right: 19px;
  display: flex;
  align-items: center;
  div {
    margin-right: 5px;
  }
`
const Left = styled.div`
`

const ChatIconSmall = styled.div`

  display:flex;
  align-itmes: center;
`