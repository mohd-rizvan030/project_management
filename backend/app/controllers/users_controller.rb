class UsersController < ApplicationController
  # Manage users
  before_action :authenticate_user!, only: []

  def logged_in
    user = User.find_by_email "mohd.rizvan30@gmail.com"
    sign_in(:user, user)
    if current_user
      render json: current_user, status: :ok
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
        render json: { :message => 'User does not exist' }
    else
      if user.valid_password?(params[:user][:password])
        sign_in(:user, user)
        render json: { message: 'Sign in successful' }, status: :ok
      else
        render json: { message: { password: 'Invalid Password' }}
      end
    end
  end
end
