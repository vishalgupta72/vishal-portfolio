import { useRef, useEffect } from "react";

const AnimateScale = ({ children }: any) => {
  const rootDiv = useRef<HTMLDivElement>(null);
  const intersection = useRef<IntersectionObserver>();

  useEffect(() => {
    // use intersection observer to scale it the ref children when children intersecting and scale 0 when not
    intersection.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!(entry.target instanceof HTMLElement)) return;

        if (entry.isIntersecting) {
          // entry.target.classList.remove("scale-0");
          entry.target.classList.remove("translate-y-[100%]");
        } else {
          // entry.target.classList.add("scale-0");
          entry.target.classList.add("translate-y-0");
        }
      });
    }, {});

    if (rootDiv.current && intersection.current) {
      [...rootDiv.current.children].forEach((child) => {
        console.log(child);
        intersection.current?.observe(child);
        // child.classList.add("scale-0");
      });
    }
  }, []);

  return <div ref={rootDiv}>{children}</div>;
};

export default AnimateScale;
