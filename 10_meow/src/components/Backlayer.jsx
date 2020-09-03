import React from 'react'

export const Backlayer = ({disabled}) => {

    return     <svg className={`fill-bottom ${disabled}`}  width="320"  height="480" >
             <path d="M50 0 L300 0  Q320 0 320 20 L320 460  Q320 480 300 480 L20 480 Q0 480 0 460 L0 50 Z " ></path>
               <svg className="fill-top" width="320"  height="480" viewport="0 0 320 480">
             <path d="M54 4 L300 4  Q316 4 316 24 L316 456  Q316 476 296 476 L24 476 Q4 476 4 456 L4 54 Z " ></path>
           </svg>
         </svg>
}
