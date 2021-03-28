import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Button, ImgWrapper, Img, Article } from './style'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

const IMAGE_DEFAULT = "https://i.postimg.cc/y8qgfJ0z/pexels-alexandra-holbea-6056878.jpg"

function useLocalStorage(key, initialValue) {
    //custom hooks
    const [value, setValue] = useState(() => {
        //obtener el like del localstorage
        try {
            const like = window.localStorage.getItem(key)
            return value != null ? JSON.parse(like) : initialValue
        } catch (error) {
            return initialValue
        }
    });

    const setLocalStorage = value => {
        //guardar el like en el localstorage
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (error) {
            console.log(error);
        }
    }
    return [useLocalStorage, setLocalStorage]
}


export const PhotoCard = ({ id, likes = 0, src = IMAGE_DEFAULT }) => {
    //referencia de los elememtos de los componentes
    const element = useRef(null);
    const [show, setShow] = useState(false);
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);

    useEffect(function () {
        //carga del poliffy
        Promise.resolve(
            typeof window.IntersectionObserver != 'undefined'
                ? window.IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            const observer = new
                window.IntersectionObserver(function
                    (entries) {
                    const { isIntersecting } = entries[0]
                    if (isIntersecting) {
                        setShow(true)
                    }
                })
            observer.observe(element.current)
        })
    }, [element])

    //cambiat de icono
    console.log(liked);
    const Icon = liked ? MdFavorite : MdFavoriteBorder

    return (
        <Article ref={element}>
            {
                show &&
                <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <Button onClick={() => setLiked(!liked)}>
                        <Icon size='30px' />
                        {likes} Gustos!!
                    </Button>
                </Fragment>
            }
        </Article>
    )
}