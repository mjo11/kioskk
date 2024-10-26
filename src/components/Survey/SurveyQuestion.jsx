import Container from '@mui/material'

function Question (props){

    return (
        <div> 
          <p>{props.question}</p>
          <div className="choices">

          </div>
        </div>
    )
}

export default Question