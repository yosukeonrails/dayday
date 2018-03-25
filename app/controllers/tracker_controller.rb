class TrackerController < ApplicationController
    before_action :current_user
    
    def show    
         @tracker_id = params[:id]
         @tracker= User.where(id:@current_user.id).first.trackers.where(id:@tracker_id).first     
         
  
         @month =  DateTime.now.month
         @year = DateTime.now.year
         @daycount = Time.days_in_month( @month, @year )

         @days = Tracker.where(id:@tracker_id).first.days
          if @days then @days else [] end
    end
end
