import React from 'react';
import styled from 'styled-components';

const charCard = styled.div`
    width: 80%;
    margin: 1.5rem auto;
    background-color: #a1a1a1;
    display: flex;
    border: 4px solid #2a5396;
    justify-content: center;
    box-shadow: 6px 6px 2px #a9a9a9;

    ul {
        list-style: none;
    }
    h2 {
        color: #538278;
        font-size: 2.5rem;
        font-weight: bolder;
    }
    p {
        color: #9194f2;
        font-size: 1.5rem;
        font-weight: bold;
    }
`
// Write your Character component here
function Character(props) {
    return (
        <>
            {props.charName.map((e) => {
                return <cardMaker key={e.name} char={e} />
            })}
        </>
    )
}

const cardMaker = ({ char }) => {
    return (
        <charCard>
            <ul>
                <li>
                    <h2>Character Name: {char.name}</h2>
                    <p>Birth Year: {char.birth_year}</p>
                    <p>Gender: {char.gender}</p>
                    <p>Hair Color: {char.hair_color}</p>
                </li>
            </ul>
        </charCard>
    )
}

export default {Character, cardMaker}


//REWRITTEN CODE
// import React, {useState} from 'react';
// import {
//     Card, CardText, CardBody,
//     CardTitle, CardSubtitle, Button, 
//   } from 'reactstrap';
// import Stats from './Stats'

// function Character(props){
//     const {data, bounty} = props
//     const [fadeIn, setFadeIn] = useState(false);

//     const toggle = () => setFadeIn(!fadeIn);


    
//     return (
//           <Card>
//             <CardBody>
//               <CardTitle>{data.name}</CardTitle>
//               <CardSubtitle>{bounty} credits</CardSubtitle>
//               <CardText>
//                   <Stats data = {data} fadeIn = {fadeIn}/>
//                   <Button color="danger" onClick={toggle}>Bounty Information</Button>
//                   </CardText>
//             </CardBody>
//           </Card>
//       );
//     };

// export default Character