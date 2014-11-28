module Api
  class ChallengesController < ApiController
    def create
      @challenge = current_user.challenges.new(challenge_params)

      if @challenge.save
        render json: @challenge
      else
        render json: @challenge.errors.full_messages, status: :unprocessable_entity
      end
    end

    # def destroy
    #   @challenge = current_user.boards.find(params[:id])
    #   @challenge.try(:destroy)
    #   render json: {}
    # end

    def index
      @challenges = Challenge.all
      render json: @challenges
    end

    def show
      @challenge = Challenge.includes(submitted_designs: :pre_order_users).find(params[:id])
      render 'show.json.jbuilder'
    end

    private

    def challenge_params
      params.require(:challenge).permit(:name, :category, :end_date, :description)
    end
  end
end
  