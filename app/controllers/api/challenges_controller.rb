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

    # def show
    #   @challenge = Board.includes(:members, lists: :cards).find(params[:id])
    #   @lists = @board.lists
    #   if @board.is_member?(current_user)
    #     render 'show.json.jbuilder'
    #   else
    #     render json: ["You aren't a member of this board"], status: 403
    #   end
    # end

    private

    def challenge_params
      params.require(:challenge).permit(:name, :category, :end_date, :description)
    end
  end
end
  