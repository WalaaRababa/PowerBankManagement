class PowerBanksController < ApplicationController
  before_action :authorize_request
  before_action :authorize_admin, only: [:create, :destroy]
    def create
        power_bank=PowerBank.new(power_bank_params)
        if power_bank.save
         render json:power_bank,status:201
        else
            render json:power_bank.errors,status:500
        end
    end
    def index
        power_bank = PowerBank.includes(:user,:warehouse,:station).all
        render json: power_bank,include: [:user,:warehouse,:station],status:200
      end
      def show
        power_bank = PowerBank.find(params[:id])
        render json: power_bank
      end
      def update
        power_bank=PowerBank.find(params[:id])
        if power_bank
            power_bank.update(power_bank_params)
            render json: power_bank,status:200
            else
           render json:{error:'Unable to update PowerBank'},status:400
        end
      end
      def destroy
        power_bank=PowerBank.find(params[:id])
        if power_bank
            PowerBank.destroy
            render json: power_bank,status:200
            else
           render json:{error:'Unable to delete PowerBank'},status:400
        end
    end
      private 
    def power_bank_params
      params.require(:power_bank).permit(:status, :station_id, :warehouse_id, :user_id)
     end
end
