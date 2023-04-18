import React, { useState, useEffect } from "react"
import { Card } from "./Card"
import axios from "axios"

export const CardTable = () => {
    const [card, setCard] = useState("")

    useEffect(() => {
        async function getData() {
            let res = await axios.get(
                "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
            )
            setCard(res.data)
        }
        getData()
    }, [setCard])

    return (
        <div>
            <h1>I am the card table</h1>
            <h4></h4>
            <Card card={card} />
        </div>
    )
}
