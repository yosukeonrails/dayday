class HomeController < ApplicationController
  before_action :current_user

  def index
      if current_user
        redirect_to '/dashboard'
      end
  end
end
