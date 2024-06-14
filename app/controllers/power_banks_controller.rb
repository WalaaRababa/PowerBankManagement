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
        #power_bank = PowerBank.includes(:user,:warehouse,:station).all
        #render json: power_bank,include: [:user,:warehouse,:station],status:200
        page=params[:page].to_i
        per_page = 5
        power_banks = PowerBank.includes(:user, :warehouse, :station)
                               .offset(page * per_page)
                               .limit(per_page)
        
        total_pages = (PowerBank.count / per_page.to_f).ceil
      
        render json: {power_banks:power_banks.as_json(include: { 
          user: { only: [:id, :name] }, 
          warehouse: { only: [:id, :name] }, 
          station: { only: [:id, :name] } 
        }), total_pages: total_pages, current_page: page }

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
