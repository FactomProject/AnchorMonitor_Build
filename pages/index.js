import Link from 'next/link'
import Factom from '../assets/factom_horizontal_white'
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Hello Wold.</h1>
            </div>
        </div>
        <style jsx>{`
            .Hero {
                background: url('../images/wallpaper3.jpg');
                height: 920px;
                background-size: cover;
                background-position: center;
                position: relative;
            }
            .HeroGroup {
                margin: 0 auto;
                max-width: 500px;
                padding: 150px 50px;
                text-align: center;
            }
            .Hero h1 {
                margin: 0;
                color: #000;;
                font-size: 60px;
                line-height: 1.2;
                opacity: 0;
                animation: HeroAnimation  3s ;
                animation-fill-mode: forwards; 
                animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .Hero p {
                color: rgba(255, 255, 255, 0.8);
                font-size: 30px;
                line-height: 1.5;
                animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
                opacity: 0;
            }
            .Hero a {
                font-size: 17px;
                font-weight: 600;
                color: white;
                text-transform: uppercase;
                background: rgba(0, 0, 0, 0.7);
                padding: 9px 20px;
                border: 1px solid rgba(255, 255, 255, 0.25);
                border-radius: 20px;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .Hero a:hover {
                background: white;
                color: black;
            }
            @media (max-width: 640px) {
                .HeroGroup {
                    padding: 100px 20px;
                }

                .Hero h1 {
                    font-size: 40px;
                }

                .Hero p {
                    font-size: 24px;
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
    </Layout>
)