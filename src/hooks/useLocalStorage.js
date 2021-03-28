import { useEffect, useState, useRef } from 'react'

export function UsearScreen() {

    const element = useRef(null);
    const [show, setShow] = useState(false);

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

    //retornar el valor del useState
    return [show, element]
}