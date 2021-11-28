class PetSerializer < ActiveModel::Serializer
  attributes(
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
    :vaccinated
  )

  belongs_to :shelter
  class ShelterSerializer < ActiveModel::Serializer
    attributes(
      :name,
      :location
    )
  end
  
end
