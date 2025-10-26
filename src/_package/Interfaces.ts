export type StateSetter<S = any> = React.Dispatch<React.SetStateAction<S>>



interface IAccordionSharedProps {
  /**
     * Whether only one accordion can be active per time. If one accordion will be opened, others will be closed
     */
  singleActive?: boolean

  /**
   * Whether component should be without styling
   * 
   * @default false
   */
  headless?: boolean
}

export interface IAccordionWrapperContext extends Required<IAccordionSharedProps> {
  resetActiveStateFlag: string
  resetActiveStates(initiator: string): void
}

export interface IAccordionContext {
  id: string
  disabled: boolean
  isActive: boolean

  toggle(): void

  headerId: string
  setHeaderId: StateSetter<string>

  panelId: string
  setPanelId: StateSetter<string>
}



export interface IAccordionWrapperProps extends IAccordionSharedProps {
  children: React.ReactNode | React.ReactNode[]
}



export interface IAccordionProps extends React.DetailsHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]

  disabled?: boolean

  isActive?: boolean
  setIsActive?: StateSetter<boolean>
}



export interface IAccordionHeaderProps extends React.DetailsHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[]
}



export interface IAccordionPanelProps extends React.DetailsHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
}