class User < ApplicationRecord
  has_secure_password

  has_many :likes, dependent: :destroy
  has_many :liked_pets, through: :likes, source: :pet

  validates :first_name, :last_name, :password, :address, presence:true
  validates :email, presence:true, uniqueness:true ,format: { with: /(\A([a-z]*\s*)*\<*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\>*\Z)/i }
end
