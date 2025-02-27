import type { NextPage } from 'next'

import { Container, Grid } from '@mui/material'
import Calculator from 'components/Calculator'
import CategoryShort from 'components/CategoryShort'
import InfoBlock from 'components/InfoBlock'
import Related from 'components/Related'
import ShortContent from 'components/ShortContent'
import Page from 'layout/Page'
import { client, getStrapiURL } from 'lib/api'
import calculatorQuery from 'queries/calculator'
import { wrapper } from 'stores'
import { changeDescription, changeTitle } from 'stores/slices/dataSlices'
import { changeImage } from 'stores/slices/metaSlices'
import navHeader from 'queries/navHeader'
import navFooter from 'queries/navFooter'
import globalQuery from 'queries/global'

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { data } = await client.query({
    query: calculatorQuery,
    variables: {
      locale: ctx.locale,
    },
  })

  const calculator = data.calculator.data?.attributes

  const embed = ctx.query?.embed || ''

  store.dispatch(changeTitle(calculator.meta?.title || calculator.title))
  store.dispatch(changeDescription(calculator.meta?.description || ''))
  store.dispatch(
    changeImage(
      calculator.meta?.image.data ? getStrapiURL(calculator.meta.image.data.attributes.url) : '',
    ),
  )

  const { data: headerData } = await client.query({query: navHeader, 
    variables: {
      locale: ctx.locale,
    },}
  )

  const { data: footerData } = await client.query({query: navFooter,
    variables: {
      locale: ctx.locale,
    },
  })

  const { data: newsletterData } = await client.query({query: globalQuery, 
    variables: {
      locale: ctx.locale,
    },
  })

  return {
    props: {
      calculator,
      embed,
      headerData,
      footerData,
      newsletterData
    },
  }
})

interface ICalculator {
  calculator: any
  embed: string
}

const CalculatorPage: NextPage<ICalculator> = ({ calculator, embed }) => {
  if (embed.length) {
    return <Calculator embed={embed} />
  }

  return (
    <Page>
      <Container maxWidth={'xl'}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <CategoryShort
              removeHover
              staticBlock
              data={{ title: calculator.title, description: calculator.description }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Calculator />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={'md'}>
        <ShortContent
          title={calculator.tutorial.title}
          description={calculator.tutorial.description}
        />
      </Container>
      <Container>
        <Grid container spacing={5}>
          {!!calculator.tutorialItem.length &&
            calculator.tutorialItem.map((item: any, idx: number) => (
              <Grid key={item.title} item xs={12} md={4}>
                <InfoBlock
                  icon={item.image.data.attributes.url}
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Container>
        <div style={{ marginBottom: 70 }}>
          <ShortContent title={'Na co se CBD nejčestěji používá'} />
          {!!calculator.commonlyUsed.length &&
            calculator.commonlyUsed.map((item: any, idx: number) => (
              <Related
                key={item.title}
                image={item.image}
                reverse={!!(idx % 2)}
                title={item.title}
                description={item.description}
                background={item.background}
              />
            ))}
        </div>
      </Container>
      <Container id={'content'}>
        <InfoBlock
          alert
          title={calculator.alert.title}
          description={calculator.alert.description}
        />
      </Container>
    </Page>
  )
}

export default CalculatorPage
