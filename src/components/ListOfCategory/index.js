import React, { useEffect, useState, Fragment } from 'react'
import { Category } from '../categories'
import { List, Item } from './style'


function useCategoriesData() {
    //custom hooks
    const [categories, setCategorities] = useState([])
    const [loading, setloading] = useState(false)
    //renderizar
    useEffect(() => {
        setloading(true)
        fetch("https://node-bryan-react-server.vercel.app/categories")
            .then(res => res.json())
            .then(response => {
                setCategorities(response)
                setloading(false)
            })
    }, [])

    return { categories, loading }
}


export const ListOfCategories = () => {

    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 20
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
        //limpiar el efecto
        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])


    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {
                loading ? <Item key="loading">
                    <Category />
                </Item> :
                    categories.map(category =>
                        <Item key={category.id}>
                            <Category {...category} />
                        </Item>)
            }
        </List>
    )


    return (
        //creacion del componente para la lista de estados de
        //de los usuarios
        <Fragment>
            { renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}





