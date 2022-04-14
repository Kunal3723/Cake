import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import DecoratingItems from '../Decoration Items/DecoratingItems';
import "./decoration.css";
function Decoration({ size }) {
    const [remain, setRemain] = useState(parseInt(size));
    const initial2 = {
        itemA: [],
        itemB: [],
        itemC: [],
        itemD: [],
    }
    const [items, setItems] = useState(initial2);
    const intial = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
    }
    const [sel, setSel] = useState(intial);
    useEffect(() => {

        const tempA = []
        const tempB = []
        const tempC = []
        const tempD = []

        for (let i = 0; i <= sel.A + remain; i++) {
            tempA.push(i);
        }

        for (let i = 0; i <= sel.B + remain; i++) {
            tempB.push(i);
        }
        for (let i = 0; i <= sel.C + remain; i++) {
            tempC.push(i);
        }
        for (let i = 0; i <= sel.D + remain; i++) {
            tempD.push(i);
        }
        setItems({ ...items, itemD: tempD, itemA: tempA, itemB: tempB, itemC: tempC });

        const remVal = (parseInt(size) - parseInt(sel.A) - parseInt(sel.B) - parseInt(sel.C) - parseInt(sel.D))
        setRemain(remVal);

    }, [remain, sel])

    useEffect(() => {
        setRemain(parseInt(size));
        setItems(initial2);
        setSel(intial);
    }, [size])

    return (
        <>{
            size &&
        <div>
            <div id="title">Decorations</div>
            <div id="size">{size}</div>
            <div className="content">
                <DecoratingItems items={items.itemA} sel={sel} setSel={setSel} id={"A"} />
                <DecoratingItems items={items.itemB} sel={sel} setSel={setSel} id={"B"} />
                <DecoratingItems items={items.itemC} sel={sel} setSel={setSel} id={"C"} />
                <DecoratingItems items={items.itemD} sel={sel} setSel={setSel} id={"D"} />
            </div>
            <div id="remain">Remaining: {remain}</div>
        </div>
}
        </>
    )
}

export default Decoration