class PetCollectionSerializer < ActiveModel::Serializer
  attributes(
    :image,
    :id,
    :name,
    :age
  ) 
end
