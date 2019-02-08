import Head from 'next/head'
import Link from 'next/link'
import FactomIcon from '../assets/factom_horizontal_white'

export default ({ children, title = 'This is the default title' }) => (
    <div className="PageLayout">
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header className="Header">
            <nav className="HeaderGroup">
                <Link href={`/BTC`}>
                    <a className="FactomIcon">
                        <h1><FactomIcon />
                            <span style={{ display: "none" }}>Factom Anchor Monitor</span>
                        </h1>
                    </a>
                </Link>
                <div className="BTCorETH">
                    <Link href={`/BTC`}>
                        <a>
                            BTC
                        </a>
                    </Link>
                    <Link href={`/ETH`}>
                        <a>
                            ETH
                        </a>
                    </Link>
                </div>
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
            a {
                text-decoration: none;
            }
        `}</style>

        <style jsx>{`
            .PageLayout {
                display: grid;
                grid-template-columns: .3fr 1fr 1fr 1fr .3fr;
                grid-template-rows:  7rem minmax(100px, 980px) 1fr;
                grid-template-areas: 
                ". mainheader mainheader mainheader ."
                ". table table table ."
                "footer footer footer footer footer";
                grid-row-gap: 15px;
            }
            .Header {
                position: fixed;
                grid-area: mainheader;
                height: 13rem;
                width: 100%;
                padding: 0;
                // z-index: -1;
                background: #142C3C;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .HeaderGroup {
                grid-area: table;
                margin: 0 auto;
                display: grid;
                grid-template-columns: .3fr 1fr 1fr 1fr .3fr;

                grid-template-areas:
                '. header .  menu .';
                grid-gap: 10px;
                padding: 10px;
                padding-top:30px;
                align-items: center;
                justify-items: center;
                justify-self: center;
            }
            .Header a {
                color: white;
                font-weight: 700;
            }
            .FactomIcon {
                margin-left: 1rem;
                width: 13rem;
                grid-area: header;
                justify-self: start;
            }
            .FactomIcon h1 {
                margin: 9px 0 0 0;
            }
            .BTCorETH {
                display: grid;
                grid-template-columns: repeat(2, auto);
                justify-self: end;
                grid-area: menu;
                align-items: stretch;
            }
            .BTCorETH a {
                position: relative;
                overflow: hidden;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                padding: 0 2.4rem;
                font-size: 1.4rem;
                font-weight: 600;
                color: #FFF;
                // opacity: 0.5;
            }

        `}</style>
    </div>
)