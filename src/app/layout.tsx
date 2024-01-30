import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'styles/main.scss';
import { Footer, Header } from 'components';
import { ContextProvider } from 'context';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NFT от звезд',
    description: 'NFT от звезд',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <head>
                <link href='/favicon1.svg' rel='icon' type='image/x-icon' />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous" />
                <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
            </head>
            <body >
                <ContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ContextProvider>
            </body>
        </html>
    )
}
