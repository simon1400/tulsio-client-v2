import type { FC } from 'react'

import Head from 'next/head'
import { SvgIcon, Typography } from '@mui/material'
import Content from 'components/Content'
import DOMPurify from 'isomorphic-dompurify'
import Chevron from 'public/icons/chevron.svg'

import { Accordion, AccordionDetails, AccordionSummary, FaqItemS } from './styles'

interface IFaqItem {
  _highlightResult?: {
    title: {
      value: string
    }
  }
  title: string
  answer: string
}

const FaqItem: FC<{ data: IFaqItem }> = ({ data }) => {
  const faqData = [
    {
      question: data.title,
      answer: data.answer
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntityOfPage": "https://tulsio.com/cs",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
    
  }

  return (
    <FaqItemS>
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Accordion>
        <AccordionSummary
          aria-controls={'panel1a-content'}
          expandIcon={<SvgIcon component={Chevron} fontSize={'medium'} sx={{ color: 'white' }} />}
        >
          <Typography
            component={'h2'}
            variant={'h4'}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?._highlightResult?.title.value || data.title),
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Content removePadding>
            <Typography
              variant={'body2'}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.answer) }}
            />
          </Content>
        </AccordionDetails>
      </Accordion>
    </FaqItemS>
  )
}

export default FaqItem
