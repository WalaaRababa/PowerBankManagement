require 'rails_helper'
RSpec.describe Warehouse, type: :model do
it 'its valid with name' do
warehouse=Warehouse.new(name: 'Main Warehouse')
expect(warehouse).to be_valid
end



end