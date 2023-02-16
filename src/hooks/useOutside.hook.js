import { useEffect } from 'react';

function useOutside(elRef, handler, attached = true) {
   useEffect(() => {
      if (!attached) return;

      const onClick = e => {
         if (!elRef.current.contains(e.target)) handler();
      };

      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
   }, [attached, elRef, handler]);
}

export default useOutside;