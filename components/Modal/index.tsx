import type { FC, FocusEventHandler } from 'react'

import { IconButton, InputAdornment, SvgIcon } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import Button from 'components/Button'
import Content from 'components/Content'
import Input from 'components/Input'
import { validationForm } from 'helpers/validation'
import Link from 'next/link'
import BlankIcon from 'public/icons/blank.svg'
import CloseIcon from 'public/icons/close.svg'
import EmailIcon from 'public/icons/email.svg'
import { forwardRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { animated, useSpring } from 'react-spring'
import { changeModalState } from 'stores/slices/modalSlices'

import { FormWrap, ModalContent } from './styles'

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

export interface IModalNewsletter {
  setOpen: (value: boolean) => void
  open: boolean
}

const ModalNewsletter: FC<IModalNewsletter> = ({ setOpen, open }) => {
  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [send, setSend] = useState(false)
  const [error, setError] = useState({
    email: false,
  })

  const onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (
    type: any,
  ) => {
    setError({ email: false })
    const validation = validationForm(type, { email }, error, setError)
    if (validation) {
      dispatch(changeModalState('error'))
    }
  }

  const handleButton = (e: any) => {
    e.preventDefault()
    if (error.email) {
      return
    }
    axios
      .post(`/api/subscribe`, { email })
      .then(() => {
        setSend(true)
        handleClose()
        dispatch(changeModalState('success'))
      })
      .catch(() => {
        setError({ email: true })
        dispatch(changeModalState('error'))
      })
  }

  const handleEmail = (e: any) => {
    e.preventDefault()
    setEmail(e.target.value)
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
          <Typography variant={'h2'}>
            {'Všechno co se ve světě CBD děje ve vašem mailu.'}
          </Typography>

          {!send && (
            <FormWrap>
              <Input
                value={email}
                placeholder={'Váš e-mail'}
                onChange={handleEmail}
                onBlur={onBlur}
                name={'email'}
                type={'email'}
                required
                endAdornment={
                  <InputAdornment position={'end'}>
                    <SvgIcon component={EmailIcon} />
                  </InputAdornment>
                }
              />
              <Button variant={'contained'} onClick={handleButton}>
                {'Odeslat'}
              </Button>
            </FormWrap>
          )}
          <Content removePadding>
            <Typography variant={'body1'}>
              {'Vaše osobní údaje jsou u nás v bezpečí. I tak vás ale musíme'}
              {'seznámít se'}{' '}
              <Link href={'/gdpr'} target={'_blank'} rel={'noopener'}>
                {'zpracováním osobních údajů'}
                <SvgIcon component={BlankIcon} />
              </Link>
              {'. Udělením vašeho e-mailu s nimi souhlasíte. Děkujeme.'}
            </Typography>
          </Content>
        </ModalContent>
      </Fade>
    </Modal>
  )
}

export default ModalNewsletter
