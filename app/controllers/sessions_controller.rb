
class SessionsController < ApplicationController

  def create

    auth= request.env["omniauth.auth"]
    session[:omniauth] = auth.except('extra')

    user = User.sign_in_from_omniauth(auth)
    session[:user_id]= user.id
    redirect_to root_url
    #redirect_to "http://localhost:3000"
  end

  def destroy
    session[:user_id] = nill
    session[:omniauth] = nill

    render json: "sign out"
  end
end
