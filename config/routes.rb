Rails.application.routes.draw do
  get 'home/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  resources :signin , :about, :dashboard ,:tracker , :month , :day
  get 'auth/:provider/callback', to:"sessions#create"
	delete 'sign_out', to:"sessions#destroy" , as:'sign_out'

end
