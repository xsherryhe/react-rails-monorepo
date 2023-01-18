Rails.application.routes.draw do
  scope '/api' do
    resources :data, only: %i[index]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
