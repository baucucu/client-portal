import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Checkbox,
  Icon,
  ListItemCell,
  f7router
} from 'framework7-react';
const mainColor="#341c65"
const HomePage = () => (
  <Page name="home">
    
    {/* Top Navbar */}
    <Navbar sliding={false}>
      <NavLeft>
        {/* <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" /> */}
        <Icon f7="app_fill"></Icon>
      </NavLeft>
      <NavTitle sliding>Client Portal</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
    </Navbar>

    <Block  textColor={mainColor} className="align-content-center align-items-center" style={{alignContent:"center",alignItems: "center", height: "200px", backgroundImage: "url('https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')"}}>
      <p style={{lineHeight: "200px", textAlign: "center", color:mainColor, fontSize:"60px", alignSelf:"center"}}>Prosjektområde for<span style={{fontWeight:"bold"}}>Statkraft ASA</span></p>
    </Block>
    <Block>
          <p style={{textAlign:"center",padding:"50px 100px 50px 100px", lineHeight: "24px", fontSize: "24px", color: mainColor}}>Dette er arbeidsområdet til prosjektet deres. I tillegg til våre jevnlige oppdateringer via e-post med instruksjoner, kan dere følge prosjektet deres her til enhver tid.</p>
      
    </Block>
    
    <List >
      <ListItem style={{marginBottom:"1px"}}>
        <ListItemCell style={{width:"200px"}}>
          <p style={{fontSize:"24px"}}>Steg 1</p>
          <Checkbox></Checkbox>
        </ListItemCell>
        <ListItemCell>
          <img  width="100%" src="https://via.placeholder.com/500x250.png?text=Placeholder+image"></img>
        </ListItemCell>
        <ListItemCell >
          <p style={{lineHeight: "40px",fontSize:"40px", color:mainColor}}>Første trinn er å fylle ut spørreskjema</p>
          <Button onClick={()=> f7router.navigate('/page1')} raised fill >Klikk her for å starte utfylling</Button>
        </ListItemCell>
      </ListItem>

      <ListItem style={{background:mainColor, marginBottom:"1px"}} textColor="white">
        <ListItemCell style={{width:"200px", marginBottom:"1px"}}>
          <p style={{fontSize:"24px"}}>Steg 2</p>
          <Icon f7="lock_fill"></Icon>
        </ListItemCell>
        <ListItemCell>
          <img   width="100%"  src="https://via.placeholder.com/500x250.png?text=Placeholder+image"></img>
        </ListItemCell>
        <ListItemCell>
          <p style={{lineHeight: "40px",fontSize:"40px", }}>Andre trinn er å godkjenne manuskriptet</p>
          <Button outline color="white" disabled>Ikke tilgjengelig enda</Button>
        </ListItemCell>
      </ListItem>

      <ListItem style={{background:mainColor, marginBottom:"1px"}} textColor="white">
        <ListItemCell style={{width:"200px", marginBottom:"1px"}}>
          <p style={{fontSize:"24px"}}>Steg 3</p>
          <Icon f7="lock_fill"></Icon>
        </ListItemCell>
        <ListItemCell>
          <img  width="100%" src="https://via.placeholder.com/500x250.png?text=Placeholder+image"></img>
        </ListItemCell>
        <ListItemCell>
          <p style={{lineHeight: "40px",fontSize:"40px", }}>Tredje trinn er å godkjenne voiceover</p>
          <Button outline color="white" disabled>Ikke tilgjengelig enda</Button>
        </ListItemCell>
      </ListItem>

      <ListItem style={{background:mainColor, marginBottom:"1px"}} textColor="white">
        <ListItemCell style={{width:"200px", marginBottom:"1px"}}>
          <p style={{fontSize:"24px"}}>Steg 4</p>
          <Icon f7="lock_fill"></Icon>
        </ListItemCell>
        <ListItemCell>
          <img width="100%" src="https://via.placeholder.com/500x250.png?text=Placeholder+image"></img>
        </ListItemCell>
        <ListItemCell>
          <p style={{lineHeight: "40px",fontSize:"40px", }}>Fjerde trinn er å godkjenne storyboard og illustrasjoner</p>
          <Button outline color="white" disabled>Ikke tilgjengelig enda</Button>
        </ListItemCell>
      </ListItem>

      <ListItem style={{background:mainColor, marginBottom:"1px"}} textColor="white">
        <ListItemCell style={{width:"200px", marginBottom:"1px", alignItems:"center"}}>
          <p style={{fontSize:"24px"}}>Steg 5</p>
          <Icon f7="lock_fill"></Icon>
        </ListItemCell>
        <ListItemCell>
          <img width="100%" src="https://via.placeholder.com/500x250.png?text=Placeholder+image"></img>
        </ListItemCell>
        <ListItemCell>
          <p style={{lineHeight: "40px",fontSize:"40px", }}>Fjerde trinn er å godkjenne animasjonen</p>
          <Button outline color="white" disabled>Ikke tilgjengelig enda</Button>
        </ListItemCell>
      </ListItem>

      <ListItem style={{paddingBottom: "100px"}}>
        <Col>
          <h3 style={{fontSize:"30px", color:mainColor}}>Når vi er ferdige, og dere er fornøyd med videoen, finner du nedlastingslenke her.</h3>
          <p style={{fontSize:"18px", color:mainColor}}>Verdt å merke seg er at den endelige leveringen ikke vil finne sted før den siste fakturaen er registrert som betalt i vår bank. Så hvis det haster med å få leveransen, foreslår vi at kundene våre ber om sluttfaktura på forhånd, slik at du ikke vil forsinke fristen din.</p>
        </Col>
        
      </ListItem>
    </List>

    {/* <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List> */}
  </Page>
);
export default HomePage;