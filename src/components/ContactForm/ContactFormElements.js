import styled from "styled-components"

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  height: 100vh;
  width: 100%;
  background-color: #070014;

  @media screen and (max-width: 375px) {
    height: 100%;
  }
`
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 0 9rem;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease-in-out;
    justify-content: center;
    padding: 0 2rem;
  }
`
export const ContactInput = styled.input`
  display: flex;
  background-color: transparent;
  color: #fff;
  border: none;
  box-shadow: none;
  border-bottom: 2px #8892b0 solid;
  outline: none;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 400px;

  @media screen and (max-width: 375px) {
    width: 275px;
  }
`

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background-color: #8892b0;
  border: none;
  outline: none;
  width: 100%;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`
export const ContactEmailImage = styled.div`
  display: flex;
  margin: 3rem;

  @media screen and (max-width: 375px) {
    margin: 3rem 0;
  }
`

export const ContactTitle = styled.h2`
  display: flex;
  font-size: 32px;
  font-weight: bold;
  color: #ccd6f6;
  width: 100%;
  padding: 9rem 0 2rem 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    justify-content: center;
  }

  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    justify-content: center;
    flex-direction: column-reverse;
  }
`

export const ContactEmailStatus = styled.p`
  display: flex;
  font-size: 14px;
  margin: 1.5rem 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    justify-content: center;
  }

  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    margin: 2rem 0;
  }
`
