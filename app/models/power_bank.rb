class PowerBank < ApplicationRecord
  belongs_to :station,optional: true 
  belongs_to :warehouse,optional:true
  belongs_to :user,optional:true
  validates :status,presence: true
  # u need check to vaildate powerbank that located to staions or warhouse
end
