import { Request, Response, NextFunction } from 'express';
import User from "../../database/models/user";
import { CONFLICT, CREATED } from "../../constants/status";
import response from '../../helpers/response';

class AuthController {
    /**
     * @description the endpoint for signup
     * @param {object} req
     * @param {object} res
     */
    static async signup(req: Request, res: Response): Promise<Response>
    {
        const { body } = req;
        let user = await User.findOne({
            where: {
                email: body.email,
            },
        });

        if (user) {
            return response({
                res,
                status: CONFLICT,
                message: 'User already exists!'
            });
        };

        return response({
            res,
            status: CREATED,
            message: 'You have successfully signed up'
        });
    }
    /**
     * @description the endpoint for login
     * @param {object} req
     * @param {object} res
     */
    // static async login(req, res) {}
    /**
     * @description the endpoint for logout
     * @param {object} req
     * @param {object} res
     */
    // static async logout(req, res) {}
}

export default AuthController;