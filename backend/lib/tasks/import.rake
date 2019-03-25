require 'csv'




namespace :import do
  desc "Import players from csv"
  task players: :environment do

    filename = File.join Rails.root, 'db/csv/all_players_data.csv'

      CSV.foreach(filename,  headers: true) do |row|
      player = Player.create(
      name: row["name"],
      GP: row["GP"].to_f,
      MPG: row["MPG"].to_i,
      FG_percentage: row["FG_percentage"].to_f,
      FT_percentage: row['FT_percentage'].to_f,
      three_point_percentage: row['three_point_percentage'].to_f,
      RPG: row["RPG"].to_f,
      APG: row["APG"].to_f,
      STPG: row["STPG"].to_f,
      BPG: row["BPG"].to_f,
      TOPG: row["TOPG"].to_f,
      PPG: row["PPG"].to_f,
      image: row["image"].to_s,
      position_id: row["position"].to_i
      )
      if !row || !player.valid?
      byebug
      puts row
      end
      end
    end
    desc "Create Positions"
    task positions: :environment do
      Position.create([
        {name: "Point Guard"},
        {name: "Shooting Guard"},
        {name: "Small Forward"},
        {name: "Power Forward"},
        {name: "Center"}
        ])
    end
end
