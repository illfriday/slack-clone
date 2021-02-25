import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
  return (
    <ChatContainer>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          <SendButton>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
    </ChatContainer>
  )
}

export default ChatInput


const ChatContainer = styled.div`
  padding-left 20px;
  padding-rightt 20px;
  padding-bottom 24px;
`

const InputContainer = styled.div`
  border: 1px solid #8D8D8E;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    
    input{
      flex 1;
      border: none;
      font-size: 13px;
    }
    input:focus{
        outline: none;
      }
  }
`

const SendButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;

  .MuiSvgIcon-root{
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`

const Send = styled(SendIcon)`
  color: #D9D9D9;
`