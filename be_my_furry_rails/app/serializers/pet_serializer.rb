class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes(
    :id,
    :image,
    :name,
    :age,
    :gender,
    :size,
    :activity,
    :hair,
    :special_needs,
    :personality,
    :sprayed_neutered,
    :canLiveWithPets,
    :house_trained,
    :vaccinated,
    :is_cat
  )

  def image
    rails_blob_url(object.image, only_path: true) if object.image.attached?
  end

  belongs_to :shelter
  class ShelterSerializer < ActiveModel::Serializer
    attributes(
      :name,
      :location
    )
  end
  
end
