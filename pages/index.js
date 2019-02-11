import React, { Component } from 'react'
import Layout from '../components/Layout'
import moment from 'moment'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null
        }
    }
    static getInitialProps({ query: { name, data } }) {
        console.log("name: ", name)
        return { name: name, data: data }
    }

    render() {
        let { name } = this.state;
        let { data } = this.props;
        console.log("client data", data)

        return (
            <Layout title='Bitcoin Anchors'>
                <div className="Hero">
                    <div className="HeroGroup">
                        <h1>Pending {name} Anchors</h1>
                        {typeof data === "string" ? (
                            <div>{data}</div>
                        ) : (
                                <table className="FullTable">
                                    <thead>
                                        <tr>
                                            <th className="headerheight">HEIGHT</th>
                                            <th className="headertime">START TIME</th>
                                            <th className="headerkeymr">KEYMR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((anchor) => (
                                            <tr key={`${anchor._id}`} className="anchor-row">
                                                <td key={`${anchor._id}--height`} style={{ paddingLeft: "1.5rem !important" }} className="bodyheight">{anchor.height}</td>
                                                <td key={`${anchor._id}--started_at`} className="bodystarted">{moment(anchor.started_at).format('YYYY-MM-DD HH:mm')}</td>
                                                <td key={`${anchor._id}--keymr`} className="bodykeymr">{anchor.keymr}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                    </div>
                </div>



                <style jsx="true">{`
                    .Hero {
                        background-size: cover;
                        background-position: center;
                        grid-area: table;
                        border-radius: 0.4rem;
                        z-index: 1;
                        background: #FFF;
                        -webkit-box-shadow: 0 0 8px 0 rgba(0,0,0, 0.12);
                        box-shadow: 0 0 8px 0 rgba(0,0,0, 0.9);
                    }
                    .HeroGroup {
                        margin: 0 auto;
                        // max-width: 500px;
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
                    .Hero h1 {
                        margin: 0;
                        grid-area: tableheader;
                        justify-self: start;
                        color: #000;;
                        font-size: 2rem;
                        font-weight: 700;
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
                        grid-template-columns: minmax(100px, 140px) minmax(100px, 200px) minmax(200px, 1fr);
                        grid-template-areas: " colheight coltime colkeymr";
                    }
                    table thead th {
                        background: #E8E8E8;
                        font-size: 60%;
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
                    thead th:not(:first-child) {
                        padding-left: 0 !important;
                    }
                    tbody td {
                        font-size: 60%;
                        padding: 1.5rem;
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

// const Stylez = () => (

// )