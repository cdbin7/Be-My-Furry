import React from 'react'

export default function PetSurveyForm(props) {
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
    }
    console.log(params); 
  }

 

  return (
    <>
    <h1>{props.type =='dog' ? 'Dog' : null}</h1>
    <h1>{props.type =='cat' ? 'Cat' : null}</h1>
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="owner">Are you a pet owner?</label><br />
        <input type="radio" name="owner" id="owner1" />First Owner<br />
        <input type="radio" name="owner" id="owner2" />Previous Owner<br />
        <input type="radio" name="owner" id="owner3" />Current Owner<br />
      </div>
      <div>
        <label htmlFor="owner">Do you currently have a pet(s)? </label><br />
        <input type="radio" name="pets" id="pets1" />Yes, I have<br />
        <input type="radio" name="pets" id="pets2" />No, I don't have<br />
      </div>
      <div>
        <label htmlFor="age">What's your ideal pet?</label><br />
        <input type="radio" name="age" id="age1"/>No Age Preference<br />
        <input type="radio" name="age" id="age2"/>New Born<br />
        <input type="radio" name="age" id="age3"/>Young<br />
        <input type="radio" name="age" id="age4"/>Adult<br />
        <input type="radio" name="age" id="age5"/>Old<br />
      </div>
      <div>
        <label htmlFor="gender">What's your gender preference?</label><br />
        <input type="radio" name="gender" id="gender1"/>No Gender Preference<br />
        <input type="radio" name="gender" id="gender2"/>Female<br />
        <input type="radio" name="gender" id="gender3"/>Male<br />
      </div>
      <div>
        <label htmlFor="size">What's your size preference?</label><br />
        <input type="radio" name="size" id="size1"/>No Size Preference<br />
        <input type="radio" name="size" id="size2"/>Small<br />
        <input type="radio" name="size" id="size3"/>Medium<br />
        <input type="radio" name="size" id="size3"/>Large<br />
      </div>
      {
        props.type==='dog'?
        <>
      <div>
        <label htmlFor="activity">What's your activity level preference?</label><br />
        <input type="radio" name="activity" id="activity1"/>No Activity Preference<br />
        <input type="radio" name="activity" id="activity2"/>Very Active<br />
        <input type="radio" name="activity" id="activity3"/>Active<br />
        <input type="radio" name="activity" id="activity4"/>Laid Back<br />
      </div>
      <div>
        <label htmlFor="house_trained">Should your dog be house-trained?</label><br />
        <input type="radio" name="house_trained" id="house_trained1"/>No Preference<br />
        <input type="radio" name="house_trained" id="house_trained2"/>Yes<br />
        <input type="radio" name="house_trained" id="house_trained3"/>No<br />
      </div>
        </>
        : null
      }

      <div>
        <label htmlFor="special_needs">Are you open for adopting a pet with special needs? </label><br />
        <input type="radio" name="special_needs" id="special_needs1"/>Open<br />
        <input type="radio" name="special_needs" id="special_needs2"/>Not Open<br />
      </div>
      <div>
        <input type="submit" value="See Your Matches"/>
      </div>
    </form>
    </>
  )
}
