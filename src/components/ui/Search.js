import React, { useState } from 'react'

const Search = ({getIstek}) => {
    const [text, setText] = useState("")
    const onChange = (i) => {
        setText(i)
        getIstek(i)
    }
    return (
        <section className="search">
            <form>
                <input type="text"
                    className="form-control"
                    placeholder="Search Characters..."
                    autoFocus
                    value={text}
                    onChange={ (e) => onChange(e.target.value)} />
            </form>
        </section>
    )
}

export default Search
