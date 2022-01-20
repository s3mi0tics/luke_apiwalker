import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const People = () => {
    const [person, setPerson] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res=>{
                console.log(res.data)
                setPerson(res.data)
            })
            .catch(err=>{
                setPerson(null)
                // not successful
            })
    },[id]) 


    return (
        <div>
            {
                person?
                <div>
                    <h1>Name:{person.name}</h1>
                    <h1>Height:</h1><h3>{person.height}</h3>
                    <h1>Mass:</h1><h3>{person.mass}</h3>
                    <h1>Hair Color:</h1><h3>{person.hair_color}</h3>
                    <h1>Skin Color:</h1><h3>{person.skin_color}</h3>
                </div>:
                <img src="http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg" alt="These are not the droids you're looking for" />
            }
        </div>
    )
};

export default People;

// setErrorImg('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg')