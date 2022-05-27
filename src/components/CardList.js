import React from 'react'
import Card from './Card'

function CardList({robots}) {
    const userCards = robots.map((user) => {
        return <Card key = {user.id} id={user.id} name={user.name} email = {user.email } />})
    
    return (
        <>
            {userCards}
        </>
  )
}

export default CardList