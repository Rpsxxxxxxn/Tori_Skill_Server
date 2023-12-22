import { Body, Delete, Get, JsonController, Param, Post, Put, Req, Res } from "routing-controllers";
import UserService from "../../Domain/Services/UserService";
import UserRepositoryImpl from "../../Infrastructure/RepositoryImpl/UserRepositoryImpl";
import { Request, Response } from "express";
import UserForm from "../Forms/UserForm";
import UserEntity from "../../Domain/Entities/UserEntity";

@JsonController('/user')
class UserController {
  private userService: UserService = new UserService(new UserRepositoryImpl());

  @Post('/register')
  public async register(@Body() body: UserForm, @Res() res: Response) {
    try {
      await this.userService.create(body);
      return res.status(200).json({ message: 'ユーザー作成に成功しました' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  @Get('/')
  public async getUsers(@Res() res: Response) {
    try {
      const users: UserEntity[] = await this.userService.findAll();
      return res.status(200).json({ users: users, message: '取得に成功しました' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  @Get('/:id')
  public async getUserById(@Param('id') id: number, @Res() res: Response) {
    try {
      const user: UserEntity = await this.userService.findById(id);
      return res.status(200).json({ user: user, message: '取得に成功しました' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  @Put('/:id')
  public async putUser(@Param('id') id: number, @Body() body: UserForm, @Res() res: Response) {
    try {
      await this.userService.update(id, body);
      return res.status(200).json({ message: '更新に成功しました' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  @Delete('/:id')
  public async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.userService.delete(id);
      return res.status(200).json({ message: '削除に成功しました' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default UserController;