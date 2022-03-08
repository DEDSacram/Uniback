import useUser from 'lib/useUser';
import { useRouter } from 'next/router';
import fetchJson from 'lib/fetchJson';
import styled from 'styled-components';
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Navbar,NavbarRight,SearchBar,Link } from 'components/styledComp';
import { connectToDatabase } from 'components/mongodb';
export default function SgProfile({isConnected} : any) {
    const { user, mutateUser } = useUser({
        redirectTo: '/',
    });
    const [value, onChange] = useState(new Date());
    const Onclick = () => {
        console.log(value);
    };
    const router = useRouter(); 
    console.log(isConnected)
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
export async function getServerSideProps(context : any) {
    try {
      // client.db() will be the default database passed in the MONGODB_URI
      // You can change the database by calling the client.db() function and specifying a database like:
      // const db = client.db("myDatabase");
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
      
        let { db } = await connectToDatabase();
        // fetch the posts
        let posts = await db
            .collection('characters')
            .find({})
            .toArray();
        // return the posts
        // console.log(JSON.parse(JSON.stringify(posts)))
   
     
      return {
        props: { isConnected: JSON.parse(JSON.stringify(posts)) },
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }
