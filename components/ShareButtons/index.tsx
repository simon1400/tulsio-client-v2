import { SvgIcon } from '@mui/material';
import {useRouter} from 'next/router'
import { ShareButtonS } from './styles';
import FacebookIcon from 'public/icons/facebook.svg'
import TwitterIcon from 'public/icons/twitter.svg'
import Link from 'next/link';


const DOMAIN = process.env.APP_DOMAIN;

const ShareButton = ({
  // @ts-ignore
  data
}) => {

  const router = useRouter()

  return (
    <ShareButtonS>
      <ul>
        <li>
          <Link href={`https://www.facebook.com/sharer.php?u=${DOMAIN}${router.asPath}`} target="_blank" rel="noreferrer">
            <SvgIcon component={FacebookIcon} />
          </Link>
        </li>
        <li>
          <Link href={`https://twitter.com/share?url=${DOMAIN}${router.asPath}&amp;text=${data.title}&amp;hashtags=${data.labels?.data?.[0]?.attributes?.title || ""}`} target="_blank" rel="noreferrer">
            <SvgIcon component={TwitterIcon} />
          </Link>
        </li>
      </ul>
    </ShareButtonS>
  )
}

export default ShareButton
