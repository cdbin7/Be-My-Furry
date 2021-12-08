import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import PetIndexPage from './components/PetIndexPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import {User} from './requests';
import AuthContext from './context/auth-context';
import AuthRoute from './components/AuthRoute';
import PetSurveyPage from './components/PetSurveyPage';
import PetShowPage from './components/PetShowPage';
import NewPetPage from './components/NewPetPage';
import ShelterIndexPage from './components/ShelterIndexPage';
import NewShelterPage from './components/NewShelterPage';
import LikedPage from './components/LikedPage';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    getCurrentUser();
  }, [])

  const getCurrentUser = () => {
    return User.current().then(user => {
      if(user?.id){
        setUser(user)
      }
    })
  }

  

  const onSignOut = () => { setUser(null) }




  return (
    <AuthContext.Provider value={{ user: user }}>
    <BrowserRouter>
    <NavBar currentUser={user} onSignOut={onSignOut} />
    <Switch>
      <Route exact path='/sign_in'
        render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}/>
      <Route exact path='/sign_up'
        render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}/>
      <Route exact path='/pets-index/:type'
        render={(routeProps) => <PetIndexPage {...routeProps}/>}/>
      <Route exact path='/pets/new' component={NewPetPage} />
      <AuthRoute isAuthenticated={!!user} exact path='/pets/likes' component={LikedPage}></AuthRoute>
      <Route exact path='/pets/:id' component={PetShowPage} />
      <Route exact path='/pets-survey' component={PetSurveyPage}></Route>
      <Route exact path='/shelters/new' component={NewShelterPage}/>
      <Route exact path='/shelters' component={ShelterIndexPage}/>
      <Route exact path='/' component={WelcomePage} />
        {/* <Route exact path='/'
        render={(routeProps) => <WelcomePage {...routeProps} currentUser={user}/>}/> */}
    </Switch>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
