import Head from 'next/head'
import Link from 'next/link'
import FactomIcon from '../assets/factom_horizontal_white'

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header className="Header">
            <nav className="HeaderGroup">
                <Link href='/'>
                    <a className="FactomIcon">
                        <span>Factom Anchor Monitor</span>
                    </a>
                </Link>
                |
                <Link href='/about'>
                    <a>About</a>
                </Link>
                |
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </nav>
        </header>

        {children}

        <footer>{'I`m here to stay'}</footer>

        <style jsx global>{`
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                font-size: 20px;
                line-height: 1.3;
            }
            html {
                font-size: 62.5%;
            }
        `}</style>

        <style jsx>{`
            .Header {
                position: fixed;
                width: 100%;
                padding: 50px 0;
                z-index: 100;
                background: #142C3C;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .HeaderGroup {
                max-width: 800px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: repeat(5, auto);
                align-items: center;
                justify-items: center;
            }
            .Header a {
                color: white;
                font-weight: 700;
            }

        `}</style>
    </div>
)