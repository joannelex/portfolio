// src/components/ScrollToTopOnProjectPage.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTopOnProjectPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith('/projects/')) {
      window.scrollTo(0,0);
    }
  }, [pathname]);

  return null;
}
