import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Planets = () => {
    const [planet, setplanet] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res=>{
                console.log(res.data)
                setplanet(res.data)
            })
            .catch(err=>{
                setplanet(null)
                // not successful
            })
    },[id]) 


    return (
        <div>
            {
                planet?
                <div>
                    <h1>Name: {planet.name}</h1>
                    <h1>Climate:</h1><h3>{planet.climate}</h3>
                    <h1>Terrain:</h1><h3>{planet.terrain}</h3>
                    <h1>Surface Water:</h1><h3>{planet.surface_water}</h3>
                    <h1>Population:</h1><h3>{planet.population}</h3>
                </div>:
                <img src="http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg" alt="These are not the droids you're looking for" />
            }
        </div>
    )
};

export default Planets;

// setErrorImg('http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg')