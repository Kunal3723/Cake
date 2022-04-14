import React from 'react'
import "./decoratingItems.css";
function DecoratingItems({ items, setSel, sel, id }) {
    function handleClick(e) {
        if (id === 'A')
            setSel({ ...sel, A: parseInt(e.target.value) })
        if (id === 'B')
            setSel({ ...sel, B: parseInt(e.target.value) })
        if (id === 'C')
            setSel({ ...sel, C: parseInt(e.target.value) })
        if (id === 'D')
            setSel({ ...sel, D: parseInt(e.target.value) })

    }
    return (
        <div id="decorItem">
            <label forhtml="standard-select">{id}</label>
            <div className="select">
                <select id={id}>
                    {items.length && items.map(function (item) {
                        return (
                            <option key={item} value={item} onClick={function (e) { handleClick(e) }}>{item}</option>
                        )
                    })
                    }
                </select>
                <span className="focus"></span>
            </div>
        </div>
    )
}

export default DecoratingItems