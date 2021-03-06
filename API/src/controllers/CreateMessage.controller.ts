import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessage.service";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const service = new CreateMessageService();
    const { message } = request.body;
    const { user_id } = request;

    try {
      const result = await service.execute(message, user_id);
      return response.json(result);
    } catch (err: any) {
      return response.json(err.message);
    }
  }
}

export { CreateMessageController };
