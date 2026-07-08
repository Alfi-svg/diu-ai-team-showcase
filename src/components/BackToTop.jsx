import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button className={`backTop ${show ? 'showBackTop' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <FaArrowUp />
    </button>
  );
}
