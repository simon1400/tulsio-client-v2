import type { FC } from 'react'

import { IconButton, SvgIcon, Tooltip } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import CloseIcon from 'public/icons/close.svg'
import { forwardRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'

import { ModalContent } from './styles'

interface FadeProps {
  children?: React.ReactElement
  in: boolean
  onEnter?: () => void
  onExited?: () => void
}

const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  const { in: open, children, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    },
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  )
})

export interface IModalCopyIframe {
  setOpen: (value: boolean) => void
  open: boolean
}

const ModalCopyIframe: FC<IModalCopyIframe> = ({ setOpen, open }) => {
  const handleClose = () => setOpen(false)

  const [copyText, setCopyText] = useState('Click to copy!')

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content)
    setCopyText('Copied!')
  }

  return (
    <Modal
      aria-labelledby={'newsletter-modal-title'}
      aria-describedby={'newsletter-modal-description'}
      open={open}
      keepMounted
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        },
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <IconButton sx={{ color: 'white' }} onClick={() => handleClose()}>
            <SvgIcon component={CloseIcon} fontSize={'large'} />
          </IconButton>
          <Typography variant={'h1'} marginBottom={6}>
            {'Vložte si kalkulačku na váš web'}
          </Typography>
          <Typography variant={'h3'}>{'Tmavá varianta'}</Typography>
          <Tooltip title={copyText} placement={'top'}>
            <code
              onMouseLeave={() => setCopyText('Click to copy!')}
              onKeyDown={() =>
                handleCopy(
                  '<iframe src="https://tulsio.com/cs/calculator?embed=black" width="100%" height="400" />',
                )
              }
              onClick={() =>
                handleCopy(
                  '<iframe src="https://tulsio.com/cs/calculator?embed=black" width="100%" height="400" />',
                )
              }
            >
              {'https://tulsio.com/cs/calculator?embed=black'}
            </code>
          </Tooltip>

          <Typography variant={'h3'} marginTop={6}>
            {'Světlá varianta'}
          </Typography>
          <Tooltip title={copyText} placement={'top'}>
            <code
              onMouseLeave={() => setCopyText('Click to copy!')}
              onKeyDown={() =>
                handleCopy(
                  '<iframe src="https://tulsio.com/cs/calculator?embed=white" width="100%" height="400" />',
                )
              }
              onClick={() =>
                handleCopy(
                  '<iframe src="https://tulsio.com/cs/calculator?embed=white" width="100%" height="400" />',
                )
              }
            >
              {'https://tulsio.com/cs/calculator?embed=white'}
            </code>
          </Tooltip>
        </ModalContent>
      </Fade>
    </Modal>
  )
}

export default ModalCopyIframe
