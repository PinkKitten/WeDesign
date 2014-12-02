module Api
  class DesignsController < ApiController
    def create
      @design = current_user.designs.new(design_params)
      if @design.save
        render json: @design
      else
        render json: @design.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @designs = Design.all
      render json: @designs
    end
    
    # def update
    #   @design = Item.find(params[:id])
    #
    #   if @design.update(item_params)
    #     render json: @design
    #   else
    #     render json: @design.errors.full_messages, status: :unprocessable_entity
    #   end
    # end
    
    private

    def design_params
      params.require(:design).permit(:design_img, :title, :description, :challenge_id)
    end
  end
end
  