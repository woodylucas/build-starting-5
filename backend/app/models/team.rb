class Team < ApplicationRecord
  belongs_to :users
  belongs_to :player 
end
