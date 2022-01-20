import React, { useState } from 'react';
import { useHistory } from 'react-router';

const HeaderForm = () => {
    const [category, setcategory] = useState("people");
    const [id, setId] = useState(null);
    const history = useHistory()

    const submitHandler = (e) =>{
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    search for:
                    <select onChange={e=>setcategory(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">planet</option>
                        <option value="starships">Starship</option>
                    </select>
                    ID:
                    <input type="number" onChange={e=>setId(e.target.value)}/>
                    <button className="btn btn-primary">Search</button>
                </p>
            </form>
        </div>
    )
};

export default HeaderForm;

