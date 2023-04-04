import React, { useState } from 'react';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
  } from '@react-spring/web'
import InfoPanel from './InfoPanel'
import Nameplate from './Nameplate'


export default function ViewSelector() {
    const [open, set] = useState(false)
    //will be uncommenting this once the onclick can handle changing nameplate name
    // const [nameplate, setNameplate] = useState('');

    let exampleProp = 'CPU Stats';
    const data = [
      //can change the title prop to match that of the box clicked. Do this in the onclick function
        {component: < Nameplate title={exampleProp}/>},
        //cluster ip, name of cluster, and type of data as props, array or rest of url in component
        {component: < InfoPanel />}
      ];

    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className='wrapper'>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className='container'
        onClick={() => set(open => !open)}>
        {transition((style, item) => (
          <animated.div className='item' style={style}>
            {item.component}
          </animated.div>
        ))}
      </animated.div>
      <div>I am filling space</div>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className='container'
        onClick={() => set(open => !open)}>
        {transition((style, item) => (
          <animated.div className='item' style={style}>
            {item.component}
          </animated.div>
        ))}
      </animated.div>
    </div>
  )
}
