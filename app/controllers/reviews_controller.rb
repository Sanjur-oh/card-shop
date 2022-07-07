class ReviewsController < ApplicationController
    
    def index
        render json: Review.all, status: :ok
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review, status: :updated 
    end

    def destroy
        review = find_review
        review.destroy
        render json: {}
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:description, :rating)
    end
end
