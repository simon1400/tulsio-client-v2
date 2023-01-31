import { NextApiRequest, NextApiResponse } from "next";

var axios = require('axios');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method)
  if (req.method === 'POST') {
    console.log(req.body.email)
    const result = await axios({
      method: 'post',
      url: 'https://api2.ecomailapp.cz/lists/3/subscribe',
      data: JSON.stringify({
        subscriber_data: {
          email: req.body.email,
        },
        resubscribe: true
      }),
      headers: {
        'Content-Type': 'application/json',
        'key': process.env.ECOMAIL
      },
    }).catch((err: any) => {
      console.log('err', err)
      res.status(500).json({ message: 'Error subscribe', data: JSON.stringify(err.data) })
    })

    res.status(200).json({ message: 'Success subscribe', data: JSON.stringify(result.data) })
  }else{
    res.status(200).send(res)
  }  
}


