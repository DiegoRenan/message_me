class ApplicationController < ActionController::Base
  include ApplicationHelper

  def require_user
    if !logged_in?
      flash[:error] = "You must loggin"
      redirect_to login_path
    end
  end
end
