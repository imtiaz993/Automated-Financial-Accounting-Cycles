import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader   from "react-spinners/ClipLoader"; 
import BarLoader   from "react-spinners/BarLoader"; 
import BeatLoader   from "react-spinners/BeatLoader"; 
import BounceLoader   from "react-spinners/BounceLoader"; 
import CircleLoader   from "react-spinners/CircleLoader"; 
import ClockLoader   from "react-spinners/ClockLoader"; 
import ClimbingBoxLoader   from "react-spinners/ClimbingBoxLoader"; 
import DotLoader   from "react-spinners/DotLoader"; 
import FadeLoader   from "react-spinners/FadeLoader"; 
import GridLoader   from "react-spinners/GridLoader"; 
import HashLoader   from "react-spinners/HashLoader"; 
import MoonLoader   from "react-spinners/MoonLoader"; 
import PropagateLoader   from "react-spinners/PropagateLoader"; 
import PacmanLoader   from "react-spinners/PacmanLoader"; 
import PuffLoader   from "react-spinners/PuffLoader"; 
import PulseLoader   from "react-spinners/PulseLoader"; 
import RingLoader   from "react-spinners/RingLoader"; 
import RiseLoader   from "react-spinners/RiseLoader"; 
import RotateLoader   from "react-spinners/RotateLoader"; 
import ScaleLoader   from "react-spinners/ScaleLoader"; 
import SyncLoader   from "react-spinners/SyncLoader"; 


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

function MySpinner() {


  return (
    <div className="sweet-loading"> 
<BeatLoader css={override} size={50} />  


      
{ /*
<ClipLoader css={override} size={150} /> 
<BarLoader css={override} size={150} />  
<BeatLoader css={override} size={150} />  
<BounceLoader css={override} size={150} />  
<CircleLoader css={override} size={150} />  
<ClimbingBoxLoader css={override} size={150} />  
<ClockLoader css={override} size={150} />  
<DotLoader css={override} size={150} />  
<FadeLoader css={override} size={150} />  
<GridLoader css={override} size={150} />  
<HashLoader css={override} size={150} />  
<MoonLoader css={override} size={150} />  
<PacmanLoader css={override} size={150} />  
<PropagateLoader css={override} size={150} />  
<PuffLoader css={override} size={150} />  
<PulseLoader css={override} size={150} />  
<RingLoader css={override} size={150} />  
<RiseLoader css={override} size={150} />  
<RotateLoader css={override} size={150} />  
<ScaleLoader css={override} size={150} />
<SyncLoader css={override} size={150} />  

*/}
    </div>
  );
}

export default MySpinner;