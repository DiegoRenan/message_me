Rails.application.routes.draw do
  get 'chatroom/index'
  get 'sessions/new'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "chatroom#index"
  get 'login', to: 'sessions#new'
end
