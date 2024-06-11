class Station < ApplicationRecord
  belongs_to :location
  belongs_to :warehouse
end
