class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.author = current_user
    @review.spot_id = params[:spot_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def index
    if params[:spot_id]
      @reviews = Spot.find_by(id: params[:spot_id]).reviews
      render :index
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messaages, status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  def review_params
    params.require(:review).permit(:author, :description)
  end
end