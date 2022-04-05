class PetCollectionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes(
    :image,
    :id,
    :name,
    :age,
    :gender,
    :size
  ) 

  def image
    # byebug
    rails_blob_url(object.image, only_path: true) if object.image.attached?
  end


end
