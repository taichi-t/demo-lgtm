import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query.japaneseText);
  res.status(200).json({ japaneseText: req.query.japaneseText });
};

export default handler;
