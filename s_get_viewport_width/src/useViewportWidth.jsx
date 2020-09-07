import React, { useState, useEffect } from 'react';
import {throttle} from 'lodash'


function useViewportWidth() {
    const getViewportWidth = () => {
        let element = window, str = 'inner'
        if (!("innerWidth" in window)) {
            element = document.documentElement ||document.body
            str = 'client'
        }
        return element[`${str}Width`]
    }

    const [viewportWidth, setWidth] = useState(getViewportWidth()) // вычисляется при каждом рендере

    useEffect(() => {
        const handler = () => {setWidth(getViewportWidth())}
        const throttledHandler = throttle(handler, 500, {leading: true, trailing: true})

        window.addEventListener('resize',throttledHandler)

        return () => {
            window.removeEventListener('resize', throttledHandler)
        }
    }, [])
    return viewportWidth

}

export default useViewportWidth;

