class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users, status: :ok
  end

  def show 
    family = Family.find_by(id: session[:family_id])
    if family
      render json: family, status: :ok
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
    @family = Family.find_by(id: session[:family_id])
    if @family.valid?
      user = @family.users.create(user_params)
      render json: user, status: :created
    end
  end

  private

  def find_family
    Family.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :role)
  end

end
