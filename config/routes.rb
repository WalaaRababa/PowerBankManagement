Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
resources :users, only: [:create, :index, :show, :update, :destroy]
resources :locations, only: [:create, :index, :show, :update, :destroy]
resources :warehouses, only: [:create, :index, :show, :update, :destroy]
resources :stations, only: [:create, :index, :show, :update, :destroy]
resources :power_banks, only: [:create, :index, :show, :update, :destroy]
get 'available_power_bank', to: 'power_banks#available_power_bank'
get 'my_power_banks', to: 'power_banks#my_power_banks'

post 'login', to: 'sessions#create'

  # Defines the root path route ("/")
  # root "posts#index"
end
