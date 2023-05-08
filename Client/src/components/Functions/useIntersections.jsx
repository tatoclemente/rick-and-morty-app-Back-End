import { useState, useEffect, useRef } from "react";

export default function useIntersection(opciones = {}) {
  const [isIntersecting, setisIntersecting] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const elemento = myRef.current;

    const observador = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setisIntersecting(entry.isIntersecting);
      });
    }, opciones);
    if (elemento) observador.observe(elemento);

    return () => {
      if (elemento) {
        observador.unobserve(elemento);
      }
    };
  }, []);

  return [myRef, isIntersecting]
}
