class PalsController < ApplicationController
  before_filter :authenticate_user!

  before_action :set_pal, only: [:show, :update, :destroy]

  # GET /pals
  # GET /pals.json
  def index
    @pals = Pal.all

    render json: @pals
  end

  # GET /pals/1
  # GET /pals/1.json
  def show
    render json: @pal
  end

  # POST /pals
  # POST /pals.json
  def create
    @pal = Pal.new(pal_params)

    if @pal.save
      render json: @pal, status: :created, location: @pal
    else
      render json: @pal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pals/1
  # PATCH/PUT /pals/1.json
  def update
    @pal = Pal.find(params[:id])

    if @pal.update(pal_params)
      head :no_content
    else
      render json: @pal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pals/1
  # DELETE /pals/1.json
  def destroy
    @pal.destroy

    head :no_content
  end

  private

    def set_pal
      @pal = Pal.find(params[:id])
    end

    def pal_params
      params.require(:pal).permit(:name)
    end
end
