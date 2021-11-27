class Api::V1::PetsController < Api::ApplicationController
    before_action :find_product, only[:show, :destroy]
    before_action :authenticate_user!, only[:show, :create, :destroy]

    def index
      pets = Pet.order(created_at: :desc)
      render(json: pets, each_serializer: PetCollectionSerializer)
    end

    def show
      render json: @pet
    end

    def create
      if current_user&.admin?
        pet = Pet.new(pet_params)
        if pet.save
          render json: {id: pet_id}
        else
          render json: {errors: pet.errors.messages, status:422}
        end
      else
        render json: {errors: user.errors.messages, status:404}
      end
    end

    def destroy
      if current_user&.admin?
        @pet.destroy
        render(json:{status:200})
      else
        render json: {errors: user.errors.messages, status:404}
      end
    end

    private
    def find_pet
      @pet ||= Pet.find params[:id]
    end

    def pet_params
      params.require(:pet)
        .permit(
          :id,
          :name,
          :age,
          :gender,
          :size,
          :activity,
          :hair,
          :special_needs,
          :personality,
          :sprayed_neutered,
          :shelter_id,
          :canLiveWithPets,
          :house_trained,
          :vaccinated,
          :is_cat)
    end
end
