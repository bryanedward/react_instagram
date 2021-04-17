import React, { useEffect, useRef, useState, Fragment } from "react";
import { ImgWrapper, Img, Article } from "./style";
import { UsearScreen } from "../../hooks/useLocalStorage";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const IMAGE_DEFAULT =
  "https://i.postimg.cc/y8qgfJ0z/pexels-alexandra-holbea-6056878.jpg";

function useLocalStorage(key, initialValue) {
  //custom hooks
  //obtener el like del localstorage
  const [values, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    //guardar el like en el localstorage
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  //retornar los resultados
  return [values, setLocalStorage];
}

export const PhotoCard = ({ id, likes = 0, src = IMAGE_DEFAULT }) => {
  //referencia de los elememtos de los componentes
  //polify
  const [show, element] = UsearScreen();

  const key = `like-${id}`;
  const [likeds, setLiked] = useLocalStorage(key, false);

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {(togglelike) => {
              const favButtonLikes = () => {
                !likeds && togglelike({
                  variables: {
                    input: {id}
                  }
                });
                setLiked(!likeds);
              };
              return (
                <FavButton
                  likeds={likeds}
                  likes={likes}
                  onClickLike={favButtonLikes}
                />
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};
