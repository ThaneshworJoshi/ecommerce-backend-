import { Router } from 'express';
import { 
  getHomepageData, 
  getHomepageCategories, 
  getHomepageProducts 
} from '@/controllers/homepageController';

const router: Router = Router();

// GET /api/homepage - Get all homepage data (categories + products)
router.get('/', getHomepageData);

// GET /api/homepage/categories - Get only categories
router.get('/categories', getHomepageCategories);

// GET /api/homepage/products - Get only products
router.get('/products', getHomepageProducts);

export default router; 