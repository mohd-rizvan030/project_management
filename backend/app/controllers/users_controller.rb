class UsersController < ApplicationController
  require 'oauth'
	require 'nokogiri'
  # before_action :authenticate_user!, only: []
	def show
		@user = User.find(params[:id])
		render json:{:user =>  @user}, status: :ok
	end

  def logged_in
    if current_user
      render json: {user: current_user}, status: :ok
    else
      render json: { message: 'Nobody logged In' }, status: :not_found
    end
  end

  def user_signin
    sign_out(current_user) if current_user
    if !params[:user][:email].blank?
      user = User.find_by_email(params[:user][:email].to_s.downcase)
    end

    if user.nil?
        render json: { :message => 'User does not exist' }, status: :not_found
    else
      if user.valid_password?(params[:user][:password])
        sign_in(:user, user)
        render json: {user: user}, status: :ok
      else
        render json: { message: { password: 'Invalid Password' }}, status: :not_found
      end
    end
  end

  def logout
    if sign_out(current_user)
      render json: { message: 'Logged out successfull' }, status: :ok
    else
      render json: {}, status: :unprocessable_entity
    end
  end


  private
    def fetch_user
      @user = User.find_by_id(params[:id])
    end

end
