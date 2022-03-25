class Like < ApplicationRecord
  belongs_to :user
  belongs_to :pet

  validates(
    :pet_id,
    uniqueness: {
      scope: :user_id,
      message: "has already been liked"
    }
  )
end
