import React from 'react'
import {ListOfCategories} from './components/ListOfCategory'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCard} from './components/ListPhotoCards'
import {Logo} from './components/Logo'
export const App = () =>(
    <>
    <GlobalStyle/>
    <Logo/>
        <ListOfCategories />
        <ListOfPhotoCard />
    </>
)