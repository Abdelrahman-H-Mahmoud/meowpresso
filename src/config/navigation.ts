export interface NavItem {
  path: string;
  label: string;
  isVisible: boolean;
  type?: 'link' | 'action';
  requireAuth?: boolean;
  hideIfAuth?: boolean;
  action?: () => void;
}

export const navigationItems: NavItem[] = [
  {
    path: '/recipes',
    label: 'Recipes',
    isVisible: true,
    type: 'link'
  },
  {
    path: '/products',
    label: 'Shop',
    isVisible: true,
    type: 'link'
  },
  {
    path: '/blogs',
    label: 'Blog',
    isVisible: true,
    type: 'link'
  },
  {
    path: '/stores',
    label: 'Stores',
    isVisible: true,
    type: 'link'
  },
  {
    path: '/brew',
    label: 'Start Brewing',
    isVisible: true,
    type: 'action',
    requireAuth: true
  }
]; 