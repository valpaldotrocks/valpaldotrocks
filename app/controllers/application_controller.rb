class ApplicationController < ActionController::API
  include ActionController::RespondWith
  include DeviseTokenAuth::Concerns::SetUserByToken
end
