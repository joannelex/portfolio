import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTopOnProjectPage() {
  const { pathname } = useLocation();

  // useLayoutEffect(() => {
  //   if (pathname.startsWith('/projects/')) {
        
  //     const root = document.documentElement;
  //     const body = document.body;

  //     // previous inline styles 
  //     const prevScrollBehavior = root.style.scrollBehavior;
  //     const prevSnap = body.style.scrollSnapType;

  //     // kill smooth scrolling + snap 
  //     root.style.scrollBehavior = 'auto';
  //     body.style.scrollSnapType = 'none';

  //     window.scrollTo({top: 0, left: 0, behavior: 'auto'});

  //     // restore on the next frame so the page behaves normally after load
  //     const id = requestAnimationFrame(() => {
  //       body.style.scrollSnapType = prevSnap || '';
  //       root.style.scrollBehavior = prevScrollBehavior || '';
  //     });

  //     return () => cancelAnimationFrame(id);
  //     return null;
  //   }}, [pathname]
  // );

  useEffect(() => {
    if (pathname.startsWith('/projects/')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]); 
}