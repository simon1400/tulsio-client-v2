import {useRouter} from 'next/router'
import { ShareButtonS } from './styles';
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
          <a href={`https://www.facebook.com/sharer.php?u=${DOMAIN}${router.asPath}`} target="_blank" rel="noreferrer">
            <img className="uk-svg" src="/assets/facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/share?url=${DOMAIN}${router.asPath}&amp;text=${data.title}&amp;hashtags=${data.labels?.data?.[0]?.attributes?.title || ""}`} target="_blank" rel="noreferrer">
            <img className="uk-svg" src="/assets/twitter.svg" alt="Facebook" />
          </a>
        </li>
      </ul>
    </ShareButtonS>
  )
}

export default ShareButton
