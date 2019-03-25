class Player < ApplicationRecord
  belongs_to :position
  has_many :teams
  has_many :users, through: :teams
end
