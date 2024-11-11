import { Divider } from "@mui/material";
import Team
 from "../components/Team";
function HomePage() {
    return (
      <div className="HomePage">
            <h3>Project Goals</h3>
            <h3>Current state of the project</h3>
            <Divider></Divider>

            <img src="assets/group.jpg" style={{ width: '30%', padding: '2%'}}></img>
            <Team></Team>
      </div>
    );
  }
  
  export default HomePage;
  