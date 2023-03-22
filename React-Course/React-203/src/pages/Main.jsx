import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'
import App from './App'
// import './index.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  padding-top: 30px;
`

const Title = styled.h1`
  color: #00796b;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: bold;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

const FileInput = styled.input`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

const SubmitButton = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #00796b;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #005a4c;
  }
`

const StyledPost = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #00796b;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
`

const PostContent = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
`

const PostImage = styled.img`
  margin-top: 10px;
  max-width: 100%;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #00796b;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`

const LogoutButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Main = () => {
  const [user, setUser] = React.useState('John Doe')
  const [posts, setPosts] = React.useState([])

  const handleAddPost = (post) => {
    setPosts([post, ...posts])
  }

  return (
    <Wrapper>
      <StyledHeader>
        Welcome, {user}
        <LogoutButton onClick={() => setUser('')}>Logout</LogoutButton>
      </StyledHeader>
      <Title>Create New Post</Title>
    </Wrapper>
  )
}
