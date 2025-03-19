import TriangleAlert from 'public/assets/triangle-alert.svg'
import CopyLight from 'public/assets/copy-light.svg'
import { BottomButtonsS } from './styles'
import Link from 'next/link'
import { useState } from 'react'
import ModalCopyIframe from '../ModalCopyIframe'

export const BottomButtons = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleClick = (e: any) => {
      e.preventDefault()
      const element = document.getElementById('content')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

  return (
    <BottomButtonsS>
      <Link href={'/'} onClick={(e) => handleClick(e)}>
        <TriangleAlert />
        <span>{'Přečíst upozornění'}</span>
      </Link>
      <div onClick={() => setOpenModal(true)}>
        <CopyLight />
        <span>{'Vložte si kalkulačku na váš web'}</span>
      </div>
      <ModalCopyIframe open={openModal} setOpen={setOpenModal} />
    </BottomButtonsS>
  )
}