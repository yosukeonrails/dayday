class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

    helper_method :current_user

  def reset_session
    @_request.reset_session
  end

  def current_user

    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    @profile_picture= 'https://graph.facebook.com/'+@current_user.uid+'/picture?type=normal' if @current_user
  end

end
