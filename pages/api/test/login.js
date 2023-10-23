// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
//   message: string
// }

const USERS = [
  {
    id: "1",
    name: "A Train",
    username: "atrain",
    password: "0000",
    email: "atrain@example.com"
  },
  {
    id: "2",
    name: "B Line",
    username: "bline",
    password: "0000",
    email: "bline@example.com"
  },
  {
    id: "3",
    name: "C What",
    username: "cwhat",
    password: "0000",
    email: "cwhat@example.com"
  },
  {
    id: "4",
    name: "D Town",
    username: "dtown",
    password: "0000",
    email: "dtown@example.com"
  }
];

export default function handler(req, res) {
  const { query, method } = req;
  const { username, password } = req.body;
  const user = USERS.filter((user) => user.name === username);
  if (!user) {
    console.log("🍅 User not found");
    return res
      .status(200)
      .json({ user: null, message: "Failed to find the user." });
  }
  if (user.password === password) {
    return res.status(200).json({ user: user });
  } else {
    return res
      .status(200)
      .json({ user: null, message: "Mismatched username and password" });
  }
}
