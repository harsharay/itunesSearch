import React,{ useState } from 'react'
import Individual from "../Individual/Individual"

import { connect } from "react-redux"

import "./Results.styles.css"

function Results({ results,handleSelect,test,handleClick,indi_data }) {

    // const [individual_data,setIndividualData] = useState("")
    // const handleClose = () => {
    //     setIndividualData([])
    // }


    return (
        <>
            <select onChange={e => {
                let option = e.target.value
                handleSelect(option)
            }} className="options-dropdown"
                value={test}>
                <option value="all">All</option>
                <option value="movie">Movie</option>
                <option value="song">Songs</option>
                <option value="album">Albums</option>
            </select>
            <div className="results">
            
                {results.map((item,index) => {
                return(
                    <div key={index} className="indi" onClick={() => {handleClick(item.trackId)}}>
                        <h1>{item.trackName}</h1>
                        <h3>{item.collectionName}</h3>
                        <img src={item.artworkUrl100} alt={item.trackName} />
                        <a href={item.artistViewUrl} target="_blank">View this artist in Itunes</a>
                        <a href={item.previewUrl} target="_blank">Listen to song Preview</a>
                        <h4>Song Price:{item.trackPrice}</h4>
                        <h4>Collection Price:{item.collectionPrice}</h4>
                    </div>
                )
            })}
            </div>
            {indi_data.length>0 ?
                <Individual data={indi_data[0]}/>
                
            :
                null
            }
        </>
    )
}

const mapStatetoProps = state => {
    return {
        test : state.entity,
        indi_data : state.singleData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSelect : (item) => dispatch({ type: "CHANGE_ENTITY", payload: item }),
        handleClick : (item) => dispatch({ type:"INDIVIDUAL_SELECT",payload: item })
    }
}


export default connect(mapStatetoProps,mapDispatchToProps)(Results)
