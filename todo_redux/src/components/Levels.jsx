import React, {Component} from 'react';
import {TitleContext} from './TitleProvider'


export const LevelOne = ({title}) => (
  <div>
    <h5>LevelOne {title}</h5>
    <LevelTwo title={title} />
  </div>
  )
const LevelTwo = ({title}) => (
  <div>
    <h3>LevelTwo {title}</h3>
    <LevelThree title={title} child={<h1>Hello, The Hell, LevelThird!!!</h1>} />
  </div>
  )
const LevelThree = ({title, child}) => (
  <div>
    <h2>Third level of {title}</h2>
    {child}
    <LevelFour />
  </div>
  )
const LevelFour = () => (
    <TitleContext.Consumer>
      {({subtitle}) => <h1 style={{color: 'red'}}>{subtitle}</h1>}
    </TitleContext.Consumer>
  )
/**TypeError: Cannot destructure property 'subtitle' of 'undefined' as it is undefined.*/
