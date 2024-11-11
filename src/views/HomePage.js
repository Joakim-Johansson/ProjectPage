import { Divider } from "@mui/material";
import Team
 from "../components/Team";
function HomePage() {
    return (
      <div className="HomePage">

        <div style={{flexDirection: 'column', width: '70%', display: 'flex', justifyContent: 'center', padding: '12px', margin: '0 auto' }}>
            <h3>Project Goals</h3>
            <p>The goal of this project is to convert a physical board game called Mind MGMT into a digital one. The game should support multiplayer functionality and allow multiple people to play simultaneously from different computers. Since the original game requires five players, we want to add the possibility of playing against an AI, in case less than five persons are playing the game. The rules of the digital game will be based on the original ones, but we might deviate from them a bit in order to create a better game experience. </p>
            <h3>Current state of the project</h3>
            </div>
            <Divider></Divider>

            <img src="assets/group.jpg" style={{ width: '30%', padding: '2%'}}></img>
            <Team></Team>
      </div>
    );
  }
  
  export default HomePage;
  