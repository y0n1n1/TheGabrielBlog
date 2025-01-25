import * as React from 'react'
import { animated, useIsomorphicLayoutEffect, useSpringValue } from '@react-spring/web'
import { useMousePosition } from '../hooks/useMousePosition'
import { useWindowResize } from '../hooks/useWindowResize'
import { useDock } from '../Dock/DockContext'
import styles from './styles.module.scss'

interface DockCardProps {
  children: React.ReactNode
  title: string
  url: string
  active: boolean // New prop to trigger animation based on active route
}

const INITIAL_WIDTH = 48

export const DockCard = ({ children, title, url, active }: DockCardProps) => {
  const cardRef = React.useRef<HTMLButtonElement>(null!)
  const [elCenterX, setElCenterX] = React.useState<number>(0)

  const size = useSpringValue(INITIAL_WIDTH, {
    config: {
      mass: 0.1,
      tension: 320,
    },
  })

  const opacity = useSpringValue(0)
  const y = useSpringValue(0, {
    config: {
      friction: 29,
      tension: 238,
    },
  })

  const dock = useDock()

  useMousePosition(
    {
      onChange: ({ value }) => {
        const mouseX = value.x
        if (dock.width > 0) {
          const transformedValue =
            INITIAL_WIDTH + 36 * Math.cos((((mouseX - elCenterX) / dock.width) * Math.PI) / 2) ** 12

          if (dock.hovered) {
            size.start(transformedValue)
          }
        }
      },
    },
    [elCenterX, dock]
  )

  useIsomorphicLayoutEffect(() => {
    if (!dock.hovered) {
      size.start(INITIAL_WIDTH)
    }
  }, [dock.hovered])

  useWindowResize(() => {
    const { x } = cardRef.current.getBoundingClientRect()
    setElCenterX(x + INITIAL_WIDTH / 2)
  })

  const timesLooped = React.useRef(0)
  const timeoutRef = React.useRef<number>()

  const handleClick = () => {
    window.location.href = url
  }

  React.useEffect(() => {
    if (active) {
      opacity.start(0.5);
      size.start(72);
      y.start(-INITIAL_WIDTH / 2, {
        loop: () => {
          if (3 === timesLooped.current++) {
            timeoutRef.current = window.setTimeout(() => {
              opacity.start(0);
              y.set(0);
              timeoutRef.current = undefined;
            }, 2000);
            y.stop();
          }
          return { reverse: true };
        },
      });
    }
  }, [active]);

  React.useEffect(() => () => clearTimeout(timeoutRef.current), [])

  return (
    <div className={styles['dock-card-container']}>
      <div className={styles['dock-card-title']}>
        <animated.div className={styles['dock-card-title-text']}>
          {title}
        </animated.div>
      </div>
      <animated.button
        ref={cardRef}
        className={styles['dock-card']}
        onClick={handleClick}
        style={{
          width: size,
          height: size,
          y,
        }}>
        {children}
      </animated.button>
      <animated.div className={styles['dock-dot']} style={{ opacity }} />
    </div>
  )
}
