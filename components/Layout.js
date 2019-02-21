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
                <div className="InsideHeaderGroup">
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
                </div>
            </nav>
        </header>

        {children}

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

        <style jsx="true">{`
            .PageLayout {
                display: grid;
                grid-template-columns: 3rem 7fr 3rem;
                grid-template-rows:  7rem minmax(100px, 950px) 1fr;
                grid-template-areas: 
                "mainheader mainheader mainheader"
                ". table  ."
                "footer footer footer";
                grid-row-gap: 15px;
            }
            .Header {
                position: fixed;
                grid-area: mainheader;
                height: 13rem;
                width: 100%;
                padding: 0;
                background: #142C3C;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .HeaderGroup {
                margin: 0 auto;
                display: grid;
                width: auto;
                grid-template-columns: 3rem 1fr 3rem;
                grid-template-areas:
                '. headerinside  .';
                grid-gap: 10px;
                padding: 10px;
            }
            .InsideHeaderGroup {
                grid-area: headerinside;
                display: grid;
                max-width: 1400px;
                grid-template-columns:  1fr 6fr 1fr;

                grid-template-areas:
                'header .  menu';
                padding: 10px;
                align-items: center;
                justify-items: center;
                justify-self: center;
            }
            .Header a {
                color: white;
                font-weight: 700;
            }
            .FactomIcon {
                width: 13rem;
                grid-area: header;
                justify-self: start;
                animation: HeroAnimation  3s ;
                animation-fill-mode: forwards; 
                animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
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
                justify-content: center;
                // opacity: 0.5;
            }
            @media (max-width: 640px) {
                .HeaderGroup {
                    padding: 10px;
                }
                .PageLayout {
                    grid-template-rows:  4.5rem minmax(100px, 980px) 1fr;
                }
                .FactomIcon {
                    width: 10rem;
                }
            }
            @keyframes HeroAnimation {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
            
                100% {
                    opacity: 1;
                    transform: translateY(0px);
                }
            }

        `}</style>
    </div>
)