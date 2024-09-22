import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const result = await axios({
      method: 'post',
      url: 'https://api2.ecomailapp.cz/lists/3/subscribe',
      data: JSON.stringify({
        subscriber_data: {
          email: req.body.email,
        },
        resubscribe: true,
      }),
      headers: {
        'Content-Type': 'application/json',
        key: process.env.ECOMAIL,
      },
    }).catch((err: any) => {
      console.log('err', err)
      res.status(500).json({ message: 'Error subscribe', data: JSON.stringify(err.data) })
    })
    // @ts-expect-error: some error
    res.status(200).json({ message: 'Success subscribe', data: JSON.stringify(result.data) })
  } else {
    res.status(200).send(res)
  }
}
