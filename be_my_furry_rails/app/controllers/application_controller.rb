class ApplicationController < ActionController::Base
  def current_user
    @current_user ||= User.find_by_id session[:user_id]
  end

  def user_signed_in?
    current_user.present?
  end
end
