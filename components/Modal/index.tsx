import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from 'react-spring';
import { FC, FocusEventHandler, forwardRef, useState } from 'react';
import { FormWrap, ModalContent } from './styles';
import Content from 'components/Content';
import Input from 'components/Input';
import { Alert, AlertTitle, IconButton, InputAdornment, Stack, SvgIcon } from '@mui/material';
import EmailIcon from 'public/icons/email.svg'
import CloseIcon from 'public/icons/close.svg'
import { validationForm } from 'helpers/validation';
import Link from 'next/link';
import BlankIcon from 'public/icons/blank.svg';
import Button from 'components/Button';
import axios from 'axios';
import CustomAlert from 'components/Alert';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export interface IModalNewsletter {
  setOpen: (value: boolean) => void
  open: boolean
}

const ModalNewsletter: FC<IModalNewsletter> = ({
  setOpen,
  open
}) => {
  
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState("")
  const [send, setSend] = useState(false)
  const [error, setError] = useState({
    email: false
  })

  const onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (type: any) => {
    validationForm(type, {email}, error, setError);
  }

  const handleButton = (e: any) => {
    e.preventDefault()
    if(error.email) {
      return
    }
    axios.post(`/api/subscribe`, {email}).then(() => {
      setSend(true)
    }).catch((err: any) => setError({email: true}))
  }

  const handleEmail = (e: any) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  return (
    <Modal
      aria-labelledby="newsletter-modal-title"
      aria-describedby="newsletter-modal-description"
      open={open}
      keepMounted
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)"
        }
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <IconButton sx={{color: 'white'}}><SvgIcon component={CloseIcon} fontSize="large" onClick={() => handleClose()} /></IconButton>
          <Typography variant="h2">Všechno co se ve světě CBD děje ve vašem mailu.</Typography>

          {send && <CustomAlert type="success" title="Úspěch" content="Váš e-mail je v pořádku odeslán." />}
          {error.email && <CustomAlert type="error" title="Chyba" content="Zadaný e-mail není platný." />}
          
          {!send && <FormWrap>
            <Input 
              value={email} 
              placeholder="Váš e-mail" 
              onChange={handleEmail}
              onBlur={onBlur}
              name="email"
              endAdornment={
                <InputAdornment position="end">
                  <SvgIcon component={EmailIcon} />
                </InputAdornment>
              }
            />
            <Button variant="contained" onClick={handleButton}>Odeslat</Button>
          </FormWrap>}
          <Content removePadding>
            <Typography variant="body1">
              Vaše osobní údaje jsou u nás v bezpečí. I tak vás ale musíme seznámít se <Link href="/gdpr" target="_blank" rel="noopener">zpracováním osobních údajů<SvgIcon component={BlankIcon} /></Link>. Udělením vašeho e-mailu s nimi souhlasíte. Děkujeme.
            </Typography>
          </Content>
        </ModalContent>
      </Fade>
    </Modal>
  );
}

export default ModalNewsletter