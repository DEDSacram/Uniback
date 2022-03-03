import useUser from 'lib/useUser';
import { useRouter } from 'next/router';
import fetchJson from 'lib/fetchJson';
import styled from 'styled-components';
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Navbar = styled.div`
    display: flex;
    background-color: #333;
    overflow: hidden;
    justify-content: space-between;
`;
const NavbarRight = styled.div`
`
const SearchBar = styled.div`
margin-left: auto;
margin-right: auto;
`
const Link = styled.a`
float: left;
background-color: #333;
color:white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
`



export default function SgProfile() {
    const { user, mutateUser } = useUser({
        redirectTo: '/',
    });

    const [value, onChange] = useState(new Date());
    const Onclick = () => {
        console.log(value);
    };

   
    const router = useRouter(); 
    return (
        <>
        <style jsx global>{`
body {
  margin: 0;
}
button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
a:hover{
    color: black;
    background-color:white;
}
.navbut{
color:white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}
.navbut:hover{
    color: black;
    background-color:white;
}
`}</style>
            <Navbar>
                
                <Popup trigger={<button className='navbut'> Vybrat datum </button>} 
                modal>
                <div>
                <Calendar onChange={onChange} value={value} />
                <button onClick={Onclick}>Potvrdit</button>
                </div>
                </Popup>

                <SearchBar>
                <form>
                <input type="text" placeholder="Hledejte" name="searchbar"/>
               
                <button className='navbut' type="submit">Vyhledat</button>
                </form>
                </SearchBar>

             
                <NavbarRight>
                    
                <Link
                href="/api/logout"
                onClick={async (e) => {
                    e.preventDefault();
                    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false);
                    router.push('/');
                }}
            >
               Odhlásit se
                
            </Link>
                </NavbarRight>
         
            </Navbar>
            
          
        </>
    );
}
