import React,{ useState } from 'react'

import "./Individual.styles.css"

import CancelIcon from '@material-ui/icons/Cancel'

function Individual({ data }) {

    const [indi_data,setIndi_Data] = useState(data)

    const handleClose = e => {
        setIndi_Data(null)
    }



    return (
        <div>
        {indi_data ? 
            <div className="individual_data">
            {/* <h3 onClick={handleClose} className="close">Close</h3> */}
            <CancelIcon onClick={handleClose} className="close" style={{height:'30px',width:'30px'}}/>
            <img src={data.artworkUrl100} alt={data.trackName} />
                <div className="individual_data_content">
                
                <h1>{data.trackName}</h1>
                <h3>{data.collectionName}</h3>
                {/* <a href={data.artistViewUrl} target="_blank">View this artist in Itunes</a> */}
                <a href={data.previewUrl} target="_blank">Preview</a>
                <h4>Song Price:{data.trackPrice}</h4>
                <h4>Collection Price:{data.collectionPrice}</h4>
                </div>
            </div>
            :
            null}
         </div>
    )
}

export default Individual
