import { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { styled } from '@stitches/react'
import * as Dialog from '@radix-ui/react-dialog'

export default function () {
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogChange = (isOpen: boolean) => setIsOpen(isOpen)

  const transition = useTransition(isOpen, {
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
  })

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleDialogChange}>
      <Trigger>
        <TriggerShadow />
        <TriggerEdge />
        <TriggerLabel>Open Modal</TriggerLabel>
      </Trigger>
      <Dialog.Portal forceMount>
        {transition((style, isOpen) => (
          <>
            {isOpen ? (
              <OverlayBackground style={{ opacity: style.opacity }} />
            ) : null}
            {isOpen ? (
              <Content forceMount style={style}>
                <DialogHeader>
                  <CloseButton>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.9574 14.1689L8.59651 6.75098L6.73232 8.59598L14.1313 16.071L6.71338 23.4129L8.5964 25.2769L15.9574 17.8779L23.3943 25.2769L25.2392 23.4129L17.8213 16.071L25.2202 8.59598L23.3752 6.75098L15.9574 14.1689Z"
                        fill="currentColor"
                      />
                    </svg>
                  </CloseButton>
                </DialogHeader>
                <Title>Aha you found me!</Title>
              </Content>
            ) : null}
          </>
        ))}
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const TriggerPart = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 8,
})

const TriggerShadow = styled(TriggerPart, {
  background: 'hsl(0deg 0% 0% / 0.1)',
  transform: 'translateY(2px)',
  transition: 'transform 250ms ease-out',
})

const TriggerEdge = styled(TriggerPart, {
  background: `linear-gradient(
      to left,
      hsl(0deg 0% 69%) 0%,
      hsl(0deg 0% 85%) 8%,
      hsl(0deg 0% 85%) 92%,
      hsl(0deg 0% 69%) 100%
    )`,
})

const TriggerLabel = styled('span', {
  display: 'block',
  position: 'relative',
  borderRadius: 8,
  color: '#569AFF',
  fontSize: '14px',
  padding: '16px 24px',
  background: '#fafafa',
  transform: 'translateY(-4px)',
  width: '100%',
  userSelect: 'none',
  transition: 'transform 250ms ease-out',
})

const Trigger = styled(Dialog.Trigger, {
  border: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  background: 'transparent',
  position: 'relative',
  padding: 0,
  cursor: 'pointer',
  transition: 'filter 250ms ease-out',

  '&:hover': {
    filter: 'brightness(110%)',

    [`& ${TriggerLabel}`]: {
      transform: 'translateY(-6px)',
    },

    [`& ${TriggerShadow}`]: {
      transform: 'translateY(4px)',
    },
  },

  '&:active': {
    [`& ${TriggerLabel}`]: {
      transform: 'translateY(-2px)',
      transition: 'transform 34ms',
    },

    [`& ${TriggerShadow}`]: {
      transform: 'translateY(1px)',
      transition: 'transform 34ms',
    },
  },
})

const OverlayBackground = styled(animated(Dialog.Overlay), {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  pointerEvents: 'all',
  position: 'fixed',
  inset: 0,
})

const Content = styled(animated(Dialog.Content), {
  position: 'absolute',
  width: '50vw',
  height: '60vh',
  backgroundColor: '#fafafa',
  borderRadius: 8,
  padding: '24px 24px 32px',
})

const DialogHeader = styled('header', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 16,
})

const CloseButton = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',
  color: '#1B1A22',
})

const Title = styled(Dialog.Title, {
  fontSize: 20,
})