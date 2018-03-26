class DayController < ApplicationController
    before_action :current_user
    skip_before_action :verify_authenticity_token

    def create 
        

        @user= User.where(id: @current_user.id).first
        @day = params[:day]
        @level= params[:level]
        @month= params[:month]
        @tracker_id = params[:tracker_id]
        @year = params[:year]
        # first get the month Id and get all the days that are associated with that month
        @old_day= Tracker.where(id:@tracker_id).first.days.where(day:@day, month:@month, year:@year).first
        puts @old_day

        
        if @old_day
            if @old_day.update_attributes(day:@day, count:0 , level:@level ,month:@month, year:@year, tracker_id:@tracker_id)
              @data = Tracker.where(id:@tracker_id).first.days.where(month:@month, year:@year)
              puts "updated"
              puts @data
              render json: @data , status:201
           else
             puts "NOt updated"
           end

        else 
           
            @new_day = Day.new(day:@day, count:0 , level:@level ,month:@month, year:@year, tracker_id:@tracker_id )
        
            if @new_day.save
                @data = Tracker.where(id:@tracker_id).first.days.where(month:@month, year:@year)
                puts "created new one"
                puts @data
                render json: @data , status:201
            else 
                puts "Oops not created sorry"
            end

        end 
       # Day.create!({day:@day, count:0 , level:@level ,month:@month, year:@year, tracker_id:@tracker_id })  
       
    end
end
