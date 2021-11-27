class PetCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :name,
    :age
  ) 
end
