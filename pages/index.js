import React, { Component } from 'react'
import Layout from '../components/Layout'
import moment from 'moment'
import axios from 'axios'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null
        }

        setInterval(() => {
            Main.getInitialProps
        }, 2000)
    }

    static getInitialProps({ query: { name, data, lastConf, balance } }) {
        return { name: name, data: data, lastConf: lastConf, balance: balance }
    }

    render() {
        let { name } = this.state;
        let { data, lastConf, balance } = this.props;

        return (
            <Layout title='Bitcoin Anchors'>
                <div className="Hero">
                    {Array.isArray(data) ? (
                        data.length !== 0 ? (
                            <div className="HeroGroup">
                                <div className="HeroGroupHeader">
                                    <h1>Pending {name} Anchors</h1>
                                    <small>Last Anchor: {lastConf} | Address Balance: {balance * 0.00000001} | Count: {data.length} | </small>
                                </div>
                                <table className="FullTable">
                                    <thead>
                                        <tr>
                                            <th className="headerheight">HEIGHT</th>
                                            <th className="headertime">START TIME</th>
                                            <th className="headerkeymr">KEYMR</th>
                                            <th className="headerbtchash">BTC HASH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((anchor) => (
                                            <tr key={`${anchor._id}`} className="anchor-row">
                                                <td key={`${anchor._id}--height`} style={{ paddingLeft: "1.5rem !important" }} className="bodyheight">{anchor.height}</td>
                                                <td key={`${anchor._id}--started_at`} className="bodystarted">{moment(anchor.started_at).format('YYYY-MM-DD HH:mm')}</td>
                                                <td key={`${anchor._id}--keymr`} className="bodykeymr"><a href={`http://explorer.factom.com/dblocks/${anchor.keymr}`} target="_blank">{anchor.keymr}</a></td>
                                                <td key={`${anchor._id}--btchash`} className="bodybtchash">
                                                    {anchor.btc_hash === "" ? console.log("Nada") : (
                                                        <a href={`https://www.blockchain.com/btc/tx/${anchor.btc_hash}`} target="_blank">{anchor.btc_hash}</a>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                                <div className="HeroGroup">
                                    <div className="HeroGroupHeader">
                                        <h1>Pending {name} Anchors</h1>
                                        <small>Last Anchor: {lastConf} | Address Balance: {balance / 0.00000001} | Count: {data.length} | </small>
                                    </div>
                                    <div className="NoAnchors"><h1>No pending Anchors!</h1></div>
                                </div>
                            )
                    ) : (
                            <div className="HeroGroup">
                                <div className="HeroGroupHeader">
                                    <h1>Pending {name} Anchors</h1>
                                </div>
                                <div>{data}</div>
                            </div>
                        )}
                </div>



                <style jsx="true">{`
                    .Hero {
                        max-width: 1400px;
                        justify-self: center;
                        width: -webkit-fill-available;
                        grid-area: table;
                        border-radius: 0.4rem;
                        z-index: 1;
                        background: #FFF;
                        -webkit-box-shadow: 0 0 8px 0 rgba(0,0,0, 0.12);
                        box-shadow: 0 0 8px 0 rgba(0,0,0, 0.9);
                        animation: HeroAnimation  3s ;
                        animation-fill-mode: forwards; 
                        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
                    }
                    .HeroGroup {
                        margin: 0 auto;
                        padding: 3rem 3.5rem;
                        display: grid;
                            grid-template-columns: 1fr;
                            grid-template-rows:  5rem minmax(300px, 780px) 2fr;
                            grid-template-areas: 
                            "tableheader"
                            "tablebody"
                            "tablefooter";
                            grid-row-gap: 15px;
                        text-align: center;
                    }
                    .HeroGroupHeader {
                        grid-area: tableheader;
                        display: grid;
                        grid-template-rows: repeat(2, 1fr);
                    }
                    .HeroGroupHeader small {
                        justify-self: end;
                        align-self: end;
                        font-weight: 600;
                    }
                    .Hero h1 {
                        margin: 0;
                        justify-self: start;
                        color: #000;
                        font-size: 2rem;
                        font-weight: 700;
                        line-height: 1.2;
                    }
                    .Hero p {
                        color: rgba(255, 255, 255, 0.8);
                        font-size: 30px;
                        line-height: 1.5;
                        animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
                        opacity: 0;
                    }
                    table {
                        display: block;
                        overflow-x: auto;
                        border-collapse: collapse;
                        text-align: left;
                        white-space: nowrap;
                    }
                    table thead,
                    table tbody {
                        display: grid;
                    }
                    table  tr {
                        display: grid;
                        grid-template-columns: minmax(100px,170px) minmax(100px,200px) minmax(100px,1fr) minmax(100px,1fr);
                        grid-template-areas: " colheight coltime colkeymr colbtchash ";
                    }
                    table thead th {
                        background: #E8E8E8;
                        font-size: 70%;
                        padding: 1.5rem;
                        font-weight: 600;
                    }
                    .headerheight .bodyheight {
                        grid-area:  colheight;
                        padding-right: 0;
                    }
                    .headertime .bodystarted {
                        grid-area: coltime;
                    }
                    .headerkeymr {
                        grid-area: colkeymr;
                    }
                    .headerbtchash {
                        grid-area: colbtchash;
                        
                    }
                    thead th:not(:first-child) {
                        padding-left: 0 !important;
                    }
                    tbody td {
                        font-size: 70%;
                        padding: 1.5rem;
                        letter-spacing: 1.2px;
                        color: #4A4A4A;
                        border-bottom: 1px solid #E9E9E9;
                    }
                    tbody td:not(:first-child) {
                        padding-left: 0 !important;
                    }
                    .bodykeymr {
                        display: block;
                        font-family: 'Roboto Mono', monospace;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .bodykeymr a {
                        text-transform: none;
                        background: none;
                        color: #388FC9;
                    }
                    .bodybtchash {
                        display: block;
                        font-family: 'Roboto Mono', monospace;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .bodybtchash a {
                        text-transform: none;
                        background: none;
                        color: #388FC9;
                    }
                    .NoAnchors {

                    }
                    
                    @media (min-width: 1235px) {
                        tbody td:first-child .headerheight{
                            padding-left: 2rem;
                        }
                    }
                    @media (max-width: 640px) {
                        .HeroGroup {
                            padding: 30px 20px;
                            grid-template-rows: 3.5rem minmax(300px,780px) 2fr;
                        }
                    
                        .Hero h1 {
                            font-size: 35px;
                            font-weight: 400;
                        }
                    
                        .Hero p {
                            font-size: 24px;
                        }
                    }
                    @media (max-width: 450px) {
                    
                        .Hero h1 {
                            font-size: 25px;
                            font-weight: 400;
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
    }
}
