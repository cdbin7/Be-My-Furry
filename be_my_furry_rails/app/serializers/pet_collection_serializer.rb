class PetCollectionSerializer < ActiveModel::Serializer
  attributes(
    :image,
    :id,
    :name,
    :age,
    :gender,
    :size
  ) 
end
