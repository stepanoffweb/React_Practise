import React, {Component} from 'react'
import PropTypes from 'prop-types'


Component.propTypes = {
    node: PropTypes.node //для любых типов данных, но - малоописательный, для передачи компонента в компонент
}
Component.propTypes = {
    element: PropTypes.element //
}

Component.propTypes = {
    instance: PropTypes.instanceOf(Constructor) //для экземпляра класса (new Data)
}
Component.propTypes = {
    elem: PropTypes.oneOf(['val1', 'val2']) //ограничиваем свойство списком значений
}
Component.propTypes = {
    elem: PropTypes.oneOfType([      // == oneOf но вместо списка значений - список валидаторов
        PropTypes.string,
        PropTypes.number,
    ])
}
Component.propTypes = {
    elem: PropTypes.arrayOf([      //
        PropTypes.string,
    ])
}
Component.propTypes = {
    elem: PropTypes.objectOf([      // редкий случай - объект однотипных данных
        PropTypes.number,
    ])
}
Component.propTypes = {
    obj: PropTypes.shape([  // удобен - валидировать свойства объекта, используемые в компоненте, если остальные просто передаются ниже - игнор
        color: PropTypes.string,
        fontSize: PropTypes.number,
    ])
}
