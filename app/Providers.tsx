'use client'

import { ThemeProvider } from 'next-themes'

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider enableSystem defaultTheme='system' attribute='class'>
            {children}
        </ThemeProvider>
    )
}

export default Providers