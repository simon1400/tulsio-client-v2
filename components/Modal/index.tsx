import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from 'react-spring';
import { FC, FocusEventHandler, forwardRef, useState } from 'react';
import { FormWrap, ModalContent } from './styles';
import Content from 'components/Content';
import Input from 'components/Input';
import { IconButton, SvgIcon } from '@mui/material';
import EmailIcon from 'public/icons/email.svg'
import CloseIcon from 'public/icons/close.svg'
import { validationForm } from 'helpers/validation';
import Link from 'next/link';
import BlankIcon from 'public/icons/blank.svg';
import Button from 'components/Button';
import axios from 'axios';

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
    if(!open && !send) {
      setOpen(true)
    }else if(!send){
      axios.post(`/api/subscribe`, {email}).then(() => {
        setOpen(false)
        // setSend(true)
      }).catch((err: any) => console.log(err))
    }
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
          backdropFilter: "blur(15px)",
          backgroundColor: "transparent",
        }
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <IconButton sx={{color: 'white'}}><SvgIcon component={CloseIcon} fontSize="large" onClick={() => handleClose()} /></IconButton>
          <Typography variant="h2">Všechno co se ve světě CBD děje ve vašem mailu.</Typography>
          <FormWrap>
            <Input 
              value={email} 
              placeholder="Váš e-mail" 
              onChange={handleEmail}
              onBlur={onBlur}
              name="email"
              endIcon={<SvgIcon component={EmailIcon} />}
            />
            <Button variant="contained" onClick={handleButton}>Odeslat</Button>
          </FormWrap>
          <Content removePadding>
            <Typography variant="body1">
              Vaše osobní údaje jsou u nás v bezpečí. I tak vás ale musíme seznámít se <Link href="/gdpr" target="_blank" rel="noopener">zpracováním osobních údajů<SvgIcon component={BlankIcon} /></Link>. Udělením vašeho e-mailu s nimi souhlasíte. Děkujeme.</Typography>
          </Content>
        </ModalContent>
      </Fade>
    </Modal>
  );
}

export default ModalNewsletter