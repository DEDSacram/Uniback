import styled from 'styled-components'


//Form+Register
export const Button = styled.button`
color: #fff;
background-color: #0d6efd;
border-color: #0d6efd;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`


//Login
export const HrLoginCara = styled.hr`
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    width: 80%;
`;

export const MainLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #dee2e6;
`;

export const DivLoginSekce = styled.div`
    padding: 0.5rem;
`;


//Main
export const Navbar = styled.div`
    display: flex;
    background-color: #333;
    overflow: hidden;
    justify-content: space-between;
`;
export const NavbarRight = styled.div`
`
export const SearchBar = styled.div`
margin-left: auto;
margin-right: auto;
`
export const Link = styled.a`
float: left;
background-color: #333;
color:white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
`