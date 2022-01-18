import { Router } from 'express';
import { tokenPrice } from '../services/pankakeSwap';

const priceRoutes = Router();

priceRoutes.get('/', async (req, res) => {
  try {
    const { token } = req.params;

    const response = await tokenPrice({ token: "0x00e1656e45f18ec6747f5a8496fd39b50b38396d" });

    return res.json({ ...response, updated_at: new Date(response.updated_at) });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
})

export { priceRoutes };