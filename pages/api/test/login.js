// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
//   message: string
// }

export const USERS = [
  {
    id: "1",
    name: "A Train",
    username: "train",
    password: "0000",
    email: "atrain@example.com"
  },
  {
    id: "2",
    name: "B Line",
    username: "line",
    password: "0000",
    email: "bline@example.com"
  },
  {
    id: "3",
    name: "C Park",
    username: "park",
    password: "0000",
    email: "cwhat@example.com"
  },
  {
    id: "4",
    name: "D Town",
    username: "town",
    password: "0000",
    email: "dtown@example.com"
  }
];

export default async function handler(req, res) {
  //const body = await req.json(); // TODO: check with Page router doc
  const { username, password } = req.body;
  const user = USERS.filter((user) => user.name === username);
  if (!user) {
    return res.status(200).json({ user: null, message: "User not found." });
  } else {
    // not really authenticate user with password for now
    return res.status(200).json({ user: user });
  }
}
