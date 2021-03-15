const {Grid} = MaterialUI

const pads= [
  {
    key: 'Q',
    keycode: 81,
    id: 'drum1',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3'
  },
  {
  key: 'W',
  keycode: 87,
  id: 'drum2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    keycode: 69,
    id: 'drum3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
{
    key: 'A',
    keycode: 65,
    id: 'drum4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
{
    key: 'S',
    keycode: 83,
    id: 'drum5',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
{
    key: 'D',
    keycode: 68,
    id: 'drum6',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
{
    key: 'Z',
      keycode: 90,      
    id: 'drum7',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
{
    key: 'X',
      keycode: 88,
    id: 'drum8',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
{
    key: 'C',
    keycode: 67,
    id: 'drum9',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }  
]


function Pad(props){
  
  
  const playAudio = (e) => { 
  document.getElementById(props.padKey).play();
  props.setStringPad(props.padId)
  }
  
  React.useEffect (() => {
  window.addEventListener('keydown', handleKey);
  return () => {
  window.removeEventListener('keydown', handleKey)
  }});
  
  function handleKey(e) { 
    if (e.keyCode === props.keyCode) { 
    playAudio();
  }}
  
  
  return(
    <>                  
    <Grid item xs={4} align="center">      
    <div
    className="drum-pad"
    id={props.padId} 
    onClick={playAudio}
    >
    <audio className="clip" id={props.padKey} src={props.padUrl}  />
    {props.padKey} 
    </div>
    </Grid>
    </>   
    )}  

function Drum() { 
   const [stringPad, setStringPad] = React.useState('')
  return (
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    id="drum-machine">
   
   <Grid item 
  container
  direction="row"
  justify="center"
  alignItems="center"
  xs={6} id="display" spacing={1}> 
     <Grid item xs={12}>
       <h1>Drum Machine</h1> 
        <p>Vous entendez : {stringPad}</p>
       </Grid>
    
      {pads.map((pad, index) => {
       return (
           <Pad
             key={pad.index} 
             keyCode={pad.keycode}
             padKey={pad.key}
             padId={pad.id}
             padUrl={pad.url}
             setStringPad={setStringPad}
            />
       )}
                 
             
           )}
     </Grid>
  </Grid>       
  )
}
ReactDOM.render(
  <Drum />, document.getElementById("root")
)
