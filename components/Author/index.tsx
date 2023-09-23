import Logo from "components/Logo"
import { AuthorS, Name } from "./styles"
import { Typography } from "@mui/material"
// import SocialNav from "components/SocialNav"
import { FC } from "react"

const Author: FC<{data: any}> = ({data}) => {
  return (
    <AuthorS>
      <div className="author-top">
        <Name>
          <Logo image={data.image} />
          <span>{data.name}</span>
        </Name>
        {/* <SocialNav data={data} loading={loading} /> */}
      </div>
      <Typography dangerouslySetInnerHTML={{ __html: data.description }} />
    </AuthorS>
  )
}

export default Author