class Api::V1::PetsController < Api::ApplicationController
    before_action :find_pet, only:[:show, :destroy]
    before_action :authenticate_user!, only:[:create, :destroy]

    # def index
    #   if @pet.is_cat
    #     pets = Pet.where("is_cat = true").order(created_at: :desc)
    #     shelter = Shelter.find params[:shelter_id]
    #     render(json: pets, each_serializer: PetCollectionSerializer)
    #   else
    #     pets = Pet.where("is_cat = false").order(created_at: :desc)
    #     shelter = Shelter.find params[:shelter_id]
    #     render(json: pets, each_serializer: PetCollectionSerializer)
    #   end
    # end
    def index
      pets = Pet.where({is_cat: params[:type]=='1'}).order(created_at: :desc)
      # shelter = Shelter.find params[:shelter_id]
      render(json: pets, each_serializer: PetCollectionSerializer)
    end

    

    def show
      render json: @pet
    end

    def create
      
      if current_user&.admin?
        pet = Pet.new(pet_params)
        
        if pet.save
          render json: {id: pet.id}
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

    def survey_index
      sql=" 1 = 1 "
      if params[:owner] == "first"
        sql += " and personality='very_friendly'"
      elsif params[:owner] == "previous"
        sql += " and (personality='friendly' or personality='easy_going' or personality='shy')"
      else
        sql += " and (personality='very_friendly' or personality='easy_going')"
      end

      if params[:pets] == "true"
        sql += ' and "canLiveWithPets"=true'
      else
        sql += ' and "canLiveWithPets"=false'
      end

      if params[:age] == "no_age"
        sql += " and age>=0 and age<=20"
      elsif params[:age] == "new_born"
        sql += " and age=0"
      elsif params[:age] == "young"
        sql += " and age<=2"
      elsif params[:age] == "adult"
        sql += " and age<=6"
      else
        sql += " and age>=7"
      end

      if params[:gender] =="no_gender"
        sql += " and (gender='female' or gender='male')"
      elsif params[:gender] =="female"
        sql += " and gender='female'"
      else
        sql += " and gender='male'"
      end

      if params[:size] =='no_size' 
        sql += " and (size='small' or size='medium' or size='large')"
      elsif params[:size] =='small' 
        sql += " and size='small'"
      elsif params[:size] =='medium' 
        sql += " and size='medium'"
      else
        sql += " and size='large'"
      end

      if params[:is_cat]==false
        sql += " and is_cat=false"
          if params[:activity]=='no_activity'
            sql += " and (activity='very_active' or activity='active' or activity='laid_back')"
          elsif params[:activity]=='very_active'
            sql += " and activity='very_active'"
          elsif params[:activity]=='active'
            sql += " and activity='active'"
          else
            sql += " and activity='laid_back'"
          end

          if params[:house_trained]=='no_house_trained'
            sql += " and (house_trained='true' or house_trained='false')"
          elsif params[:house_trained]=='true'
            sql += " and house_trained='true'"
          else
            sql += " and house_trained='false'"
          end
      else
        sql += " and is_cat=true"
      end

        if params[:special_needs]=='true'
          sql += " and special_needs=true"
        else
          sql += " and special_needs=false"
        end


      pets = Pet.where(sql)
      .order(created_at: :desc)
      render(json: pets, each_serializer: PetCollectionSerializer)
    end


    #   pets = Pet.where({
    #     activity:params[:activity],
    #     age:params[:age],
    #     gender:params[:gender],
    #     house_trained:params[:house_trained],
    #     is_cat:params[:is_cat], 
    #     personality:params[:owner],
    #     canLiveWithPets:params[:pets],
    #     size:params[:size],
    #     special_needs:params[:special_needs],
    #     }).order(created_at: :desc)
    #   render(json: pets, each_serializer: PetCollectionSerializer)
    # end
    def show_like
      if current_user
      like = Like.where("pet_id = #{params[:pet_id]} and user_id = #{current_user.id}")
        if like
          render(json: {is_liked:true, id: like})
        else
          render(json: {is_liked:false})
        end
      end
    end

    def likes
      likes = current_user.liked_pets.order(created_at: :desc)
      render(json: likes, each_serializer: PetCollectionSerializer)
    end

    private
    def find_pet
      @pet ||= Pet.find params[:id]
    end

    def pet_params
      params
        .permit(
          :image,
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
