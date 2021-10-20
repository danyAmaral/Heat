import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUser.service";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const service = new AuthenticateUserService();
    const { code } = request.body;
    const result = service.execute(code);

    return response.json(result);
  }
}

export { AuthenticateUserController };
