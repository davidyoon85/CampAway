class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.zip_code = 11213

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user.includes(:reviews)
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :zip_code, :email_address, :password)
  end
end
