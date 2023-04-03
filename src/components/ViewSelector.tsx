import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function ViewSelector() {

    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }))

    const handleClick = () => {
        console.log('the click worked')
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: 100,
            },
        })
    }

    return (
        <animated.div
          onClick={handleClick}
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
            ...springs,
          }}
        />
    )
}
