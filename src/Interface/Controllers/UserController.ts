import { Body, Delete, Get, Param, Post, Put, Req, Res } from "routing-controllers";
import UserService from "../../Domain/Services/UserService";
import UserRepositoryImpl from "../../Infrastructure/RepositoryImpl/UserRepositoryImpl";
import { Request, Response } from "express";
import UserView from "../Views/UserView";
import UserEntity from "../../Domain/Entities/UserEntity";

class UserController {
  private userService: UserService = new UserService(new UserRepositoryImpl());

  @Post('/user/register')
  public async register(@Body() body: UserView, @Req() req: Request, @Res() res: Response
  ) {
    const user: UserEntity = new UserEntity(0, body.name, body.email, '', '', new Date(), new Date());
    try {
      await this.userService.create(user);
      return res.status(200).json({ message: 'ユーザー作成に成功しました' });
    } catch (err) {
      return res.status(500).json({ message: 'システムエラーが発生しました' });
    }
  }

  @Get('/users')
  public async getUsers(@Req() req: Request, @Res() res: Response) {
    try {
      const users: UserEntity[] = await this.userService.findAll();
      if (users.length === 0) {
        return res.status(404).json({ message: 'ユーザーが存在しません' });
      }
      return res.status(200).json({ users: users, message: '取得に成功しました' });
    } catch (err) {
      return res.status(500).json({ message: 'システムエラーが発生しました' });
    }
  }

  @Get('/user/:id')
  public async getUser(@Param('id') id: number, @Res() res: Response) {
    try {
      const user: UserEntity = await this.userService.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'ユーザーが存在しません' });
      }
      return res.status(200).json({ user: user, message: '取得に成功しました' });
    } catch (err) {
      return res.status(500).json({ message: 'システムエラーが発生しました' });
    }
  }

  @Put('/users/:id')
  public async putUser(@Param('id') id: number, @Body() body: UserView, @Res() res: Response) {
    try {
      const user: UserEntity = new UserEntity(id, body.name, body.email, '', '', new Date(), new Date());
      await this.userService.update(user);
      return res.status(200).json({ message: '更新に成功しました' });
    } catch (err) {
      return res.status(500).json({ message: 'システムエラーが発生しました' });
    }
  }

  @Delete('/users/:id')
  public async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.userService.delete(id);
      return res.status(200).json({ message: '削除に成功しました' });
    } catch (err) {
      return res.status(500).json({ message: 'システムエラーが発生しました' });
    }
  }
}

export default UserController;