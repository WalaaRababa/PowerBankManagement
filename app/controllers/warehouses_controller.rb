class WarehousesController < ApplicationController
  before_action :authorize_request
  before_action :authorize_admin, only: [:create, :destroy]
    def create
        warehouse=Warehouse.new(warehouse_params)
        if warehouse.save
            render json:warehouse,status:201
        else
            render json:warehouse.errors,status:500
        end
    end
    def index
        warehouses = Warehouse.all
        render json: warehouses,status:200
      end
      def show
        warehouse = Warehouse.find(params[:id])
        render json: warehouse,status:200
      end
      def update
        warehouse=Warehouse.find(params[:id])
        if warehouse
            warehouse.update(warehouse_params)
            render json: warehouse,status:200
            else
           render json:{error:'Unable to update warehouse'},status:400
        end
      end
      def destroy
        warehouse=Warehouse.find(params[:id])
        if warehouse
            warehouse.destroy
            render json: warehouse,status:200
            else
           render json:{error:'Unable to delete warehouse'},status:400
        end
    end
      private 
    def warehouse_params
        params.require(:warehouse).permit(:name)
     end
end
