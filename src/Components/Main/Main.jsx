import React,{ useState } from 'react'
import Results from "../Results/Results"
import "./Main.styles.css"

import { connect } from "react-redux"

import { Input,Button } from 'antd';



function Main(props) {
    const [input,setInput] = useState("")



    const handleChange = e => {
        let { value } = e.target
        setInput(value)
    }


    return (
        <div>
            <h2>Search for an artist, movie, audio track, album... anything</h2>
            <br />
            <Input onChange={handleChange}/>
            <Button onClick={() => props.handleClick(input)}>Search</Button>
            {props.searched_data.length>0 ?
            <Results results={props.searched_data}/>
            :
            <h3 className="empty">Wow, such empty</h3>}
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        searched_data : state.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick : (item) => dispatch({ type:"SEARCH",payload: item })
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main);
