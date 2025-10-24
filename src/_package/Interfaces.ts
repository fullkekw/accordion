export type StateSetter<S = any> = React.Dispatch<React.SetStateAction<S>>



interface IAccordionSharedProps {
  /**
     * Whether only one accordion can be active per time. If one accordion will be opened, others will be closed
     */
  singleOpen?: boolean

  /**
   * Whether component should be without styling
   * 
   * @default false
   */
  headless?: boolean
}

export interface IAccordionWrapperContext extends Required<IAccordionSharedProps> {

}

export interface IAccordionContext {
  disabled: boolean
  isActive: boolean

  toggle(): void
}



export interface IAccordionWrapperProps extends IAccordionSharedProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface IAccordionProps {
  children: React.ReactNode | React.ReactNode[]

  disabled?: boolean

  isActive?: boolean
  setIsActive?: StateSetter<boolean>
}

export interface IAccordionPanelProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface IAccordionHeaderProps {
  children: React.ReactNode | React.ReactNode[]
}