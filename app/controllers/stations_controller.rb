class StationsController < ApplicationController
  before_action :authorize_request
  before_action :authorize_admin, only: [:create, :destroy]
    def create
        station=Station.new(station_params)
        if station.save
            render json:station,status:201
        else
            render json:station.errors,status:500 
        end
    end
        def index
            stations = Station.includes(:location, :warehouse).all
            render json: stations,include: [:location, :warehouse],status:200
          end
          def show
            station = Station.find(params[:id])
            render json: station,status:200
          end
          def update
            station=Station.find(params[:id])
            if station
                station.update(station_params)
                render json: station,status:200
                else
               render json:{error:'Unable to update station'},status:400
            end
          end
          def destroy
            station=Station.find(params[:id])
            if station
                station.destroy
                render json: station,status:200
                else
               render json:{error:'Unable to delete station'},status:400
            end
        end
          private 
        def station_params
            params.require(:station).permit(:status,:location_id,:warehouse_id)
         end
        end
