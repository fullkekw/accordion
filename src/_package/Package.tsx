import './styles.scss';

import { createContext, FC, useContext, useEffect, useId, useRef, useState } from 'react';
import cn from 'classnames';

import { IAccordionContext, IAccordionHeaderProps, IAccordionPanelProps, IAccordionProps, IAccordionWrapperContext, IAccordionWrapperProps } from './Interfaces';
import { useMixedState } from './useMixedState';



class EFKW extends Error {
  constructor(msg: string) {
    super(msg);

    this.name = 'error at [@fullkekw/accordion]';
  }
}



// @ts-expect-error need empty
const AccordionWrapperContext = createContext<IAccordionWrapperContext>();

// @ts-expect-error need empty
const AccordionContext = createContext<IAccordionContext>();



/** 
 * Accordion group context provider
 */
export const AccordionWrapper: FC<IAccordionWrapperProps> = ({ singleActive: singleOpen, headless, children }) => {
  const [resetActiveStateFlag, setResetActiveStateFlag] = useState('');



  function resetActiveStates(initiator: string) {
    setResetActiveStateFlag(initiator);
  }



  return <AccordionWrapperContext.Provider value={{
    singleActive: singleOpen ?? false,
    headless: headless ?? false,
    resetActiveStateFlag,
    resetActiveStates,
  }}>
    {children}
  </AccordionWrapperContext.Provider>;
};



/** 
 * Accordion item
 * 
 * @requires AccordionHeader, AccordionPanel to be provided 
 */
export const Accordion: FC<IAccordionProps> = ({ isActive: isa, setIsActive: sisa, children, disabled }) => {
  const ctx = useContext(AccordionWrapperContext);
  const id = useId();

  const [isActive, setIsActive] = useMixedState<boolean>(false, isa, sisa);

  const paddingsRef = useRef([0, 0]); // X, Y
  const itemRef = useRef<HTMLDivElement>(null);



  // Validate inners
  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const headers = item.querySelectorAll('.fkw-accordion-header');
    const panels = item.querySelectorAll('.fkw-accordion-panel');

    if (!headers || headers.length !== 1) throw new EFKW(`Cannot find accordion header or there are too many of these inside item (#${id})`);
    if (!panels || panels.length !== 1) throw new EFKW(`Cannot find accordion panel or there are too many of these inside item (#${id})`);
  }, []);

  // Handle initial load
  useEffect(() => {
    const item = itemRef.current as HTMLDivElement;
    if (!item) return;

    const panel = item.querySelector('.fkw-accordion-panel') as HTMLDivElement;

    const paddings = window.getComputedStyle(panel).padding;
    const transition = window.getComputedStyle(panel).transition;

    const paddingX = Number(paddings.split(' ')[1]?.replace('px', '') ?? '0');
    const paddingY = Number(paddings.split(' ')[0]?.replace('px', '') ?? '0');

    paddingsRef.current = [paddingX, paddingY];

    panel.style.transition = 'none';

    setTimeout(() => {
      panel.style.transition = transition;
    }, 1);
  }, []);

  // Handle isActive
  useEffect(() => {
    const item = itemRef.current as HTMLDivElement;
    const panel = item.querySelector('.fkw-accordion-panel') as HTMLDivElement;
    const paddings = paddingsRef.current;



    if (isActive) {
      panel.style.padding = `${paddings[1]}px ${paddings[0]}px`;
      panel.style.maxHeight = `${Math.round(paddings[1] * 2) + panel.scrollHeight}px`;
    } else {
      panel.style.padding = `0px ${paddings[0]}px`;
      panel.style.maxHeight = '0';
    }
  }, [isActive]);

  // Handle reset active state
  useEffect(() => {
    if (ctx.resetActiveStateFlag !== id) setIsActive(false);
  }, [ctx.resetActiveStateFlag]);



  function toggle(to?: boolean) {
    // Reset states
    if (ctx.singleActive) ctx.resetActiveStates(id);

    setIsActive(prev => to ?? !prev);
  }


  return <AccordionContext.Provider value={{
    id,
    isActive,
    toggle,
    disabled: disabled ?? false
  }}>
    <div className={cn(`fkw-accordion`, isActive && 'fkw-accordion--active', disabled && 'fkw-accordion--disabled', !ctx.headless && 'fkw-accordion--styled')} ref={itemRef} id={`fkw-accordion-${id}`}>
      {children}
    </div>
  </AccordionContext.Provider>;
};



/** 
 * Accordion header (button)
 */
export const AccordionHeader: FC<IAccordionHeaderProps> = ({ children, className, onClick, ...props }) => {
  const ctx = useContext(AccordionContext);



  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);

    ctx.toggle();
  }



  return <button className={cn(`fkw-accordion-header`, ctx.isActive && 'fkw-accordion-header--active', ctx.disabled && 'fkw-accordion-header--disabled', className)} onClick={toggle} tabIndex={0} disabled={ctx.disabled} id={`fkw-accordion-header-${ctx.id}`} aria-controls={`fkw-accordion-panel-${ctx.id}`} {...props}>
    {children}
  </button>;
};



/** 
 * Accordion content
 */
export const AccordionPanel: FC<IAccordionPanelProps> = ({ children, className, ...props }) => {
  const ctx = useContext(AccordionContext);

  return <div className={cn(`fkw-accordion-panel`, className)} id={`fkw-accordion-panel-${ctx.id}`} role="region" aria-hidden={ctx.isActive} aria-labelledby={`fkw-accordion-${ctx.id}`} tabIndex={0} {...props}>
    {children}
  </div>;
};
