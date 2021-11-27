class Api::V1::LikesController < Api::ApplicationController
  before_action :authenticate_user!, only[:create, :destroy]

  def create
    pet = Pet.find params[:pet_id]
    like = Like.new(pet: pet, user: current_user)

    if like.save
      render json: {id: like.id}
    else
      render json: {msg: "Something went wrong", status:500}
    end
  end

  def destroy
    like = Like.find params[:id]
    if can?(:destroy, like)
      if like.destroy
        render(json: {status: 200})
      end
    else
      render json: {msg: "You can't unlike you don't own", status:403}
    end
  end
end
