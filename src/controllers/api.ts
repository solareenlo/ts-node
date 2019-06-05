import { Request, Response, NextFunction } from 'express';

export const home = (req: Request, res: Response, next: NextFunction) => {
  const posts = [
    {
      id: '123',
      title: 'First title',
      content: 'First content',
      imagePath: 'http://localhost:3001/images'
    }
  ];
  res.status(200).json({
    message: 'fetch success',
    posts: posts
  });
};

export const calculate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      message: 'Post success!'
    });
  } catch {
    res.status(500).send('Server Error!');
  }
};
