import React, {useEffect, useState, Fragment} from 'react'
import {Category} from '../categories'
import {List, Item} from './style'

export const ListOfCategories = () => {
    
    const [ categories, setCategorities] = useState([])
    const [showFixed, setShowFixed ] = useState(false)
    
    //renderizar
    useEffect(() => {
        fetch("https://node-bryan-react-server.vercel.app/categories")
        .then(res => res.json())
        .then(response => {
            setCategorities(response)
        })
    },[])

    useEffect(() => {
        //reparar bug
        const onScroll  = e => {
            const newShowFixed = window.screenY > 20
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

         document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
    },[showFixed])


    const renderList = (fixed) => (
         <List className={fixed ? 'fixed' : ''}>
            {
                categories.map(category => 
                    <Item key={category.id}>
                        <Category {...category}/>
                    </Item>)
            }
        </List>
    )

    return(
        //creacion del componente para la lista de estados de
        //de los usuarios
      <Fragment>
     { renderList()}
     {showFixed && renderList(true)}
      </Fragment>
    )
}





