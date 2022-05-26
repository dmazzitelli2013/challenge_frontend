import { createContext } from 'react'

interface IBreakpointContextValue {
  isMobile?: boolean
  isTablet?: boolean
  isDesktop?: boolean
  isBigDesktop?: boolean
}

const DEFAULT_VALUE: IBreakpointContextValue = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isBigDesktop: false,
}

const BreakpointContext = createContext<IBreakpointContextValue>(DEFAULT_VALUE)

export default BreakpointContext