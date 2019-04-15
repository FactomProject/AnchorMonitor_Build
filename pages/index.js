import React, { Component } from 'react'
import Layout from '../components/Layout'
import moment from 'moment'
import axios from 'axios'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name === 'BTC' ? 'Bitcoin' : props.name === 'ETH' ? 'Ethereum' : null,
            offNotiToggle: false,
            pendingNotiToggle: false,
            lastOff: this.props.lastOff,
            pendingNoti: this.props.pendingNoti,
        }

        this.showMenuOffNoti = this.showMenuOffNoti.bind(this);
        this.closeMenuOffNoti = this.closeMenuOffNoti.bind(this);
        this.offNotiSelect = this.offNotiSelect.bind(this);
        this.showMenuPendingNoti = this.showMenuPendingNoti.bind(this);
        this.closeMenuPendingNoti = this.closeMenuPendingNoti.bind(this);
        this.pendingNotiSelect = this.pendingNotiSelect.bind(this);

        setInterval(() => {
            Main.getInitialProps
        }, 2000)
    }

    static getInitialProps({ query: { name, data, lastConf, balance, lastOff, pendingNoti } }) {
        return { name: name, data: data, lastConf: lastConf, balance: balance, lastOff: lastOff, pendingNoti: pendingNoti }
    }

    showMenuOffNoti = (event) => {
        event.preventDefault();
        this.setState({ offNotiToggle: true }, () => {
            document.addEventListener('click', this.closeMenuOffNoti);
        });
    }

    closeMenuOffNoti = () => {
        this.setState({ offNotiToggle: false }, () => {
            document.removeEventListener('click', this.closeMenuOffNoti);
        });
    }

    offNotiSelect = (event) => {
        if (event.target.value === 30) {
            axios.post(`http://localhost:3000/offnotificationchange`, null, { params: { time: "30 Minutes" } })
            this.setState({
                lastOff: "30 Minutes"
            })
        } else {
            axios.post(`http://localhost:3000/offnotificationchange`, null, { params: { time: event.target.value } }).then(this.forceUpdate())
            this.setState({
                lastOff: event.target.value
            })
        }
    }

    showMenuPendingNoti = (event) => {
        event.preventDefault();
        this.setState({ pendingNotiToggle: true }, () => {
            document.addEventListener('click', this.closeMenuPendingNoti);
        });
    }

    closeMenuPendingNoti = () => {
        this.setState({ pendingNotiToggle: false }, () => {
            document.removeEventListener('click', this.closeMenuPendingNoti);
        });
    }

    pendingNotiSelect = (event) => {
        axios.post(`http://localhost:3000/pendingtimenotification`, null, { params: { time: event.target.value } });
        this.setState({
            pendingNoti: event.target.value
        })
    }

    render() {
        let { name, pendingNotiToggle, offNotiToggle, lastOff, pendingNoti } = this.state;
        let { data, lastConf, balance } = this.props;
        let offHolder = "30 Minutes";
        if (lastOff !== offHolder) {
            offHolder = (lastOff === "1" || lastOff === 1) ? "1 hour" : `${lastOff} hours`
        }
        let countHolder = "1 Block";
        countHolder = (pendingNoti === 1 || pendingNoti === "1") ? `${pendingNoti} Block` : `${pendingNoti} Blocks`;

        return (
            <Layout>
                <div className="Hero">
                    {Array.isArray(data) ? (
                        data.length !== 0 ? (
                            <div className="HeroGroup">
                                <div className="HeroGroupHeader">
                                    <h1>Pending {name} Anchors</h1>
                                    <div className="tableHeaderContent">
                                        <div className="select" style={{ gridArea: "offNoti ", display: "grid", gridTemplateColumns: "255px 130px" }}>
                                            <small style={{ justifySelf: "start" }}>Turn off notifications for: </small>
                                            <span className={`placeholder 
                                                            ${offHolder.length === "30 Minutes".length ? "" : null}
                                                            ${offHolder.length === "1 hour".length ? "short" : null}
                                                            ${offHolder.length === "3 hours".length ? "singlehours" : null}
                                                            ${offHolder.length === "12 hours".length ? "doublehours" : null}
                                                            `} onClick={this.showMenuOffNoti}>{offHolder}</span>
                                            {offNotiToggle ? (
                                                <ul>
                                                    <li onClick={this.offNotiSelect} value="30">30 Minutes</li>
                                                    <li onClick={this.offNotiSelect} value="1">1 hour</li>
                                                    <li onClick={this.offNotiSelect} value="3">3 hours</li>
                                                    <li onClick={this.offNotiSelect} value="6">6 hours</li>
                                                    <li onClick={this.offNotiSelect} value="9">9 hours</li>
                                                    <li onClick={this.offNotiSelect} value="12">12 hours</li>
                                                    <li onClick={this.offNotiSelect} value="24">24 hours</li>
                                                </ul>
                                            ) : (null)}
                                            <input type="hidden" name="changeme" />
                                        </div>
                                        <div className="select" style={{ gridArea: "pendingNoti", display: "grid", gridTemplateColumns: "255px 130px" }}>
                                            <small style={{ justifySelf: "start" }}>Pending count before notifying: </small>
                                            <span className={`placeholder 
                                                            ${countHolder.length === "1 Block".length ? "small" : null}
                                                            ${countHolder.length === "2 Blocks".length ? "doublehours" : null}
                                                            ${countHolder.length === "18 Blocks".length ? "doubleblks" : null}
                                                            ${countHolder.length === "144 Blocks".length ? "tripleblks" : null}
                                                            `} onClick={this.showMenuPendingNoti}>{countHolder}</span>
                                            {pendingNotiToggle ? (
                                                <ul>
                                                    <li onClick={this.pendingNotiSelect} value="1">1 Block</li>
                                                    <li onClick={this.pendingNotiSelect} value="2">2 Blocks</li>
                                                    <li onClick={this.pendingNotiSelect} value="4">4 Blocks</li>
                                                    <li onClick={this.pendingNotiSelect} value="9">9 Blocks</li>
                                                    <li onClick={this.pendingNotiSelect} value="18">18 Blocks</li>
                                                    <li onClick={this.pendingNotiSelect} value="36">36 Blocks</li>
                                                    <li onClick={this.pendingNotiSelect} value="72">72 Blocks</li>
                                                    <li onClick={this.pendingNotiSelect} value="144">144 Blocks</li>
                                                </ul>
                                            ) : (null)}
                                            <input type="hidden" name="changeme" />
                                        </div>
                                        <small style={{ gridArea: "otherHeaderInfo" }}>Last Anchor: {lastConf} | Address Balance: {balance * 0.00000001} | Count: {data.length} | </small>
                                    </div>
                                </div>
                                <table className="FullTable" id="style-7">
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
                                                    {anchor.btc_hash === undefined ? (
                                                        <a style={{ color: "#4A4A4A" }}>{`BTC has not recieved transaction yet.`}</a>
                                                    ) : (
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
                                        <div className="tableHeaderContent">
                                            <div className="select" style={{ gridArea: "offNoti ", display: "grid", gridTemplateColumns: "255px 130px" }}>
                                                <small style={{ justifySelf: "start" }}>Turn off notifications for: </small>
                                                <span className={`placeholder 
                                                            ${offHolder.length === "30 Minutes".length ? "" : null}
                                                            ${offHolder.length === "1 hour".length ? "short" : null}
                                                            ${offHolder.length === "3 hours".length ? "singlehours" : null}
                                                            ${offHolder.length === "12 hours".length ? "doublehours" : null}
                                                            `} onClick={this.showMenuOffNoti}>{offHolder}</span>
                                                {offNotiToggle ? (
                                                    <ul>
                                                        <li onClick={this.offNotiSelect} value="30">30 Minutes</li>
                                                        <li onClick={this.offNotiSelect} value="1">1 hour</li>
                                                        <li onClick={this.offNotiSelect} value="3">3 hours</li>
                                                        <li onClick={this.offNotiSelect} value="6">6 hours</li>
                                                        <li onClick={this.offNotiSelect} value="9">9 hours</li>
                                                        <li onClick={this.offNotiSelect} value="12">12 hours</li>
                                                        <li onClick={this.offNotiSelect} value="24">24 hours</li>
                                                    </ul>
                                                ) : (null)}
                                                <input type="hidden" name="changeme" />
                                            </div>
                                            <div className="select" style={{ gridArea: "pendingNoti", display: "grid", gridTemplateColumns: "255px 130px" }}>
                                                <small style={{ justifySelf: "start" }}>Pending count before notifying: </small>
                                                <span className={`placeholder 
                                                            ${countHolder.length === "1 Block".length ? "small" : null}
                                                            ${countHolder.length === "2 Blocks".length ? "doublehours" : null}
                                                            ${countHolder.length === "18 Blocks".length ? "doubleblks" : null}
                                                            ${countHolder.length === "144 Blocks".length ? "tripleblks" : null}
                                                            `} onClick={this.showMenuPendingNoti}>{countHolder}</span>
                                                {pendingNotiToggle ? (
                                                    <ul>
                                                        <li onClick={this.pendingNotiSelect} value="1">1 Block</li>
                                                        <li onClick={this.pendingNotiSelect} value="2">2 Blocks</li>
                                                        <li onClick={this.pendingNotiSelect} value="4">4 Blocks</li>
                                                        <li onClick={this.pendingNotiSelect} value="9">9 Blocks</li>
                                                        <li onClick={this.pendingNotiSelect} value="18">18 Blocks</li>
                                                        <li onClick={this.pendingNotiSelect} value="36">36 Blocks</li>
                                                        <li onClick={this.pendingNotiSelect} value="72">72 Blocks</li>
                                                        <li onClick={this.pendingNotiSelect} value="144">144 Blocks</li>
                                                    </ul>
                                                ) : (null)}
                                                <input type="hidden" name="changeme" />
                                            </div>
                                            <small style={{ gridArea: "otherHeaderInfo" }}>Last Anchor: {lastConf} | Address Balance: {balance * 0.00000001} | Count: {data.length} | </small>
                                        </div>
                                    </div>
                                    <div className="NoAnchors"><h1 style={{ marginTop: "20%" }}>No pending Anchors!</h1></div>
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
                        padding: 2rem 2.5rem;
                        display: grid;
                            grid-template-columns: 1fr;
                            grid-template-rows:  9rem minmax(300px,720px) 2fr;
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
                    .tableHeaderContent {
                        display: grid;
                        grid-template-columns: auto 1fr;
                            grid-template-rows:  auto 1fr;
                            grid-template-areas: 
                            "pendingNoti ."
                            "offNoti otherHeaderInfo";
                        grid-column-gap: 10px;
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
                    .NoAnchors {
                        justify-self: center;
                    }

                    #style-7::-webkit-scrollbar-track {
                        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                        background-color: #F5F5F5;                                                                     
                    }
                    #style-7::-webkit-scrollbar {
                        width: 10px;
                        background-color: #F5F5F5;
                    }
                    #style-7::-webkit-scrollbar-thumb {
                        background-image: -webkit-gradient(linear,
									   40% 0%,
									   75% 84%,
									   from(#142C3C),
									   to(#142C3C),
									   color-stop(.7,#142c3cb8));
                        /* background-color: #142C3C; */
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
                        padding: 1.2rem;
                        font-weight: 600;
                    }
                    table thead th:first-child {
                        border-top-left-radius: 0.4rem;
                        border-bottom-left-radius: 0.4rem;
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
                    {/* .custom-dropdown {
                        position: relative;
                        display: inline-block;
                        vertical-align: middle;
                        margin: 10px; /* demo only */
                    }

                    .custom-dropdown select {
                        background-color: #2c3e50;
                        color: #fff;
                        font-size: inherit;
                        padding: .5em;
                        padding-right: 2.5em;	
                        border: 0;
                        margin: 0;
                        border-radius: 3px;
                        text-indent: 0.01px;
                        text-overflow: '';
                        -webkit-appearance: button; /* hide default arrow in chrome OSX */
                    }
                    .custom-dropdown::before,
                    .custom-dropdown::after {
                        content: "";
                        position: absolute;
                        pointer-events: none;
                    }

                    .custom-dropdown::after { 
                        content: "\u25bc";
                        height: 1em;
                        font-size: .625em;
                        line-height: 1;
                        right: 1.2em;
                        top: 50%;
                        margin-top: -.5em;
                    }

                    .custom-dropdown::before { 
                        width: 2em;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        border-radius: 0 3px 3px 0;
                    }

                    .custom-dropdown select[disabled] {
                        color: rgba(0,0,0,.3);
                    }

                    .custom-dropdown select[disabled]::after {
                        color: rgba(0,0,0,.1);
                    }

                    .custom-dropdown::before {
                        background-color: rgba(0,0,0,.15);
                    }

                    .custom-dropdown::after {
                        color: rgba(0,0,0,.4);
                    }                     */}


                    .select {
                        position: relative;
                        display: block;
                        width: 100%;
                        text-align: left;
                        user-select: none;
                        -webkit-touch-callout: none;
                    }
                    .placeholder {
                        position: relative;
                        display: block;
                        top: 6px;
                        background-color: #142C3C;
                        z-index: 1;
                        padding: .5em;
                        border-radius: 0.4rem;
                        cursor: pointer;
                        font-size: 70%;
                        color: #cccccc;                        
                        height: 20px;
                        align-self: end;
                    }
                    .placeholder:hover {
                        background: darken(#142C3C,2%);
                    }
                    .placeholder:after {
                        position: absolute;
                        margin-left: 2em;
                        top: 50%;
                        transform: translateY(-50%);
                        font-family: 'FontAwesome';
                        content: '\u25bc';
                        z-index: 10;
                        font-size: 70%;
                    }
                    .short:after {
                        margin-left: 5.5em;
                    }
                    .singlehours:after {
                        margin-left: 4.5em;
                    }
                    .doublehours:after {
                        margin-left: 3.8em;
                    }
                    .doubleblks:after {
                        margin-left: 3.25em;
                    }
                    .tripleblks:after {
                        margin-left: 2.3em;
                    }
                    .small:after {
                        position: absolute;
                        margin-left: 4.7em;
                        top: 50%;
                        transform: translateY(-50%);
                        font-family: 'FontAwesome';
                        content: '\u25bc';
                        z-index: 10;
                        font-size: 70%;
                    }

                    ul {
                        position: absolute;
                        overflow: hidden;
                        overflow-y: auto;
                        width: 35%;
                        background: #fff;
                        border-radius: 2px;
                        top: 100%;
                        left: 64.5%;
                        list-style: none;
                        margin: 5px 0 0 0;
                        padding: 0;
                        z-index: 100;
                        box-shadow: 0 0 8px 0 rgba(0,0,0,0.9);
                    }
                    li {
                        display: block;
                        text-align: left;
                        padding: 0.8em 1em 0.8em 1em;
                        color: #999;
                        cursor: pointer;
                        font-size: 70%;
                    }
                    li:hover {
                        background: #4ebbf0;
                        color: #fff;
                    }


                    @media (min-width: 1235px) {
                        tbody td:first-child .headerheight{
                            padding-left: 2rem;
                        }
                    }
                    @media (max-width: 830px) {
                        .tableHeaderContent {
                            display: grid;
                            grid-template-columns: auto;
                            grid-template-rows:  auto 1fr 45px;
                            grid-template-areas: 
                                "offNoti"
                                "pendingNoti"
                                "otherHeaderInfo";
                            grid-column-gap: 10px;
                            grid-row-gap: 10px;
                        }
                        .tableHeaderContent small {
                            justify-self: start;
                        }
                        .HeroGroup {
                            padding: 30px 20px;
                            grid-template-rows: 10rem minmax(300px,720px) 2fr;
                        }
                    }
                    @media (max-width: 700px) {
                        table  tr {
                            grid-template-columns: minmax(100px,170px) minmax(100px,1fr) minmax(100px,1fr);
                            grid-template-areas: " colheight colkeymr colbtchash "
                        }
                        .headertime, .bodystarted {
                            display: none;
                        }
                    }
                    @media (max-width: 686px) {
                        .HeroGroup {
                            padding: 30px 20px;
                            grid-template-rows: 10rem minmax(300px,720px) 2fr;
                        }
                    }
                    @media (max-width: 644px) {
                        .tableHeaderContent {
                            display: grid;
                            grid-template-columns: auto;
                            grid-template-rows:  auto 1fr 45px;
                            grid-template-areas: 
                                "offNoti"
                                "pendingNoti"
                                "otherHeaderInfo";
                            grid-column-gap: 10px;
                            grid-row-gap: 10px;
                        }
                    
                        .Hero h1 {
                            font-size: 35px;
                            font-weight: 400;
                        }
                    
                        .Hero p {
                            font-size: 24px;
                        }
                    }
                    @media (max-width: 506px) {
                    
                        .Hero h1 {
                            font-size: 25px;
                            font-weight: 400;
                        }
                    
                        .Hero p {
                            font-size: 24px;
                        }

                        .headertime {
                            display: none;
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
