class Api::V1::SheltersController < Api::ApplicationController
  def create
    shelter = Shelter.new(shelter_params)
    if current_user&.admin?
      if shelter.save
        render json: {id: shelter.id}
      else
        render json: {errors: shelter.errors, status:422}
      end
    else
      render json: {msg: "Only an Admin may add a new shelter!", status:401}
    end
  end

  def show
    shelter = Shelter.find params[:id]
    shelter.pets
    render json: {shelter}
  end

  def destroy
    shelter = Shelter.find params[:id]
    if current_user&.admin?
      if shelter.destroy
        render(json:{status:200})
      else
        render(json:{status:500, msg:'Oops something is wrong!'})      
      end
    else
      render(json:{status:401, msg:'Only Admin can delete a shelter!'})      
    end
    
  end

  private
  def shelter_params
    params.require(:shelter).permit(:name, :location)
  end

end
