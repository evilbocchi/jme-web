import Footer from "#/components/Footer";
import Header from "#/components/Header";
import Navbar from "#/components/Navbar";
import "#/styles/styles.scss";
import { ReactNode } from "react";

const Separator = (props: {children?: ReactNode}) => {
  return (<div className="separator">
    {props.children}
  </div>);
}

const SideContent = (props: {children: ReactNode}) => {
  return (<div className="side-column">
    {props.children}
  </div>);
}


const MainContent = (props: {id: string, children: ReactNode}) => {
  return (<div className="main-column" id={props.id}>
    {props.children}
  </div>);
}

const ContentBlock = (props: {children: ReactNode}) => {
  return (<div className="content-block">
    {props.children}
  </div>);
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="main">
        <h1 id="g1">Find Unlimited Wealth</h1>
        
        <ContentBlock>
          <SideContent>
            <img src="c1.png" width="80%"></img>
          </SideContent>
          <MainContent id="text-left">
            <h2>Build Your Empire</h2>
            <p>Start from $1. Use whatever you have at your disposal to build upon your wealth.</p>
            <p>Find ways to generate more money as the game becomes progressively harder.</p>
          </MainContent>
        </ContentBlock>
        <Separator></Separator>
        <ContentBlock>
          <MainContent id="text-left">
            <h2>Buy The Difficulties</h2>
            <p>Get from The First Difficulty all the way to The Final Difficulty.</p>
            <p>Using various currenices, purchase items from one difficulty to progress to the next.</p>
            <p>⠀</p>
            <p>Brave through numerous different mechanics, ranging from resetting your progress to gain boosts to adventuring through the map, finding new paths to multiply your money.</p>
          </MainContent>
          <SideContent>
            <img src="c2.png" width="80%"></img>
          </SideContent>
        </ContentBlock>
        <Separator></Separator>
        <ContentBlock>
          <SideContent>
            <img src="c3.png" width="80%"></img>
          </SideContent>
          <MainContent id="text-left">
            <h2>An Equal Mission</h2>
            <p>Whether you're going solo or playing with friends, you can aim for the stars.</p>
            <p>Reach the top and cement your name in history as a capitalistic overlord.</p>
          </MainContent>
        </ContentBlock>
        <Separator></Separator>
        <h1 id="g2">Play The Game</h1>
          <ContentBlock>
            <SideContent>
              <img src="g4.png" width="80%"></img>
            </SideContent>
            <MainContent id="text-left">
              <h2>Open Beta Access</h2>
              <p>JJT Money Empire is open for beta access!</p>
              <p>Note that the game is in an incomplete state and that many claimed features/mechanics are not included in the current release.</p>
              <p>⠀</p>
              <p>Leaderboards will be archived when updates are pushed to the game.</p>
            </MainContent>
          </ContentBlock>
          <h2>Play the game in Roblox!</h2>
          <ContentBlock>
            <a id="playbutton" href="https://www.roblox.com/games/15783753029/BETA-v0-2-JJT-Money-Empire"><img src="/logo.png" /></a>
          </ContentBlock>
          
        </div>
        <Footer />
    </>
  );
}

export default Home;