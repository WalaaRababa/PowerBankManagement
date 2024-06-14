class Station < ApplicationRecord
  belongs_to :location,optional: true
  belongs_to :warehouse,optional:true
  validates :status,presence:true
  has_many :power_banks
  validate :location_or_warehouse
  validate :max_power_banks

  # check Station must belong to either a location or a warehouse>> make it later
  private

  def location_or_warehouse
    unless location.present? ^ warehouse.present?
      errors.add(:base, "Specify either location or warehouse, not both")
    end
  end

  def max_power_banks
    if power_banks.size > 10
      errors.add(:base, "A station can only contain up to 10 power banks")
    end
  end


end
