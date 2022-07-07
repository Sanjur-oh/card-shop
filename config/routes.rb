Rails.application.routes.draw do
  resources :cart_items
  resources :carts
  resources :user_shoes
  resources :shoes
  resources :users

  post 'password/forgot', to: 'password#forgot'
  post 'password/reset', to: 'password#reset'
  
  # Defines the root path route ("/")
  # root "articles#index"
  # needs work to get devise auth running
  # get 'home/index'
  #, to: 'home#index'
  # root 'home#index'

  # route to test your configuration. but not sure if needed
  # get '/hello', to: 'application#hello_world'

  # do i need this? is this complicating the home/index route
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get "sign_up", to: "registrations#new"

end