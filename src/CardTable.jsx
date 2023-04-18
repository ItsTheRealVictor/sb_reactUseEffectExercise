import React, { useState, useEffect } from "react"
import { Card } from "./Card"
import axios from "axios"

export const CardTable = () => {
    const [card, setCard] = useState("")

    async function getData() {
        const res = await axios.get(
            "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        )
        return res.data
    }
    console.log(getData())
    return (
        <div>
            <h1>I am the card table</h1>
            <h4>the response is {getData()}</h4>
            <Card face={"10H"} />
        </div>
    )
}
