class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :GP, :MPG, :FG_percentage, :FT_percentage,
  :three_point_percentage, :RPG, :APG, :STPG, :BPG, :TOPG, :PPG, :image, :position_id
end
