class DashboardController < ApplicationController
    before_action :current_user
  
    def index
        if current_user
          @trackers= User.where(id:@current_user.id).first.trackers
        end
    end
  
end
