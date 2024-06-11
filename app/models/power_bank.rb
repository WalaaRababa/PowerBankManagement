class PowerBank < ApplicationRecord
  belongs_to :station
  belongs_to :warehouse
  belongs_to :user
end
