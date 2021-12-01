Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :shelters

      resources :pets do
        resources :likes, shallow: true, only: [:create, :destroy]
      end
      
      resources :users, only: [:create] do
        get :current, on: :collection
      end
      resource :session, only: [:create, :destroy]
    end
  end
end
