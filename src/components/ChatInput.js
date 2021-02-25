// import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import FormatBoldOutlinedIcon from '@material-ui/icons/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@material-ui/icons/FormatItalicOutlined';
import StrikethroughSOutlinedIcon from '@material-ui/icons/StrikethroughSOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatInput() {
  return (
    <ChatContainer>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          
        </form>
        <ButtonContainer>
          <Shortcut>
            <ShortcutButton>
              <FlashOnOutlinedIcon />
            </ShortcutButton>
          </Shortcut>
          <FormattingButtons>
            <AButton>
              <FormatBoldOutlinedIcon />
            </AButton>
            <AButton>
              <FormatItalicOutlinedIcon />
            </AButton>
            <AButton>
              <StrikethroughSOutlinedIcon />
            </AButton>
            <AButton>
              <CodeOutlinedIcon/>
            </AButton>
            <AButton>
              <LinkIcon />
            </AButton>
            <AButton>
              <FormatListNumberedIcon />
            </AButton>
            <AButton>
              <FormatListBulletedIcon />
            </AButton>
            
          </FormattingButtons>
          <LinkButtons>
            <BButton>
              <EmojiEmotionsIcon />
            </BButton>
            <BButton>
              <AttachFileIcon />
            </BButton>
            <SendButton>
              <Send />
            </SendButton>
          </LinkButtons>
        </ButtonContainer>
      </InputContainer>
    </ChatContainer>
  )
}

export default ChatInput


const ChatContainer = styled.div`
  padding-left 20px;
  padding-right 20px;
  padding-bottom 24px;
  background: #fcfcf7;
`

const InputContainer = styled.div`
  border: 1px solid #8D8D8E;
  border-radius: 4px;
  height: 85px;
  flex-template-rows: 42px auto;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    
    border-bottom: 1px solid #8D8D8e;
    
    input{
      flex 1;
      border: none;
      font-size: 13px;
      background: transparent;
    }
    input:focus{
        outline: none;
      }
  }
`

const Send = styled(SendIcon)`
  color: #D9D9D9;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f2f2f2;
  border-radius: 4px;
`

const FormattingButtons = styled.div`
  display: flex;
  justify-content:flex-start;
  width: 50%
`

const AButton = styled.div`
  background: #c7c7c7;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  margin-left: 12px;
  margin-right: 0;
  cursor: pointer;
  .MuiSvgIcon-root{
    width: 18px;
    color: #424242;
  }

  :hover {
    background: #b3b3b3;
  }
`

const LinkButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%
`
const BButton = styled.div`
  background: #c7c7c7;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  margin-right: 12px;
  margin-left: 0;
  cursor: pointer;
  .MuiSvgIcon-root{
    width: 18px;
    color: #424242;
  }

  :hover {
    background: #b3b3b3;
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
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
  .MuiSvgIcon-root{
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`
const Shortcut = styled.div`
  border-right: 1px solid #8D8D8E;
`
const ShortcutButton = styled.div`
  background: #fce979;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  .MuiSvgIcon-root{
    width: 18px;
    color: #424242;
  }

  :hover {
    background: #decd6d;
  }
`