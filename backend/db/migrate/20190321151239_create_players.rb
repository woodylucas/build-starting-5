class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :GP
      t.float :MPG
      t.float :FG_percentage
      t.float :FT_percentage
      t.float :three_point_percentage
      t.float :RPG
      t.float :APG
      t.float :STPG
      t.float :BPG
      t.float :TOPG
      t.float :PPG
      t.text :image
      t.integer :position_id
      t.timestamps
    end
  end
end
