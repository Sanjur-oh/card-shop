class ShoesController < ApplicationController

    def index
        render json: Shoe.all, status: :ok
    end

    def show
        shoe = find_shoe
        render json: shoe, status: :ok
    end

    def create
        shoe = Shoe.create!(shoe_params)
        render json: shoe, status: :created
    end

    def update
        shoe = find_shoe
        shoe.update!(shoe_params)
        render json: shoe, status: :updated 
    end

    def destroy
        shoe = find_shoe
        shoe.destroy
        render json: {}
    end

    private

    def find_shoe
        Shoe.find(params[:id])
    end

    def shoe_params
        params.permit(:shoeName, :brand, :colorway, :retailPrice, :image_url, :stockX, :ebay, :goat)
    end
end
