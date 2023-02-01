import styled from "styled-components";
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://student-json-api.lidemy.me/comments";

const Loding = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 30px;
`

const Page = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
`;

const MessageForm = styled.form`
  margin-top: 16px;
`;

const MessageTextArea = styled.textarea`
  display: block;
  width: 100%;
`;

const SubmitButton = styled.button`
  margin-top: 8px;
`;

const ErrorMessage = styled.div`
  margin-top: 16px;
  color: "red";
`;

const MessageList = styled.div`
  margin-top: 16px;
`;

const MessageContainer = styled.div`
  border: 1px solid black;
  padding: 8px 16px;
  border-radius: 8px;
  & + & {
    margin-top: 8px;
  }
`;

const MessageHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 4px;
`;

const MessageAuthor = styled.div`
color: 'red'
font-size: 14px;
`;

const MessageTime = styled.div``;

const MessageBody = styled.div`
  margin-top: 16px;
  font-size: 16px;
`;

function Message({ author, time, children }) {
  return (
    <MessageContainer>
      <MessageHead>
        <MessageAuthor>{author}</MessageAuthor>
        <MessageTime>{time}</MessageTime>
      </MessageHead>
      <MessageBody>{children}</MessageBody>
    </MessageContainer>
  );
}

function App() {
  const [messages, setMessages] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [value, setValue] = useState('');
  const [isLoadingPostMessage, setIsLoadingPostMessage] = useState(false)

  const fetchMessage = () => {
   return fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        setApiError(err.message);
      });
  }

  const hendleTextareaChange = (e) => {
    setValue(e.target.value);
  };

  const hendleFormSubmit = (e) => {
    e.preventDefault();
    if (isLoadingPostMessage) {
      return
    }
    setIsLoadingPostMessage(true);  
    fetch("https://student-json-api.lidemy.me/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nickname: "World",
        body: value,
      }),
    })
      .then((res) => res.json())
      .then((data) =>{fetchMessage();
        setIsLoadingPostMessage(false);
        setValue('');});
  };

  useEffect(() => {
    fetchMessage()
  }, []);
  return (
    <Page>
      {isLoadingPostMessage && <Loding>Loding...</Loding>}
      <Title>留言板</Title>
      <MessageForm onSubmit={hendleFormSubmit}>
        <MessageTextArea
          rows={10}
          value={value}
          onChange={hendleTextareaChange}
        />
        <SubmitButton>送出</SubmitButton>
      </MessageForm>
      {apiError && (
        <ErrorMessage>Something went wrong. {apiError.tostring()}</ErrorMessage>
      )}
      <MessageList>
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              author={message.nickname}
              time={new Date(message.createdAt).toLocaleString()}
            >
              {message.body}
            </Message>
          ))}
      </MessageList>
    </Page>
  );
}

export default App;
