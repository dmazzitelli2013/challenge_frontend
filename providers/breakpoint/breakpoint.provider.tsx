import { useBreakpointValue } from 'native-base'
import React from 'react'
import { BreakpointContext } from '@context'

const ClientBreakpointProvider: React.FC = ({ children }) => {
  const breakpoints = useBreakpointValue({
    base: {
      isMobile: true,
      isTablet: false,
      isDesktop: false,
      isBigDesktop: false,
    },
    sm: {
      isMobile: false,
      isTablet: true,
      isDesktop: false,
      isBigDesktop: false,
    },
    lg: {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isBigDesktop: false,
    },
    xl: {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isBigDesktop: true,
    },
  })

  return (
    <BreakpointContext.Provider value={breakpoints}>
      {children}
    </BreakpointContext.Provider>
  )
}

const BreakpointProvider = (props: any) => {
  if (typeof window === 'undefined') return null
  return <ClientBreakpointProvider {...props} />
}

export default BreakpointProvider
