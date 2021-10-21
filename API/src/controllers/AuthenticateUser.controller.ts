import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUser.service";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const service = new AuthenticateUserService();
    const { code } = request.body;
    console.log("code = ", code);
    const result = await service.execute(code);
    console.log("result = ", result);
    return response.json(result);
  }
}

export { AuthenticateUserController };
