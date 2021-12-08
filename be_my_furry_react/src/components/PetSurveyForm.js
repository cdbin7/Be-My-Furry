import React from 'react'
import {withRouter} from 'react-router'

const PetSurveyForm = (props) =>  {
  console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const params = {
      owner: formData.get("owner"),
      pets: formData.get("pets"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      size: formData.get("size"),
      activity: formData.get("activity"),
      house_trained: formData.get("house_trained"),
      special_needs: formData.get("special_needs"),
      is_cat: props.type ==='dog' ? false : true
    }
    console.log(params);
    props.history.push(`/pets-index/${props.type === 'dog'? 0 : 1}`,{params:params})
  }

 

  return (
    <>
    <h1>{props.type =='dog' ? 'Dog' : null}</h1>
    <h1>{props.type =='cat' ? 'Cat' : null}</h1>
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="owner">Are you a pet owner?</label><br />
        <input type="radio" name="owner" id="owner1" value="first_owner" />First Owner<br />
        <input type="radio" name="owner" id="owner2" value="previous_owner" />Previous Owner<br />
        <input type="radio" name="owner" id="owner3" value="current_owner" />Current Owner<br />
      </div>
      <div>
        <label htmlFor="pets">Do you currently have a pet(s)? </label><br />
        <input type="radio" name="pets" value="true" />Yes, I have<br />
        <input type="radio" name="pets" value="false" />No, I don't have<br />
      </div>
      <div>
        <label htmlFor="age">What's your ideal pet?</label><br />
        <input type="radio" name="age" value="no_age"/>No Age Preference<br />
        <input type="radio" name="age" value="new_born"/>New Born<br />
        <input type="radio" name="age" value="young"/>Young<br />
        <input type="radio" name="age" value="adult"/>Adult<br />
        <input type="radio" name="age" value="old"/>Old<br />
      </div>
      <div>
        <label htmlFor="gender">What's your gender preference?</label><br />
        <input type="radio" name="gender" value="no_gender"/>No Gender Preference<br />
        <input type="radio" name="gender" value="female"/>Female<br />
        <input type="radio" name="gender" value="male"/>Male<br />
      </div>
      <div>
        <label htmlFor="size">What's your size preference?</label><br />
        <input type="radio" name="size" value="no_size"/>No Size Preference<br />
        <input type="radio" name="size" value="small"/>Small<br />
        <input type="radio" name="size" value="medium"/>Medium<br />
        <input type="radio" name="size" value="large"/>Large<br />
      </div>
      {
        props.type==='dog'?
        <>
      <div>
        <label htmlFor="activity">What's your activity level preference?</label><br />
        <input type="radio" name="activity" value="no_activity"/>No Activity Preference<br />
        <input type="radio" name="activity" value="very_active"/>Very Active<br />
        <input type="radio" name="activity" value="active"/>Active<br />
        <input type="radio" name="activity" value="laid_back"/>Laid Back<br />
      </div>
      <div>
        <label htmlFor="house_trained">Should your dog be house-trained?</label><br />
        <input type="radio" name="house_trained" value="no_house_trained"/>No Preference<br />
        <input type="radio" name="house_trained" value="true"/>Yes<br />
        <input type="radio" name="house_trained" value="false"/>No<br />
      </div>
        </>
        : null
      }

      <div>
        <label htmlFor="special_needs">Are you open for adopting a pet with special needs? </label><br />
        <input type="radio" name="special_needs" value="true"/>Open<br />
        <input type="radio" name="special_needs" value="false"/>Not Open<br />
      </div>
      <div>
        <input type="submit" value="See Your Matches"/>
      </div>
    </form>
    </>
  )
}

export default withRouter(PetSurveyForm)
