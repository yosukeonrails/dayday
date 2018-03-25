class MonthController < ApplicationController
    before_action :current_user

    def show 

        @tracker_id = params[:id]
        @month_id = params[:month]
        @year_id= params[:year]

        puts "getting data at month controller"
        puts @tracker_id
        puts @month_id
        puts @year_id


        @tracker= User.where(id: @current_user.id).first.trackers.where(id:@tracker_id).first  
        @month = @tracker.months.where(month:@month_id, year:@year_id).first
        @days = @month.days  
        @daycount = Time.days_in_month(@month_id , @year_id)
        @data = {"tracker" => @tracker , "month"=> @month , "days" => @days, "daycount" => @daycount }

        render json: @data, status:201
    end
    
    def add_day
        print "POSTED HERE AT ADD DAY"
    end


end
