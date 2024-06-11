class Station < ApplicationRecord
  belongs_to :location,optional: true
  belongs_to :warehouse,optional:true
  validate :status,presence:true
  # check Station must belong to either a location or a warehouse>> make it later

end
