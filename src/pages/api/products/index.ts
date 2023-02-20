// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      id: string
      title?: string
      content?: string
    }
  | { name: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    return res.status(404).json({ name: 'method not supported' })
  }

  const resposne = await fetch(process.env.API_URL + '/post?page=1&limit=10')
  const data = await resposne.json()
  res.status(200).json(data)
}
