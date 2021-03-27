import React from 'react'
import {Button, ImgWrapper, Img} from './style'
import {MdFavorite} from 'react-icons/md'

const IMAGE_DEFAULT = "https://i.postimg.cc/y8qgfJ0z/pexels-alexandra-holbea-6056878.jpg"


export const PhotoCard = ({
    id, likes = 0, src = IMAGE_DEFAULT
}) =>{
    return(
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} />
                </ImgWrapper>
            </a>
            <Button>
                <MdFavorite size='30px'/> {likes} Gustos!!
            </Button>
        </article>
    )
}