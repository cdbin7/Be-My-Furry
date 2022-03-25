Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :shelters

      resources :pets do
        post :survey_index, on: :collection
        resources :likes, shallow: true, only: [:create, :destroy] 

        get :show_like
      end
      get "/likes", to: "pets#likes"


      
      resources :users, only: [:create] do
        get :current, on: :collection
      end
      resource :session, only: [:create, :destroy]
    end
  end
end
