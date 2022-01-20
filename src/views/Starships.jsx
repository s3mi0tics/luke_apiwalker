import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Starships = () => {
    const [starship, setstarship] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res=>{
                console.log(res.data)
                setstarship(res.data)
            })
            .catch(err=>{
                setstarship(null)
                // not successful
            })
    },[id]) 


    return (
        <div>
            {
                starship?
                <div>
                    <h1>Name: {starship.name}</h1>
                    <h1>Model:</h1><h3>{starship.model}</h3>
                    <h1>Manufacturer:</h1><h3>{starship.manufacturer}</h3>
                </div>:
                <img src="http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg" alt="These are not the droids you're looking for" />
            }
        </div>
    )
};

export default Starships;

// setErrorImg('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg')