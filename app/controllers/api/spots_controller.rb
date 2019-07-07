class Api::SpotsController < ApplicationController
    def index
        @spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    end

    def create
        @spot = Spot.new(spot_params)
        
        if @spot.save
            render :show
        else
            render json: @spot.errors.full_messages, status: 401
        end
    end

    def show
        @spot = Spot.with_attached_photos.find(params[:id])
        render :show
    end

    def destroy
        @spot = Spot.find(params[:id])
        @spot.destroy
        render :show
    end

    private
    
    def spot_params
        params.require(:spot).permit(:host_id, :title, :body, :price, :pets_allow, :group_size, :check_in, :check_out, :lat, :long, 
        :campfire, :tent, :sites, :parking, :toilet, :shower, :hiking, :biking, :wildlife, :paddling, photos: [])
    end

    def bounds
        params[:searchParams]
      end
end
