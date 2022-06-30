import React, {useRef, useContext} from "react";
import { scrollContext } from "../utils/scrollObserver";

const Crafts = ()=> {

  const refContainer = useRef<HTMLDivElement>(null)
  const {scrollY} = useContext(scrollContext);

  let progress = 0;

  const {current: elContainer} = refContainer;

  if(elContainer){
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  return (
    <div ref={refContainer} className="h-screen bg-teal-600">
      <div className="py-44">{}</div>
    </div>
  )
}

export default Crafts;