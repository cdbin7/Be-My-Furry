import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import PetIndexPage from './components/PetIndexPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import {User} from './requests';
import AuthContext from './context/auth-context';
import PetSurveyPage from './components/PetSurveyPage';
import PetShowPage from './components/PetShowPage';
import NewPetPage from './components/NewPetPage';


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

  const handleAge = (age) => {
    if (age == 0) {
      return 'New Born'
    } else if (age <= 2) {
      return 'Young'
    } else if (age <= 6){
      return 'Adult'
    } else {
      return 'Old'
    } 
  }



  return (
    <AuthContext.Provider value={{ user: user }}>
    <BrowserRouter>
    <Switch>
      <Route exact path='/sign_in'
        render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}/>
      <Route exact path='/sign_up'
        render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}/>
      <Route exact path='/pets-index/:type'
        render={(routeProps) => <PetIndexPage {...routeProps} handleAge={handleAge}/>}/>
      <Route exact path='/pets/new' component={NewPetPage} />
      <Route exact path='/pets/:id' component={PetShowPage} />
        {/* render={(routeProps) => <PetShowPage {...routeProps} handleAge={handleAge}/>}/> */}
      <Route exact path='/pets-survey' component={PetSurveyPage}/>
      <Route exact path='/' component={WelcomePage} />
    </Switch>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
